import GovtIssuedID from "./GovtIssuedID/GovtIssuedIDSelect";

const PersonalDetails = ({ register, errors }) => {
  return (
    <div>
      <h3>Personal Details</h3>
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
          {...register("DobA",{
            valueAsNumber:true
          })}
          aria-invalid={errors.DobA ? "true" : "false"}
        />
        {errors.DobA && <p style={{ color: "red" }}>{errors.DobA.message}</p>}
      </div>
      <div>
        <label>
          Sex<span style={{ color: "red" }}>*</span>:
        </label>
        <input type="text" {...register("Sex")} />
        {errors.Sex && <p style={{ color: "red" }}>{errors.Sex.message}</p>}
      </div>
      <div>
        <label>
          Mobile<span style={{ color: "red" }}>*</span>:
        </label>
        <input type="text" {...register("Mobile")} />
        {errors.Mobile && (
          <p style={{ color: "red" }}>t{errors.Mobile.message}</p>
        )}
      </div>
      <div>
        <label>
          Govt. Issued ID<span style={{ color: "red" }}>*</span>:
        </label>
        <GovtIssuedID register={register} errors={errors} />
        <input type="text" name="Govt" {...register("Govt")} />
        {errors.Govt && <p style={{ color: "red" }}>{errors.Govt.message}</p>}
      </div>
    </div>
  );
};

export default PersonalDetails;
