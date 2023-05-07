import React from "react";

const FormSlider = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  maxValue,
  minValue,
  handleChange,
}) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">
      {labelName}
    </label>
    <input
      type="range"
      min={minValue}
      max={maxValue}
      className="slider"
      id={name}
      name={name}
      onChange={handleChange}
      value={value}
    ></input>
  </div>
);

export default FormSlider;
