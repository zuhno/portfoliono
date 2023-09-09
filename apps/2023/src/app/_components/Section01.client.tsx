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
            <ModelContainer cameraPosition={[0, 0, 17]}>
              <ArmatureModel />
            </ModelContainer>
          </div>
          <div className={homeStyles.stat}>
            statstatstatstatstats sdsd statstatstatstatstats sdsd statstatstatstatstats sdsd
          </div>
          <div className={homeStyles.nick}>Cuttleman</div>
          <div className={homeStyles.info}>info</div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
