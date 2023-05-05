import { useState } from "react";

const GovtIssuedIDSelect = ({ register, errors }) => {
  const [GovtID, setGovtID] = useState();

  const getID = (e) => {
    const getG = e.target.value;
    setGovtID(getG);
  };

  return (
    <div style={{ display: "flex" }}>
      <select
        onChange={(e) => getID(e)}
        style={{ marginRight: "5px", height: "35px" }}
      >
        <option value={null}>{null}</option>
        <option value="Adhaar">Adhaar Card</option>
        <option value="Pan">Pan Card</option>
      </select>

      {GovtID === "Adhaar" ? (
        <p style={{display:"flex"}}>
          <input
            type="text"
            name="adhaar"
            {...register("adhaar", { maxLength: 12 })}
            placeholder="Enter Adhaar Number"
            style={{ height: "30px" }}
          />
          {errors.adhaar && (
            <p style={{ color: "red", height: "30px" }}>
              {errors.adhaar.message}
            </p>
          )}
        </p>
      ) : GovtID === "Pan" ? (
        <p style={{ display: "flex" }}>
          <input
            type="text"
            name="PanIn"
            placeholder="Enter Pan Number"
            style={{ height: "30px" }}
            {...register("PanIn", { maxLength: 10 })}
          />
          {errors.PanIn > "maxLength" && (
            <p style={{ color: "red", margin: "0", padding: "0" }}>
              Enter 10 digit Pan Number
            </p>
          )}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default GovtIssuedIDSelect;
