import { useState } from "react";

const CountrySelect = () => {
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
        {ShowCountryInput === "NRI" ? (
          <>
            <input
              type="text"
              placeholder="Enter details"
              name="Foreign"
       
            />
          
          </>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default CountrySelect;
