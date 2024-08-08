import React from "react";
import styles from "./DotNavigation.module.scss";

interface DotNavigationProps {
  value: number;
}

const DotNavigation: React.FC<DotNavigationProps> = ({ value }) => {
  return (
    <div className={styles.box}>
      {[1, 2, 3, 4].map((_, i) => (
        <div
          key={i}
          className={`${styles.dot} ${value === i ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
