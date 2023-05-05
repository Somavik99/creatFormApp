import CountrySelect from "../Country/CountrySelect";
import "./Address.css";
import CitySelect from "./City/CitySelect";
import StateSelect from "./State/StateSelect";

const Address = ({register}) => {
  return (
    <div>
      <h3 style={{textDecorationLine:"underline"}}>Address Details</h3>
      <div className="AddressD">
        <div>
          <label htmlFor="Address">Address:</label>
          <input type="text" name="Address"  {...register("Address")} />
          
        </div>
        <div style={{display:"flex"}}>
          <label htmlFor="State">State:</label>
          <StateSelect register={register} />
        </div>
        <div>
          <label htmlFor="City">City:</label>
          <CitySelect register={register} />
        </div>
        <div style={{display:"flex"}}>
          <label htmlFor="Country">Country:</label>
          <CountrySelect register={register} />
        </div>
        <div>
          <label htmlFor="">Pin Code:</label>
          <input
            type="number"
            name="Pin"
            {...register("Pin")} 
          />
         
        </div>
      </div>
    </div>
  );
};

export default Address;
