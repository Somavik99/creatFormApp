import { useState } from "react";
import BloodGroup from "./BloodGroup";
import "./otherD.css";
// import Select from "react-select";

const OtherDetails = ({ register }) => {
  const [MultiSelect, setMultiSelect] = useState({
    NationSelect: "",
    Religion: "",
  });

  const MultiChange = (e) => {
    const { name, value } = e.target;

    setMultiSelect(() => {
      return { ...MultiSelect, [name]: value };
    });
  };

  const optionsM = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorcee", label: "Divorcee" },
    { value: "Widowed", label: "Widowed" },
  ];

  return (
    <div>
      <h3 style={{ textDecorationLine: "underline" }}>Other Details:</h3>
      <div className="OtherContainer">
        <div>
          <label htmlFor="">Occupation:</label>
          <input
            type="text"
            {...register("Occupation")}
            style={{ marginLeft: "8px", width: "200px", height: "30px" }}
          />
        </div>
        <div>
          <label htmlFor="">Religion:</label>
          <select
            name="Religion"
            {...register("Religion")}
            onChange={(e) => MultiChange(e)}
            style={{ marginLeft: "8px", width: "200px", height: "35px" }}
          >
            <option defaultValue={MultiSelect} value={null}></option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Sikh">Sikh</option>
            <option value="Christian">Christian</option>
            <option value="DoWT">Do not Want to Specify</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label htmlFor="">Marital Status: </label>

          <select name="Marital">
            <option value={null}>{null}</option>
            {optionsM.map((optM, ind) => (
              <option key={ind} value={optM.value}>
                {optM.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="">Blood Group:</label>
          <BloodGroup />
        </div>
        <div>
          <label htmlFor="">Nationality:</label>
          <select
            name="NationSelect"
            style={{ marginLeft: "8px", width: "200px", height: "35px" }}
            onChange={(e) => MultiChange(e)}
          >
            <option placeholder="Enter Nationality" value={null}></option>
            <option value="Indian">Indian</option>
            <option value="Other">Other</option>
          </select>
          {MultiSelect.NationSelect === "Other" ? (
            <span>
              <input type="text" placeholder="Please Specify" />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
