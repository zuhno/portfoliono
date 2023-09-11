"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

import homeStyles from "../_styles/home.module.scss";

import GoogleMapContainer from "./partials/GoogleMapContainer.client";
import ModelContainer from "./partials/ModelContainer.client";
import RoomModel from "./partials/RoomModel.client";

const Section02 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className={homeStyles["section-container"]} ref={ref}>
      <div className={homeStyles.section}>
        <div className={homeStyles.section02}>
          <GoogleMapContainer toHome={false} toItam={false} toLab={false} toMW={false} />
          <ModelContainer cameraNear={0.1} cameraPosition={[10, 6, 10]}>
            <RoomModel isFlight={false} isInit={isInView} />
          </ModelContainer>
        </div>
      </div>
    </div>
  );
};

export default Section02;
