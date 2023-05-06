import {BsWindowPlus} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div style={{width:"100%"}}>
        <BsWindowPlus style={{float:"right", marginRight:"1.8em",outline:"none"}} onClick={()=>{navigate("/FormsData")}}  id="clickable" size={30}/>
        <Tooltip anchorSelect="#clickable" clickable>
      <button style={{background:"none",border:"none", color:"whitesmoke"}} onClick={()=>{navigate("/FormsData")}}>Add Data!</button>
      </Tooltip>
    </div>
  )
}

export default Navbar
