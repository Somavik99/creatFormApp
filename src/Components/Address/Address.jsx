import CountrySelect from "../Country/CountrySelect";
import "./Address.css";
import CitySelect from "./City/CitySelect";
import StateSelects from "./State/StateSelects";

const Address = ({register,Address,StateSelecting,City,Country,Pin}) => {
  return (
    <div>
      <h3 style={{textDecorationLine:"underline"}}>Address Details</h3>
      <div className="AddressD">
        <div>
          <label htmlFor="Address">Address:</label>
          <input type="text" name={Address}  {...register(Address)} />
          
        </div>
        <div style={{display:"flex"}}>
          <label htmlFor="State">State:</label>
          <StateSelects StateSelecting={StateSelecting} register={register} />
        </div>
        <div>
          <label htmlFor="City">City:</label>
          <CitySelect City={City} register={register} />
        </div>
        <div style={{display:"flex"}}>
          <label htmlFor="Country">Country:</label>
          <CountrySelect Country={Country} register={register} />
        </div>
        <div>
          <label htmlFor="">Pin Code:</label>
          <input
            type="number"
            name={Pin}
            {...register(Pin)} 
          />
         
        </div>
      </div>
    </div>
  );
};

export default Address;
