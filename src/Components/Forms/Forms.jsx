import ContactDetails from "../ContactDetails/ContactDetaisl";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { useForm } from "react-hook-form";
const Forms = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
   
        <PersonalDetails register={register} errors={errors} />
      </div>
      <div>
        <ContactDetails register={register} errors={errors} />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default Forms;
