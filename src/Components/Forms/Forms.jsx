import ContactDetails from "../ContactDetails/ContactDetaisl";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Address from "../Address/Address";
import OtherDetails from "../OtherDetails/OtherDetails";
import "./Forms.css"


const Forms = () => {
  const ValidationSubmit = yup.object().shape({
    Name: yup.string().required(),
    Foreign:yup.string().required(),
    Address: yup.string().required(),
    StateSelect:yup.string().required(),
    City:yup.string().required(),
    Country: yup.string().required(),
    Occupation: yup.string().required(),
    Sex:yup.string().required(),
    adhaar:yup.string().max(12).required(),
    PAN:yup.string().max(10).required(),
    Pin:yup.number().required().positive().integer(),
    GuardianDetails: yup.string().required(),
    Age: yup.number().required().positive().integer(),
    Mobile: yup.number().required().positive().integer(),
    Email: yup.string().email().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSubmit),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data))
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <form className="FormContainer" onSubmit={handleSubmit(onSubmit)} style={{border:"2px solid black", margin:"2%",padding:"5.5pc"}}>
      <h1 style={{textDecorationLine:"underline"}}>Details Submission Form</h1>
      <div>
        <PersonalDetails register={register} errors={errors} />

      </div>
      <div>
        <ContactDetails register={register} errors={errors} />
      </div>
      <div>
        <Address register={register} errors={errors} />
      </div>
      <div>
        <OtherDetails register={register} errors={errors} />
      </div>
      <div style={{float:"right"}} className="BtnContainer">
        <button className="Cancel">CANCEL</button>
        <button type="submit" className="Submit" >SUBMIT</button>
      </div> 
    </form>
  );
};

export default Forms;
