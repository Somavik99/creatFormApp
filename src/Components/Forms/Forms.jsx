import ContactDetails from "../ContactDetails/ContactDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Address from "../Address/Address";
import OtherDetails from "../OtherDetails/OtherDetails";
import "./Forms.css";

const Forms = () => {
  const ValidationSubmit = yup.object().shape({
    Foreign: yup.string().notRequired(),
    Name: yup.string(/^[a-zA-Z ]{8,20}$/).required(),
    SelectGovt: yup.string().required(),
    Country: yup.string().notRequired(),
    Nationality: yup.string().notRequired(),
    adhaar: yup
      .string()
      .max(12, "Adhaar should be of 12 numbers")
      .notRequired(),
    PAN: yup.string().max(10, "Pan should be of 10 numbers").notRequired(),
    Sex: yup.string().required(),
    GuardianDetails: yup.string().required("Guardian Details are required"),
    DateOfBirthOrAge: yup
      .string()
      .required("Date of Birth or Age in years is required"),
    Mobile: yup.string().max(10).required(),
    EmergencyMobile: yup.string().max(10).required(),
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
    <form
      className="FormContainer"
      onSubmit={handleSubmit(onSubmit)}
      style={{ border: "2px solid black", margin: "2%", padding: "5.5pc" }}
    >
      <h1 style={{ textDecorationLine: "underline" }}>
        Details Submission Form
      </h1>
      <pre>{JSON.stringify(errors, 2)}</pre>
      <div>
        <PersonalDetails register={register} errors={errors} />
      </div>
      <div>
        <ContactDetails register={register} errors={errors} />
      </div>
      <div>
        <Address register={register} />
      </div>
      <div>
        <OtherDetails register={register} />
      </div>
      <div style={{ float: "right" }} className="BtnContainer">
        <button className="Cancel">CANCEL</button>
        <button type="submit" className="Submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Forms;
