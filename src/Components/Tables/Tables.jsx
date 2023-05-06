import axios from "axios";
import { useEffect, useState } from "react";
import "./Tables.css"


const Tables = () => {
  const [ApiFetch, setApiFetch] = useState([]);

  const ViewFormData = async () => {
    await axios
      .get("http://localhost:8080/forms")
      .then((resp) => {
        console.log(resp.data);
        return setApiFetch(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    ViewFormData();
  }, []);

  return (
    <div>
      <div style={{ width:"fit-content"}} className="MainContainer">
        <table style={{ color: "black"}} className="TableContainer">
            <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Emergency Mobile</th>
            <th>ID Type</th>
            <th>ID No.</th>
            <th>Address</th>
            <th>Occupation</th>
            <th>Religion</th>
            <th>Marital Status</th>
            <th>Nationality</th>
          </tr>
          </thead>
          <tbody>
          {ApiFetch.map((form, index) => {
            return (
              <tr key={index}>
                <td>{form.select}{form.Name}</td>
                <td>{form.Email}</td>
                <td>{form.DateOfBirthOrAge}\{form.Sex}</td>
                <td>{form.Mobile}</td>
                <td>{form.EmergencyMobile}</td>
                <td>{form.SelectGovt}</td>
                <td>{form.adhaar}{form.PAN} </td>
                <td>{form.Address},{form.City},{form.StateSelect},{form.Country}</td>
                <td>{form.Occupation}</td>
                <td>{form.Religion}</td>
                <td>{form.Marital}</td>
                <td>{form.NationalityInput}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
