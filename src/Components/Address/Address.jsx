import CountrySelect from "../Country/CountrySelect";
import "./Address.css";
import CitySelect from "./City/CitySelect";
import StateSelect from "./State/StateSelect";

const Address = ({ register }) => {
  return (
    <div>
      <h3>Address Details</h3>
      <div>
        <div>
          <label htmlFor="">Address:</label>
          <input type="text" name="Address" {...register("Address")} />
          
        </div>
        <div>
          <label htmlFor="">State:</label>
          <StateSelect />
        </div>
        <div>
          <label htmlFor="">City:</label>
          <CitySelect />
        </div>
        <div>
          <label htmlFor="">Country:</label>
          <CountrySelect />
        </div>
        <div>
          <label htmlFor="">Pin Code:</label>
          <input
            type="text"
            name="Pin"
            {...register("Pin", { valueAsNumber: true })}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
