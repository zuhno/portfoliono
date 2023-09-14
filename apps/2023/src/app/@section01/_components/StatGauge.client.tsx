"use client";

import { useMemo } from "react";

interface IProps {
  id: string;
  description: string;
  label: string;
  value: number;
  max: number;
}

const StatGauge = ({ id, description, label, value, max }: IProps) => {
  const percent = useMemo(() => Math.floor((value / max) * 100), [value, max]);

  return (
    <div className="stat__gauge" data-tooltip-content={description} data-tooltip-id={id}>
      <div className="stat__gauge--label">{label}</div>
      <div className="stat__gauge--bar">
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: "#b31818",
            borderRadius: "10rem",
          }}
        />
        <span>
          {value} / {max}
        </span>
      </div>
    </div>
  );
};

export default StatGauge;
