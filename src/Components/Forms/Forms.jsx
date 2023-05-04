import ContactDetails from "../ContactDetails/ContactDetaisl";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Address from "../Address/Address";
import OtherDetails from "../OtherDetails/OtherDetails";
const Forms = () => {
  const ValidationSubmit = yup.object().shape({
    Name: yup.string().required(),
    NriInp:yup.string().required(),
    Sex: yup.string().required(),
    Address: yup.string().required(),
    GDetails: yup.string().required(),
    DobA: yup.number().required().positive().integer(),
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
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{border:"2px solid black", margin:"2%",padding:"50px"}}>
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
      <div style={{float:"right"}}>
        <button>CANCEL</button>
        <input type="submit" value="SUBMIT" />
      </div> 
    </form>
  );
};

export default Forms;
