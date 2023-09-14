"use client";

import clsx from "clsx";

interface IProps {
  id: string;
  description: string;
  label: string;
  value: number;
}

const StatBadge = ({ id, description, label, value }: IProps) => {
  return (
    <div className="stat__badge" data-tooltip-content={description} data-tooltip-id={id}>
      <div className={clsx("stat__badge--label", `stat__badge--label--${id}`)}>
        <span>{label}</span>
      </div>
      <div className="stat__badge--value">{value}</div>
    </div>
  );
};

export default StatBadge;
