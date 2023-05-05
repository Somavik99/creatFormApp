import { useState } from "react";

const CountrySelect = ({ register }) => {
  const [ShowCountryInput, setShowCountryInput] = useState();



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
       <option value="India">India</option>
       <option value="NRI">NRI(Non Resident Indian)</option>
      </select>

      <>
        {ShowCountryInput === "NRI" ? (
          <input
            type="text"
            placeholder="Enter details"
            name="Foreign"
            {...register("Foreign")}
          />
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default CountrySelect;
