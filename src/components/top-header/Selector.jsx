import React from "react";

export default function Selector({ id, values, styles }) {
  return (
    <select name={id} id={id} className={styles}>
      {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
