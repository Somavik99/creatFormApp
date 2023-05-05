const StateSelect = ({register,errors}) => {
  const States = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Goa", label: "Goa" },
    { value: "Gujrat", label: "Gujrat" },
    { value: "Chhattisgarh", label: "Chhattisgarh " },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Manipur", label: "Manipur" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland ", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: " Tamil Nadu" },
    { value: "Telengana", label: "Telengana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttara Khand", label: "Uttara  Khand" },
    { value: "West Bengal", label: "West Bengal" },
  ];
  return (
    <div>
      <select {...register("StateSelect")}>
        <option value={null}>{null}</option>
        {States.map((StateOpt, i) => {
          return (
            <option key={i} value={StateOpt.value}>
              {StateOpt.label}
            </option>
          );
        })}
      </select>
      {errors.StateSelect && <p>{errors.StateSelect.message}</p>}
    </div>
  );
};

export default StateSelect;
