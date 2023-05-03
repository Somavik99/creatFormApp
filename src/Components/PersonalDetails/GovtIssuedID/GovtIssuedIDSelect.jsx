import { forwardRef } from "react";

const GovtIssuedID = forwardRef(({ onChange, onBlur,  label,register ,errors}, ref) => (

  <>
    <label>{label}</label>
    <select name="GovtID" placeholder="ID Type" ref={ref} onChange={onChange} onBlur={onBlur} {...register("GovtID")}>
      <option value="Adhaar" id="Adhaar">Adhaar Card</option>
      <option value="Pan" id="Pan">Pan Card</option>
    </select>
    <input type="text" name="Govt" {...register("Govt",{required:"true"})} />
{errors.Govt?.type === "required" && <p style={{color:"red"}}>This Field is required</p>}
  </>
));

export default GovtIssuedID;
