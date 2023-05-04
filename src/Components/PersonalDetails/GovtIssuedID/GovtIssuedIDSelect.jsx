import { useState } from "react";

const GovtIssuedIDSelect = ({ register, errors }) => {
  const [GovtID, setGovtID] = useState();

  const getID = (e) => {
    const getG = e.target.value;
    setGovtID(getG);
  };

  return (
    <div style={{ display: "flex" }}>
      <select onChange={(e) => getID(e)} style={{ marginRight: "5px" }}>
        <option disabled selected>
          ID Type
        </option>
        <option value="Adhaar">Adhaar Card</option>
        <option value="Pan">Pan Card</option>
      </select>

      {GovtID === "Adhaar" ? (
        <>
          <input
            type="text"
            name="adhaar"
            {...register("adhaar", { maxLength: 12 })}
            placeholder="Enter Adhaar Number"
          />
          {errors.adhaar && (
            <p style={{ color: "red" }}>
             {errors.adhaar.message}
            </p>
          )}
        
        </>
      ) : GovtID === "Pan" ? (
        <p style={{display:"grid",gridTemplateColumns:"repeat(2,0.5fr)"}}>
          
          <input
            type="text"
            name="PanIn"
            placeholder="Enter Pan Number"
            {...register("PanIn", { maxLength: 10 })}
          />
          {errors.PanIn != "maxLength" && (
            <p style={{ color: "red", margin: "0", padding: "0" }}>
              Enter 10 digit Pan Number
            </p>
          )}
        </p>
      ) : (
        <>
          {" "}
          <input
            type="text"
            name="ID"
            {...register("ID", { required: true })}
          />
          {errors.ID && <p>ID field is required</p>}
        </>
      )}
    </div>
  );
};

export default GovtIssuedIDSelect;
