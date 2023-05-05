import CountrySelect from "../Country/CountrySelect";
import "./Address.css";
import CitySelect from "./City/CitySelect";
import StateSelect from "./State/StateSelect";

const Address = ({ register,errors }) => {
  return (
    <div>
      <h3 style={{textDecorationLine:"underline"}}>Address Details</h3>
      <div className="AddressD">
        <div>
          <label htmlFor="Address">Address:</label>
          <input type="text" name="Address" {...register("Address")} />
          {errors.Address && <p>{errors.Address.message}</p>}
        </div>
        <div style={{display:"flex"}}>
          <label htmlFor="State">State:</label>
          <StateSelect register={register} errors={errors} />
        </div>
        <div>
          <label htmlFor="City">City:</label>
          <CitySelect register={register} errors={errors} />
        </div>
        <div style={{display:"flex"}}>
          <label htmlFor="Country">Country:</label>
          <CountrySelect register={register} errors={errors} />
        </div>
        <div>
          <label htmlFor="">Pin Code:</label>
          <input
            type="number"
            name="Pin"
            {...register("Pin", { valueAsNumber: true })}
          />
          {errors.Pin && <p>{errors.Pin.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Address;
