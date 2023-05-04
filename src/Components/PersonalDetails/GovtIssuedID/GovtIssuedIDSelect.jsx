import { forwardRef, useState } from "react";

const [GovtID, setDovtID] = useState()

const GovtIssuedID = forwardRef(({ onChange, onBlur,  label,register,errors }, ref) => (

  
  <>
    <label>{label}</label>
    <select name="GovtID"  placeholder="ID Type" ref={ref} onChange={onChange} onBlur={onBlur} {...register("GovtID")}>
      <option value={null} disabled="true" >Select ID</option>
      <option value="Adhaar" id="Adhaar">Adhaar Card</option>
      <option value="Pan" id="Pan">Pan Card</option>
    </select>
          <input type="text" name="Govt" {...register("Govt")} />
          {errors.Govt && <p style={{ color: "red" }}>{errors.Govt.message}</p>}
  </>
));

export default GovtIssuedID;
