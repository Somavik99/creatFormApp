import { useState } from "react";


const GovtIssuedIDSelect = ({ register, errors }) => {
  const [GovtID, setGovtID] = useState();

  const ViewID = (e) => {
    const viewG = e.target.value;
    setGovtID(viewG);
  };

  return (
    <div style={{ display: "flex" }}>
      <select
      value={GovtID}
        onChange={(e) => ViewID(e)}
        style={{ marginRight: "5px", height: "35px" }}
      >
        <option value={null}>{null}</option>
        <option value="Adhaar">Adhaar Card</option>
        <option value="Pan">Pan Card</option>
      </select>
      <input
        type="text"
       name="GovtInput"
        {...register("GovtInput")}
      />
      {errors.name && <p>{errors.name.message}</p>}

      {/* {GovtID === "Adhaar" ? (
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
      )} */}
    </div>
  );
};

export default GovtIssuedIDSelect;
