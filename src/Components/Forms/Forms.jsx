import ContactDetails from "../ContactDetails/ContactDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Address from "../Address/Address";
import OtherDetails from "../OtherDetails/OtherDetails";
import "./Forms.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080/forms";

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
      .notRequired("Date of Birth or Age in years is required"),
    Mobile: yup.string().max(10).required(),
    EmergencyMobile: yup.string().max(10).required(),
    Email: yup.string().email().required(),
  });

  const navigateLink = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSubmit),
  });

  const DetailsP = [
    "Name",
    "adhaar",
    "DateOfBirthOrAge",
    "SelectGovt",
    "Sex",
    "EmergencyMobile",
    "GuardianDetails",
    "select",
    "Email",
    "Address",
    "StateSelect",
    "City",
    "Country",
    "Pin",
    "Occupation",
    "Religion",
    "Marital",
    "BloodGroup",
    "NationalityInput",
    " PAN",
    "Mobile",
  ];
  const onSubmit = async (data) => {
    
    try {
      const res = await axios.post(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    }
    navigateLink("/");
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
      {/* <pre>{JSON.stringify(errors, 2)}</pre> */}
      <div>
        <PersonalDetails
          register={register}
          errors={errors}
          Name={DetailsP[0]}
          Adhaar={DetailsP[1]}
          DateOfBirthOrAge={DetailsP[2]}
          SelectGovtID={DetailsP[3]}
          Sex={DetailsP[4]}
          PAN={DetailsP[20]}
          Mobile={DetailsP[21]}
        />
      </div>
      <div>
        <ContactDetails
          EmergencyMobile={DetailsP[5]}
          GuardianDetails={DetailsP[6]}
          select={DetailsP[7]}
          Email={DetailsP[8]}
          register={register}
          errors={errors}
        />
      </div>
      <div>
        <Address
          Address={DetailsP[9]}
          StateSelecting={DetailsP[10]}
          City={DetailsP[11]}
          Country={DetailsP[12]}
          Pin={DetailsP[13]}
          register={register}
        />
      </div>
      <div>
        <OtherDetails
          Occupation={DetailsP[14]}
          Religion={DetailsP[15]}
          Marital={DetailsP[16]}
          BloodGroups={DetailsP[17]}
          NationalityInput={DetailsP[19]}
          register={register}
        />
      </div>
      <div style={{ float: "right" }} className="BtnContainer">
        <button
          className="Cancel"
          onClick={() => {
            navigateLink("/");
          }}
        >
          CANCEL
        </button>
        <button type="submit" className="Submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Forms;
