import { AnimationAction, type AnimationActionLoopStyles } from "three";

export class WrappedAnimationAction extends AnimationAction {
  play(): WrappedAnimationAction;
  stop(): WrappedAnimationAction;
  reset(): WrappedAnimationAction;
  startAt(_time: number): WrappedAnimationAction;
  setLoop(_mode: AnimationActionLoopStyles, _repetitions: number): WrappedAnimationAction;
  setEffectiveWeight(_weight: number): WrappedAnimationAction;
  fadeIn(_duration: number): WrappedAnimationAction;
  fadeOut(_duration: number): WrappedAnimationAction;
  crossFadeFrom(
    _fadeOutAction: WrappedAnimationAction,
    _duration: number,
    _warp: boolean
  ): WrappedAnimationAction;
  crossFadeTo(
    _fadeInAction: WrappedAnimationAction,
    _duration: number,
    _warp: boolean
  ): WrappedAnimationAction;
  stopFading(): WrappedAnimationAction;
  setEffectiveTimeScale(_timeScale: number): WrappedAnimationAction;
  setDuration(_duration: number): WrappedAnimationAction;
  syncWith(_action: WrappedAnimationAction): WrappedAnimationAction;
  halt(_duration: number): WrappedAnimationAction;
  warp(_statTimeScale: number, _endTimeScale: number, _duration: number): WrappedAnimationAction;
  stopWarping(): WrappedAnimationAction;
  onFinish(_cb: (_this: WrappedAnimationAction) => void): WrappedAnimationAction;
}
