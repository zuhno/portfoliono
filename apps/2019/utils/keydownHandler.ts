import type MoveStructure from "../canvasItems/MoveStructure";
import type RisingStructure from "../canvasItems/RisingStructure";
import type Structure from "../canvasItems/Structure";
import type User from "../canvasItems/User";
import type { CanvasState } from "myTypes";

const keydownHandler = (
  user: User,
  fn: CanvasState.setTitleFn,
  targets: (MoveStructure | Structure | RisingStructure)[]
) => {
  return (e: KeyboardEvent) => {
    const { code } = e;
    user.directionControl(e);
    if (code === "Enter") {
      targets.forEach((target) => target.insertPage(fn));
    } else if (code === "Space") {
      targets.forEach((target) => target.moreInfo());
    }
  };
};

export default keydownHandler;
