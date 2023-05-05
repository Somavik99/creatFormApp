// import Select from "react-select";
import GovtIssuedID from "./GovtIssuedID/GovtIssuedIDSelect";
import "./PersonalDetails.css";
import SexSelect from "./SexSelect";

const PersonalDetails = ({ register, errors }) => {
  return (
    <div>
      <h3 style={{ textDecorationLine: "underline" }}>Personal Details</h3>
      <div className="PersonalContainer">
        <div>
          <label>
            Name<span style={{ color: "red" }}>*</span>:
          </label>
          <input
            type="text"
            name="Name"
            {...register("Name")}
          />
          {errors.Name  && (
            <p style={{ color: "red" }}>
              {errors.Name.message}
            </p>
          )}
        </div>
        <div>
          <label>
            Date of Birth or Age<span style={{ color: "red" }}>*</span>:
          </label>
          <input
            type="text"
            name=" DateOfBirthOrAge"
            {...register(" DateOfBirthOrAge")}
            placeholder="DD/MM/YYY or Age years"
          />
          {errors.DateOfBirthOrAge && (
            <p style={{ color: "red" }}>{errors.DateOfBirthOrAge.message}</p>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <label>
            Sex<span style={{ color: "red" }}>*</span>:
          </label>
          <SexSelect register={register} errors={errors} />
        </div>
        <div>
          <label>
            Mobile<span style={{ color: "red" }}>*</span>:
          </label>
          <input type="number" {...register("Mobile")} />
          {errors.Mobile && (
            <p style={{ color: "red" }}>{errors.Mobile.message}</p>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <label>
            Govt. Issued ID<span style={{ color: "red" }}>*</span>:
          </label>
          <GovtIssuedID register={register} errors={errors} />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
