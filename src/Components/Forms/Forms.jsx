import ContactDetails from "../ContactDetails/ContactDetaisl";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Forms = () => {
  const ValidationSubmit = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSubmit)
  });

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
