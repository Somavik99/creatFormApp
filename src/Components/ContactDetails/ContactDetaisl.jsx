import "./Contact.css";

const ContactDetails = ({register,errors}) => {
  const options = [
    { value: "Mr.", label: "Mr." },
    { value: "Mrs.", label: "Mrs." },
  ];

  return (
    <div>
      <h3 style={{textDecorationLine:"underline"}}>Contact Details</h3>
      <div className="Contact">
        <div>
          <label htmlFor="">Guardian Details:</label>
          <select {...register("select",{required:true})}>
            <option disabled={true} defaultValue={null} >Enter Prefix</option>
            {options.map((opt, index) => {
              return (
                <option value={opt.value} key={index}>
                  {opt.label}
                </option>
              );
            })}
          </select>
          <input type="text" name="GDetails" {...register("GDetails")} />
          {errors.select  && <p>{errors.select.message}</p>}
        </div>
        <div>
            <label htmlFor="Email">Email:</label>
            <input type="email" name="Email"  {...register("Email")} />
        </div>
        <div>
            <label htmlFor="Email">Emergency Contact No. :</label>
            <input type="email" name="Email" {...register("Email")}  />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
