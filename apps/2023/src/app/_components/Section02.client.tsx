"use client";

import homeStyles from "../_styles/home.module.scss";

import GoogleMapContainer from "./partials/GoogleMapContainer.client";
import ModelContainer from "./partials/ModelContainer.client";
import RoomModel from "./partials/RoomModel.client";

const Section02 = () => {
  return (
    <div className={homeStyles["section-container"]}>
      <div className={homeStyles.section}>
        <GoogleMapContainer />
        <ModelContainer cameraNear={0.1} cameraPosition={[10, 6, 10]}>
          <RoomModel />
        </ModelContainer>
      </div>
    </div>
  );
};

export default Section02;
