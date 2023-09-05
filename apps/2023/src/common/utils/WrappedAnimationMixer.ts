import {
  type AnimationClip,
  type AnimationAction,
  type AnimationBlendMode,
  type AnimationObjectGroup,
  type AnimationActionLoopStyles,
  type Object3D,
  LoopOnce,
  AnimationMixer,
} from "three";

export interface WrappedAnimationAction extends AnimationAction {
  play: () => WrappedAnimationAction;
  stop: () => WrappedAnimationAction;
  reset: () => WrappedAnimationAction;
  startAt: (_time: number) => WrappedAnimationAction;
  setLoop: (_mode: AnimationActionLoopStyles, _repetitions: number) => WrappedAnimationAction;
  setEffectiveWeight: (_weight: number) => WrappedAnimationAction;
  fadeIn: (_duration: number) => WrappedAnimationAction;
  fadeOut: (_duration: number) => WrappedAnimationAction;
  crossFadeFrom: (
    _fadeOutAction: WrappedAnimationAction,
    _duration: number,
    _warp: boolean
  ) => WrappedAnimationAction;
  crossFadeTo: (
    _fadeInAction: WrappedAnimationAction,
    _duration: number,
    _warp: boolean
  ) => WrappedAnimationAction;
  stopFading: () => WrappedAnimationAction;
  setEffectiveTimeScale: (_timeScale: number) => WrappedAnimationAction;
  setDuration: (_duration: number) => WrappedAnimationAction;
  syncWith: (_action: WrappedAnimationAction) => WrappedAnimationAction;
  halt: (_duration: number) => WrappedAnimationAction;
  warp: (
    _statTimeScale: number,
    _endTimeScale: number,
    _duration: number
  ) => WrappedAnimationAction;
  stopWarping: () => WrappedAnimationAction;
  onFinish: (_cb: (_this: WrappedAnimationAction) => void) => WrappedAnimationAction;
}

export interface Api<T extends AnimationClip> {
  ref: React.MutableRefObject<Object3D | undefined | null>;
  clips: AnimationClip[];
  mixer: WrappedAnimationMixer;
  names: T["name"][];
  actions: {
    [_key in T["name"]]: WrappedAnimationAction | null;
  };
}

export class WrappedAnimationMixer extends AnimationMixer {
  clipAction(
    clip: AnimationClip,
    root?: Object3D | AnimationObjectGroup | undefined,
    blendMode?: AnimationBlendMode | undefined
  ): WrappedAnimationAction {
    const _this = super.clipAction.call(this, clip, root, blendMode) as WrappedAnimationAction;

    _this.onFinish = (cb) => {
      const intervalId = setInterval(() => {
        if (_this.loop !== LoopOnce || !Number.isFinite(_this.repetitions)) {
          clearInterval(intervalId);
          throw new Error(
            `'${clip.name}' is infinity loop clip. callback never execute from 'onFinish()'`
          );
        }
        if (_this.time > _this.getClip().duration - 0.1) {
          clearInterval(intervalId);
          cb(_this);
        }
      }, 100);

      return _this;
    };

    return _this;
  }
}
