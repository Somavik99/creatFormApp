import { useState } from "react";

const CountrySelect = ({ register, errors }) => {
  const [ShowInput, setShowInput] = useState();

  const Options = [
    { value: "India", label: "India" },
    { value: "NRI", label: "NRI" },
  ];

  const HandleChange = (e) => {
    const getInput = e.target.value;
    setShowInput(getInput);
  };

  return (
    <div>
      <select onChange={(e) => HandleChange(e)}>
        {Options.map((optC, ind) => {
          return (
            <option key={ind} value={optC.value}>
              {optC.label}
            </option>
          );
        })}
      </select>
      {ShowInput === "NRI" ? (
        <div>
          <input
            type="text"
            placeholder="Enter details"
            name="Foreign"
            {...register("Foreign")}
          />
          {errors.NriInp && <p style={{color:"red"}}>This Field Required</p>}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CountrySelect;
