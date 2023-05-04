// import Select from "react-select";
import GovtIssuedID from "./GovtIssuedID/GovtIssuedIDSelect";
import "./PersonalDetails.css";

const PersonalDetails = ({ register, errors }) => {
  const OptionSex = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
    { value: "ND", label: "Not Defining" },
  ]
  return (
    <div>
      <h3 style={{textDecorationLine:"underline"}}>Personal Details</h3>
      <div className="PersonalContainer">
        <div>
          <label>
            Name<span style={{ color: "red" }}>*</span>:
          </label>
          <input type="text" name="Name" {...register("Name",{pattern:/^[a-zA-Z ]{8,20}$/})} />
          {errors.Name && <p style={{ color: "red" }}>Name field is required. Enter valid name</p> }
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
            placeholder="DD/MM/YYY or Age years"
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
          {/* <Select
            options={}
            name="Sex"
           
          /> */}
          <select name="Sex"  {...register("Sex")}>
            <option  disabled selected>Sex</option>
            {
              OptionSex.map((sex,index)=>{  
return <option value={sex.value} key={index}>{sex.label}</option>
              })
            }
          </select>
          {errors.Sex && <p style={{ color: "red" }}>Sex field is required</p>}
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
        <div style={{display:"flex"}}>
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
