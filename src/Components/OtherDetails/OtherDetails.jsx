import { useState } from "react";
import BloodGroup from "./BloodGroup";
import "./otherD.css";
// import Select from "react-select";

const OtherDetails = ({ register,Occupation,Religion,Marital,BloodGroups,NationalityInput }) => {
  const [NationSelect, setNationSelect] = useState();

  const MultiChange = (e) => {
    const getNation = e.target.value;

    setNationSelect(getNation);
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
            {...register(Occupation)}
            style={{ marginLeft: "8px", width: "200px", height: "30px" }}
          />
        </div>
        <div>
          <label htmlFor="">Religion:</label>
          <select
            name={Religion}
            {...register(Religion)}
            style={{ marginLeft: "8px", width: "200px", height: "35px" }}
          >
            <option value={null}></option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Sikh">Sikh</option>
            <option value="Christian">Christian</option>
            <option value="DoWT">Do not Want to Specify</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label htmlFor="MaritalStatus">Marital Status: </label>

          <select name={Marital} {...register(Marital)}>
            <option value={null}>{null}</option>
            {optionsM.map((optM, ind) => (
              <option key={ind} value={optM.value}>
                {optM.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="BloodGroup">Blood Group:</label>
          <BloodGroup  BloodGroups={BloodGroups} register={register} />
        </div>
        <div  className="NationalityContainer">
          <label htmlFor="Nationality">Nationality:</label>
          <select
            name="Nationality"
            style={{ marginLeft: "8px", width: "200px", height: "35px" }}
            onChange={(e) => MultiChange(e)}
          >
            <option placeholder="Enter Nationality" value={null}></option>
            <option value="Indian">Indian</option>
            <option value="Other">Other</option>
          </select>

          {NationSelect === "Other" && 
            <span>
              <input type="text" placeholder="Please Specify" {...register(NationalityInput)}  style={{marginLeft:"8px"}}/>
            </span>}
         
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
