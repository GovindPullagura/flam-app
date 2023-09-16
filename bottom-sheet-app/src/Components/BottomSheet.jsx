// src/BottomSheet.js
import React from "react";
import styles from "./BottomSheet.module.css";

const BottomSheet = ({
  sheetPosition,
  handleToggleSheet,
  handleCloseSheet,
  handleHalfOpen,
}) => {
  return (
    <div className={`${styles["bottom-sheet"]} ${styles[sheetPosition]}`}>
      <div className={styles["sheet-handle"]} onClick={handleHalfOpen}>
        Handle
      </div>
      <div className={styles["sheet-content"]}>
        <h2>Bottom Sheet Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          arcu nec justo convallis varius. Sed euismod tincidunt justo, a
          volutpat justo. Vivamus nec augue eget tellus cursus tempus eu vel
          erat.
        </p>
        <p>
          Donec malesuada luctus aliquam. Nulla et mauris non libero cursus
          cursus sed nec purus. Fusce vel neque quam. Sed nec tortor nec massa
          vehicula euismod. Curabitur ut quam non metus dapibus feugiat. Sed
          ultrices ante quis felis congue efficitur.
        </p>
        <p>
          Sed auctor arcu eu bibendum efficitur. Vestibulum non aliquam lectus.
          Etiam bibendum fermentum metus, a aliquam dolor pellentesque eu. Cras
          non sem eu augue tempor ullamcorper. Vivamus nec orci vitae enim
          facilisis tincidunt.
        </p>
        <button onClick={handleCloseSheet}>Close Sheet</button>
      </div>
    </div>
  );
};

export default BottomSheet;
