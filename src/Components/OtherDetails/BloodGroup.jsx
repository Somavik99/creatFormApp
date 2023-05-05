

const BloodGroup = ({register}) => {
  return (
    <div>
    <select name="BloodGroup"  {...register("BloodGroup")} style={{ marginLeft: "8px", maxWidth: "250px", height: "35px" }}>
    <option value={null}></option>
      <option value="A+">A RhD positive (A+)</option>
      <option value="A-">A RhD negative (A-)</option>
      <option value="B+">B RhD positive (B+)</option>
      <option value="B-">B RhD negative (B-)</option>
      <option value="O+">O RhD positive (O+)</option>
      <option value="O-">O RhD negative (O-)</option>
      <option value="AB+">AB RhD positive (AB+)</option>
      <option value="AB-">AB RhD negative (AB-)</option>
    </select>
  
  </div>
  )
}

export default BloodGroup
