"use client";

import clsx from "clsx";

import homeStyles from "../../_styles/home.module.scss";

interface IProps {
  id: string;
  description: string;
  label: string;
  value: number;
}

const StatBadge = ({ id, description, label, value }: IProps) => {
  return (
    <div className={homeStyles.stat__badge} data-tooltip-content={description} data-tooltip-id={id}>
      <div
        className={clsx(homeStyles["stat__badge--label"], homeStyles[`stat__badge--label--${id}`])}
      >
        <span>{label}</span>
      </div>
      <div className={homeStyles["stat__badge--value"]}>{value}</div>
    </div>
  );
};

export default StatBadge;
