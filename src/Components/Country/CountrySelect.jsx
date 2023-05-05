import { useState } from "react";

const CountrySelect = ({ register, errors }) => {
  const [ShowCountryInput, setShowCountryInput] = useState();

  const Options = [
    { value: "India", label: "India" },
    { value: "NRI", label: "NRI(Non Resident Indian)" },
  ];

  const HandleChange = (e) => {
    const getInput = e.target.value;
    setShowCountryInput(getInput);
  };

  return (
    <div style={{ display: "flex" }}>
      <select
        onChange={(e) => HandleChange(e)}
        {...register("Country")}
        style={{ width: "150px", marginRight: "10px" }}
      >
        <option value={null}>{null}</option>
        {Options.map((optC, ind) => {
          return (
            <option key={ind} value={optC.value}>
              {optC.label}
            </option>
          );
        })}
      </select>
      {errors.Country && <p>{errors.Country.message}</p>}
      <>
        {ShowCountryInput === "NRI" ? (
          <div>
            <input
              type="text"
              placeholder="Enter details"
              name="Foreign"
              {...register("Foreign")}
            />
            {errors.Foreign && (
              <p style={{ color: "red" }}>{errors.Foreign.message}</p>
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
