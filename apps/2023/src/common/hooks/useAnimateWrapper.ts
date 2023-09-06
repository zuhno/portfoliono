import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { type AnimationClip, Object3D } from "three";

import { type WrappedAnimationAction } from "@common/types/WrappedAnimationAction";
import { type Api, WrappedAnimationMixer } from "@common/utils/WrappedAnimationMixer";

export function useAnimationsWrapper<T extends AnimationClip>(
  clips: T[],
  root?: React.MutableRefObject<Object3D | undefined | null> | Object3D
): Api<T> {
  const ref = useRef<Object3D>();
  const lazyActions = useRef({});

  const [actualRef] = useState(() =>
    root ? (root instanceof Object3D ? { current: root } : root) : ref
  );
  const [mixer] = useState(() => new WrappedAnimationMixer(undefined as unknown as Object3D));

  const api = useMemo<Api<T>>(() => {
    const actions = {} as { [_key in T["name"]]: WrappedAnimationAction | null };

    clips.forEach((clip) =>
      Object.defineProperty(actions, clip.name, {
        enumerable: true,
        get() {
          if (actualRef.current) {
            return (
              lazyActions.current[clip.name] ||
              (lazyActions.current[clip.name] = mixer.clipAction(clip, actualRef.current))
            );
          }
          return null;
        },
        configurable: true,
      })
    );
    return { ref: actualRef, clips, actions, names: clips.map((c) => c.name), mixer };
  }, [clips, mixer, actualRef]);

  useFrame((state, delta) => mixer.update(delta));

  useLayoutEffect(() => {
    if (root) actualRef.current = root instanceof Object3D ? root : root.current;
    (mixer as any)._root = actualRef.current;
  });

  useEffect(() => {
    const currentRoot = actualRef.current;
    return () => {
      // Clean up only when clips change, wipe out lazy actions and uncache clips
      lazyActions.current = {};
      mixer.stopAllAction();
      Object.values(api.actions).forEach((action) => {
        if (currentRoot) {
          mixer.uncacheAction(action as AnimationClip, currentRoot);
        }
      });
    };
  }, [clips]);

  return api;
}

export default useAnimationsWrapper;
