import Select from "react-select";
import GovtIssuedID from "./GovtIssuedID/GovtIssuedIDSelect";
import "./PersonalDetails.css";

const PersonalDetails = ({ register, errors }) => {
  return (
    <div>
      <h3 style={{textDecorationLine:"underline"}}>Personal Details</h3>
      <div className="PersonalContainer">
        <div>
          <label>
            Name<span style={{ color: "red" }}>*</span>:
          </label>
          <input type="text" name="Name" {...register("Name")} />
          {errors.Name && <p style={{ color: "red" }}>{errors.Name.message}</p>}
        </div>
        <div>
          <label>
            Date of Birth or Age<span style={{ color: "red" }}>*</span>:
          </label>
          <input
            type="text"
            name="DobA"
            {...register("DobA", {
              valueAsNumber: true,
            })}
            aria-invalid={errors.DobA ? "true" : "false"}
          />
          {errors.DobA && (
            <p style={{ color: "red" }}>
              Specify Date of Birth or Age
            </p>
          )}
        </div>
        <div style={{display:"flex"}}>
          <label>
            Sex<span style={{ color: "red" }}>*</span>:
          </label>
          <Select
            options={[
              { value: "M", label: "Male" },
              { value: "F", label: "Female" },
              { value: "ND", label: "Not Defining" },
            ]}
            name="Sex"
            {...register("Sex")}
          />
          {errors.Sex && <p style={{ color: "red" }}>{errors.Sex.message}</p>}
        </div>
        <div>
          <label>
            Mobile<span style={{ color: "red" }}>*</span>:
          </label>
          <input type="text" {...register("Mobile")} />
          {errors.Mobile && (
            <p style={{ color: "red" }}>Mobile no. is required</p>
          )}
        </div>
        <div>
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
