import type { CanvasState } from "myTypes";

const resizeHandler = (
  canvas: HTMLCanvasElement | null,
  viewport: CanvasState.GetViewport,
  initFunc: () => void
) => {
  return () => {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (viewport.x > 0) {
        viewport.x = window.innerWidth;
      } else if (viewport.x < 0) {
        viewport.x = -window.innerWidth;
      } else if (viewport.x === 0) {
        viewport.x = 0;
      }

      if (viewport.y > 0) {
        viewport.y = window.innerHeight;
      } else if (viewport.y === 0) {
        viewport.y = 0;
      }

      initFunc();
    }
  };
};

export default resizeHandler;
