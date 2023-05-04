const SexSelect = ({register,errors}) => {
  return (
    <div>
      <select name="Sex" {...register("Sex")} placeholder="Select Sex">
        <option value={null}></option>
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="ND">Not Defining</option>
      </select>
      {errors.Sex && <p style={{color:"red"}} >{errors.Sex.message}</p> } 
    </div>
  );
};

export default SexSelect;
