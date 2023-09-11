"use client";

import { Tooltip } from "react-tooltip";

import { stats } from "@common/constants";

import homeStyles from "../_styles/home.module.scss";

import ArmatureModel from "./partials/ArmatureModel.client";
import ModelContainer from "./partials/ModelContainer.client";
import StatBadge from "./partials/StatBadge.client";
import StatGauge from "./partials/StatGauge.client";

const Section01 = () => {
  const [hpStat, ...restStats] = stats;
  return (
    <>
      <div className={homeStyles["section-container"]}>
        <div className={homeStyles.section}>
          <div className={homeStyles.section01}>
            <div className={homeStyles["armature-view-container"]}>
              <ModelContainer cameraPosition={[0, 0, 17]}>
                <ArmatureModel />
              </ModelContainer>
            </div>
            <div className={homeStyles.stat}>
              <StatGauge
                description={hpStat.description}
                id={hpStat.id}
                label={hpStat.label}
                max={hpStat.max}
                value={hpStat.value}
              />
              <p className={homeStyles["stat__badge-title"]}>Stat</p>
              <div className={homeStyles["stat__badge-container"]}>
                {restStats.map((stat) => (
                  <StatBadge
                    description={stat.description}
                    id={stat.id}
                    key={stat.id}
                    label={stat.label}
                    value={stat.value}
                  />
                ))}
              </div>
            </div>
            <div className={homeStyles.nick}>Cuttleman</div>
            <div className={homeStyles.info}>info</div>
          </div>
        </div>
      </div>
      {stats.map((stat) => (
        <Tooltip id={stat.id} key={stat.id} />
      ))}
    </>
  );
};

export default Section01;
