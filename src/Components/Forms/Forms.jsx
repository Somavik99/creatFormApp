import PersonalDetails from "../PersonalDetails/PersonalDetails";
import {useForm} from "react-hook-form"
const Forms = () => {

  

const {handleSubmit,register,formState:{errors} }= useForm({

})

const onSubmit = (data)=>console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PersonalDetails register={register} errors={errors} />
      <div>
       
       <input type="submit"/>
       </div>
    </form>
  );
};

export default Forms;
