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
        <div style={{display:"flex"}}>
          <input
            type="number"
            name="adhaar"
            {...register("adhaar")}
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
            type="number"
            name="PAN"
            placeholder="Enter Pan Number"
            style={{ height: "30px" }}
            {...register("PAN", { maxLength: 10 })}
          />
          {errors.PAN  && (
            <div style={{ color: "red", margin: "0", padding: "0" }}>
              {errors.PAN.message } 
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
