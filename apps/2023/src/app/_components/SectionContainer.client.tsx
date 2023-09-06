"use client";

import styles from "../_styles/home.module.scss";

const SectionContainer = ({ children }) => {
  return <section className={styles["section-container"]}>{children}</section>;
};

export default SectionContainer;
