import GovtIssuedID from "./GovtIssuedID/GovtIssuedIDSelect"


const PersonalDetails = ({register, errors}) => {



  return (
    <div>
      <h3>Personal Details</h3>
      <div>
        <label>Name<span style={{color:"red"}}>*</span>:</label>
      <input type="text" name="Name" {...register("Name",{required:true})} />
      {errors.Name?.type==="required"&& <p style={{color:"red"}}>this field is required</p>}
      </div>
      <div>
        <label>Date of Birth or Age<span style={{color:"red"}}>*</span>:</label>
      <input type="text" name="DobA" {...register("DobA",{required:true})} aria-invalid={errors.DobA?"true":"false"}/>
      {errors.DobA?.type==="required"&& <p style={{color:"red"}}>this field is required</p>}
      </div>
      <div>
        <label>Sex<span style={{color:"red"}}>*</span>:</label>
      <input type="text" {...register("Sex",{required:true})} />
      {errors.Sex?.type==="required"&& <p style={{color:"red"}}>this field is required</p>}
      </div>
      <div>
        <label>Mobile<span style={{color:"red"}}>*</span>:</label>
      <input type="text" {...register("Mobile", {required:true})} />
      {errors.Mobile?.type==="required"&& <p style={{color:"red"}}>this field is required</p>}
      </div>
      <div>
        <label>Govt. Issued ID<span style={{color:"red"}}>*</span>:</label>
      <GovtIssuedID register={register} errors={errors}/>
      <input type="text" name="Govt" {...register("Govt",{required:"true"})} />
{errors.Govt?.type === "required" && <p style={{color:"red"}}>This Field is required</p>}
      </div>
    </div>
  )
}

export default PersonalDetails
