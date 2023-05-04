import "./Contact.css";

const ContactDetails = ({ register, errors }) => {
  const options = [
    { value: "Mr.", label: "Mr." },
    { value: "Mrs.", label: "Mrs." },
  ];

  return (
    <div>
      <h3 style={{ textDecorationLine: "underline" }}>Contact Details</h3>
      <div className="Contact">
        <div>
          <label htmlFor="">Guardian Details:</label>
          <select
            name="select"
            {...register("select")}
            style={{ marginRight: "10px" }}
          >
            <option value={null}></option>
            {options.map((opt, index) => {
              return (
                <option value={opt.value} key={index}>
                  {opt.label}
                </option>
              );
            })}
          </select>

          <input 
            type="text"
            name="GuardianDetails"
            {...register("GuardianDetails")}
          />
          {errors.GuardianDetails && (
            <p style={{ color: "red" }}>{errors.GuardianDetails.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input type="email" name="Email" {...register("Email")} />
          {errors.Email && <p style={{ color: "red" }}>{errors.Email.message}</p>}
        </div>
        <div>
          <label htmlFor="Emergency">Emergency Contact No. :</label>
          <input type="text" name="Mobile" {...register("Mobile")} />
          {errors.Mobile && <p style={{ color: "red" }}>{errors.Mobile.message}</p> }
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
