import { useState } from "react";

const GovtIssuedIDSelect = ({ register, errors }) => {
  const [GovtID, setGovtID] = useState();

  const getID = (e) => {
    const getG = e.target.value;
    setGovtID(getG);
  };

  return (
    <div>
      <select onChange={(e) => getID(e)}>
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
            name="GovtIn"
            {...register("GovtIn", { maxLength: 12})}
            placeholder="Enter Adhaar Number"
          />
          {errors.GovtIn && <p style={{ color: "red", margin:"0",padding:"0" }}>Enter 12 digit Adhaar pin</p>}
        </>
      ) : GovtID === "Pan" ? (
      <>  <input
          type="text"
          name="PanIn"
placeholder="Enter Pan Number"
          {...register("PanIn", { maxLength: 10 })}
        />
        {errors.PanIn && <p style={{ color: "red", margin:"0",padding:"0" }}>Enter 10 digit Pan Number</p> }
        </>
      ) : (
      <> <input type="text" name="ID" {...register("ID",{required:true})} />{errors.ID && <p>ID field is required</p>}</> 
      )}
    </div>
  );
};

export default GovtIssuedIDSelect;
