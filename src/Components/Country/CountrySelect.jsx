import { useState } from "react";

const CountrySelect = ({ register }) => {
  const [ShowCountryInput, setShowCountryInput] = useState();

  const Options = [
    { value: "India", label: "India" },
    { value: "NRI", label: "NRI(Non Resident Indian)" },
  ];

  const HandleChange = (e) => {
    const getCountryInput = e.target.value;
    setShowCountryInput(getCountryInput);
  };

  return (
    <div style={{ display: "flex" }}>
      <select
        name="Country"
        onChange={(e) => HandleChange(e)}
        {...register("Country")}
        style={{ width: "150px", marginRight: "10px" }}
      >
        <option value={null}>{null}</option>
        {Options.map((optC, indices) => {
          return (
            <option key={indices} value={optC.value}>
              {optC.label}
            </option>
          );
        })}
      </select>

      <>
        <>
          <input
            type="text"
            placeholder="Enter details"
            hidden = { ShowCountryInput == "India"}
            name="Foreign"
            {...register("Foreign")}
          />
        </>
      </>
    </div>
  );
};

export default CountrySelect;
