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
    <div style={{ display: "flex" }}>
      <select
        onChange={(e) => HandleChange(e)}
        {...register("CountrySelect")}
        style={{ width: "150px", marginRight: "10px" }}
      >
        <option value={null}>{null}</option>
        {Options.map((optC, indi) => {
          return (
            <option key={indi} value={optC.value}>
              {optC.label}
            </option>
          );
        })}
      </select>
      {errors.CountrySelect && <p>country is required</p>}
      <>
        {ShowInput === "NRI" ? (
          <div>
            <input
              type="text"
              placeholder="Enter details"
              name="Foreign"
              {...register("Foreign")}
            />
            {errors.Foreign && (
              <p style={{ color: "red" }}>This Field Required</p>
            )}
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default CountrySelect;
