import React, {useState} from "react";

const FormRadio = ({labelName, name, options, values, handleChange, key = null}) => {
    const [radioButton, setRadioButton] = React.useState();
    const numberOfOptions = options.length
    const className = `grid w-auto grid-cols-${numberOfOptions} space-x-2 rounded-xl bg-gray-200 p-2`
    return (
        <>
            <label className="block text-sm font-medium text-gray-900 m-0">
                {labelName}
            </label>
            <div
                className={className}
                x-data="app"
            >
                {options.map((item, index) => (
                    <div key={item} className="col-span-1 row-span-1">
                        <input
                            type="radio"
                            name={name}
                            id={name + '-' + item}
                            value={values[index]}
                            onChange={handleChange}
                            className="peer hidden"
                        />
                        <label
                            key={item}
                            htmlFor={name + '-' + item}
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                            {options[index]}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FormRadio;
