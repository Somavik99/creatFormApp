import { forwardRef } from "react";

const GovtIssuedID = forwardRef(({ onChange, onBlur,  label,register }, ref) => (

  <>
    <label>{label}</label>
    <select name="GovtID" value={null} placeholder="ID Type" ref={ref} onChange={onChange} onBlur={onBlur} {...register("GovtID")}>
      <option disabled="true" >Select ID</option>
      <option value="Adhaar" id="Adhaar">Adhaar Card</option>
      <option value="Pan" id="Pan">Pan Card</option>
    </select>

  </>
));

export default GovtIssuedID;