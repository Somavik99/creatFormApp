import { useState } from "react";
import "./GovtIssuedID.css";

const GovtIssuedIDSelect = ({ register, errors,SelectGovtID,Adhaar }) => {
  const [GovtID, setGovtID] = useState();

  const ViewID = (e) => {
    const viewG = e.target.value;
    setGovtID(viewG);
  };

  return (
    <div  className="GovtContainer">
      <select
        name={SelectGovtID}
        {...register(SelectGovtID)}
        onChange={(e) => ViewID(e)}
        style={{ marginRight: "5px", height: "35px" }}
      >
        <option value={null}>{null}</option>
        <option value="Adhaar" name="Adhaar">
          Adhaar Card
        </option>
        <option value="Pan" name="PAN">
          Pan Card
        </option>
      </select>

      {GovtID === "Adhaar" ? (
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name={Adhaar}
            {...register(Adhaar)}
            placeholder="Enter Adhaar Number"
            style={{ height: "30px" }}
          />
          {errors.adhaar && (
            <div style={{ color: "red", height: "30px" }}>
              {errors.adhaar.message}
            </div>
          )}
        </div>
      ) : GovtID === "Pan" ? (
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name="PAN"
            placeholder="Enter Pan Number"
            style={{ height: "30px" }}
            {...register("PAN", { maxLength: 10 })}
          />
          {errors.PAN && (
            <div style={{ color: "red", margin: "0", padding: "0" }}>
              {errors.PAN.message}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GovtIssuedIDSelect;
