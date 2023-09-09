import {
  type AnimationClip,
  type AnimationBlendMode,
  type AnimationObjectGroup,
  type Object3D,
  LoopOnce,
  AnimationMixer,
} from "three";

import { type WrappedAnimationAction } from "@common/types/WrappedAnimationAction";

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
    const _this = super.clipAction(clip, root, blendMode) as WrappedAnimationAction;

    _this.onFinish = (cb: (_this: WrappedAnimationAction) => void) => {
      const intervalId = setInterval(() => {
        if (_this.loop !== LoopOnce || !Number.isFinite(_this.repetitions)) {
          clearInterval(intervalId);
          throw new Error(
            `'${
              _this.getClip().name
            }' is infinity loop clip. callback never execute from 'onFinish()'`
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
