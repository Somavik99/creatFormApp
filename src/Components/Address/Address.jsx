import "./Address.css"
import StateSelect from "./State/StateSelect"

const Address = () => {
  return (
    <div>
      <h3>Address Details</h3>
      <div>
        <div>
            <label htmlFor="">Address:</label>
            <input type="text" name="Address" />
        </div>
        <div>
            <label htmlFor="">State:</label>
            <StateSelect/>
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Address
