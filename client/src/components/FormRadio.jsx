import React from "react";
const loop = (options, values, name, handleChange) => {
  let loopdata = [];
  let optionsList = options.split(",");
  let valuesList = values.split(",");

  for (let index = 0; index < optionsList.length; index++) {
    loopdata.push(
      <div>
        <input
          type="radio"
          key={index}
          name={name}
          id={index + name}
          value={valuesList[index]}
          onChange={handleChange}
          className="peer hidden"
        />
        <label
          htmlFor={index + name}
          className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
        >
          {optionsList[index]}
        </label>
      </div>
    );
  }
  return loopdata;
};
const FormRadio = ({ labelName, name, options, values, handleChange }) => (
  <>
    <label className="block text-sm font-medium text-gray-900 m-0">
      {labelName}
    </label>
    <div
      className={`grid w-auto grid-cols-${options.split(",").length} space-x-2 rounded-xl bg-gray-200 p-2`}
      x-data="app"
    >
      {loop(options, values, name, handleChange)}
    </div>
  </>
);

export default FormRadio;
