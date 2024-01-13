"use client";

import "./_styles/page.scss";

import clsx from "clsx";
import { useInView } from "framer-motion";
import { type SyntheticEvent, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

import ModelContainer from "@common/components/ModelContainer.client";
import { careerHistory, companiesCoordinate } from "@common/constants";
import { useGTM } from "@common/contexts/GTMProvider.client";
import { ELocation } from "@common/types/enum";
import { haversine } from "@common/utils/distance";

import GoogleMapContainer from "./_components/GoogleMapContainer.client";
import RoomModel from "./_components/RoomModel.client";

const baseDestination = { toHome: false, toLab: false, toMW: false, toVPlanet: false };

const Section02 = () => {
  const ref = useRef(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });
  const { gtmFlying } = useGTM();
  const [destination, setDestination] = useState(baseDestination);
  const [location, setLocation] = useState<ELocation>(ELocation.THE_VPLANET);
  const [isFlight, setIsFlight] = useState(false);
  const [distance, setDistance] = useState(0);
  const [workHistoryTxt, setWorkHistoryTxt] = useState(careerHistory[ELocation.THE_VPLANET]);

  const flightTrigger = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { tooltipId } = (e.target as HTMLButtonElement).dataset as { tooltipId: ELocation };

    if (isFlight || location === tooltipId) return;

    const prevLocation = companiesCoordinate[location];
    const nextLocation = companiesCoordinate[tooltipId];

    const distanceKM = haversine({
      lat1: prevLocation.lat,
      lng1: prevLocation.lng,
      lat2: nextLocation.lat,
      lng2: nextLocation.lng,
    });

    setIsFlight(true);
    setDistance(distanceKM);
    gtmFlying(tooltipId);

    switch (tooltipId) {
      case ELocation.NOMAD_CODERS:
        setDestination({ ...baseDestination, toHome: true });
        setLocation(ELocation.NOMAD_CODERS);
        break;
      case ELocation.METAVERSE_WORLD:
        setDestination({ ...baseDestination, toMW: true });
        setLocation(ELocation.METAVERSE_WORLD);
        break;
      case ELocation.QUEST3:
        setDestination({ ...baseDestination, toLab: true });
        setLocation(ELocation.QUEST3);
        break;
      case ELocation.THE_VPLANET:
        setDestination({ ...baseDestination, toVPlanet: true });
        setLocation(ELocation.THE_VPLANET);
        break;

      default:
        break;
    }
  };

  const changeBalloonText = () => {
    setWorkHistoryTxt(careerHistory[location]);
  };

  const balloonScrollReset = () => {
    textRef.current?.scrollTo({ top: 0 });
  };

  const onArrived = () => {
    setIsFlight(false);
    balloonScrollReset();
    changeBalloonText();
  };

  return (
    <div className="section-container" id="career" ref={ref}>
      <div className="section">
        <div className="section02">
          <GoogleMapContainer
            distance={distance}
            toHome={destination.toHome}
            toLab={destination.toLab}
            toMW={destination.toMW}
            toVPlanet={destination.toVPlanet}
          />
          <ModelContainer cameraNear={0.1} cameraPosition={[10, 6, 10]}>
            <RoomModel
              distance={distance}
              isFlight={isFlight}
              isInit={isInView}
              onArrived={onArrived}
            />
          </ModelContainer>

          <div className={clsx("work-history-balloon", isFlight && "hide")}>
            <p ref={textRef}>{workHistoryTxt}</p>
          </div>

          <div className="career-btns">
            <button
              className={location === ELocation.THE_VPLANET ? "button--active" : ""}
              data-tooltip-content="flight to the vplanet"
              data-tooltip-id={ELocation.THE_VPLANET}
              onClick={flightTrigger}
              type="button"
            >
              {`The\nVPlanet`}
            </button>
            <Tooltip id={ELocation.THE_VPLANET} />
            <button
              className={location === ELocation.QUEST3 ? "button--active" : ""}
              data-tooltip-content="flight to quest3"
              data-tooltip-id={ELocation.QUEST3}
              onClick={flightTrigger}
              type="button"
            >
              Quest3
            </button>
            <Tooltip id={ELocation.QUEST3} />
            <button
              className={location === ELocation.METAVERSE_WORLD ? "button--active" : ""}
              data-tooltip-content="flight to metaverse world"
              data-tooltip-id={ELocation.METAVERSE_WORLD}
              onClick={flightTrigger}
              type="button"
            >
              {"Metaverse\nWorld"}
            </button>
            <Tooltip id={ELocation.METAVERSE_WORLD} />
            <button
              className={location === ELocation.NOMAD_CODERS ? "button--active" : ""}
              data-tooltip-content="flight to home"
              data-tooltip-id={ELocation.NOMAD_CODERS}
              onClick={flightTrigger}
              type="button"
            >
              {"Nomad\nCoders"}
            </button>
            <Tooltip id={ELocation.NOMAD_CODERS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
