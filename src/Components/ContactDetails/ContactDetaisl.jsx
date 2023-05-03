

const ContactDetails = ({register,errors}) => {
  const options = [
    { value: "Mister", label: "Mr." },
    { value: "Misses", label: "Mrs." },
  ];

  return (
    <div>
      <h3>Contact Details</h3>
      <div>
        <div>
          <label htmlFor="">Guardian Details:</label>
          <select {...register("select",{required:true})}>
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
            <input type="text" name="Text" {...register("Text")}  />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
