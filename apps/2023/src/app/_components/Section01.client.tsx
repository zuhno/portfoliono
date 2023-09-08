"use client";

import homeStyles from "../_styles/home.module.scss";

import ArmatureModel from "./partials/ArmatureModel.client";
import ModelContainer from "./partials/ModelContainer.client";

const Section01 = () => {
  return (
    <div className={homeStyles["section-container"]}>
      <div className={homeStyles.section}>
        <div className={homeStyles.section01}>
          <div className={homeStyles["armature-view-container"]}>
            <ModelContainer cameraNear={0.1} cameraPosition={[0, 0, 20]}>
              <ArmatureModel />
            </ModelContainer>
          </div>
          <div className={homeStyles.info}></div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
