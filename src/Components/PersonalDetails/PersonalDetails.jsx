

const PersonalDetails = ({register, errors}) => {



  return (
    <div>
      <h3>Personal Details</h3>
      <div>
        <label>Name:</label>
      <input type="text" name="Name" {...register("Name",{required:true})} />
      {errors.Name?.type==="required"&& <p style={{color:"red"}}>this field is required</p>}
      </div>
      <div>
        <label>Date of Birth or Age<span style={{color:"red"}}>*</span>:</label>
      <input type="text" name="DobA" {...register("DobA",{required:true})} aria-invalid={errors.DobA?"true":"false"}/>
      {errors.DobA?.type==="required"&& <p style={{color:"red"}}>this field is required</p>}
      </div>
      <div>
        <label>Sex:</label>
      <input type="text" {...register("Sex",{required:true})} />
      {errors.Sex?.type==="required"&& <p style={{color:"red"}}>this field is required</p>}
      </div>
      <div>
        <label>Mobile:</label>
      <input type="text" {...register("Mobile")} />
      </div>
      <div>
        <label>Govt. Issued ID:</label>
      <input type="text"/>
      </div>
    </div>
  )
}

export default PersonalDetails
