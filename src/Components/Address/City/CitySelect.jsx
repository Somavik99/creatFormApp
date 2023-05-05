import { useState } from "react";

const CitySelect = ({ register, errors }) => {
  const [showInp, setShowInp] = useState();

  const handleCity = (e) => {
    const getCity = e.target.value;
    setShowInp(getCity);
  };

  return (
    <div>
      <select
        name="City"
        {...register("City")}
        onChange={(e) => handleCity(e)}
        style={{ width: "200px" }}
      >
        <option value={null}>{null}</option>
        <option value="Bankura">Bankura</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Other">Other</option>
      </select>
      {errors.City && <p>{errors.City.message}</p>}
      <>
        {showInp === "Other" && (
          <>
            <input
              type="text"
              placeholder="Enter City/village/town"
              {...register("cityInp")}
            />
            {errors.cityInp && <p>{errors.cityInp.message}</p>}
          </>
        )}
      </>
    </div>
  );
};

export default CitySelect;
