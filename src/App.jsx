import "./App.css";
import Forms from "./Components/Forms/Forms";
import { Routes, Route } from "react-router-dom";
import Tables from "./Components/Tables/Tables";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/FormsData" element={<Forms />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
