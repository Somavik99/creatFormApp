
const SexSelect = ({register,errors}) => {
  return (
    <div>
         <select name="Sex"  {...register("Sex",{required:true})}>
      <option  disabled selected>Enter sex</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="ND">Not Defining</option>
          </select>
          {errors.Sex?.type==="required" && <p style={{ color: "red" }}>Sex field is required</p>}
    </div>
  )
}

export default SexSelect
