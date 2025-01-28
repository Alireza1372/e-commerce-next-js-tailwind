import React from "react";

export default function Selector({ id, values }) {
  return (
    <select name={id} id={id}>
      {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
