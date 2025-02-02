import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authenticate from "./pages/Authenticate.js";
import Dashboard from "./pages/Dashboard.js";
import Testing from "./pages/Testing.js";
import { useState } from "react";
import Integrate from "./pages/Integrate.js";

const App = () => {
  const [formData, setFormData] = useState({name:"", email:"", password:""});
  const [formDetails, setFormDetails] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authenticate formData={formData} setFormData={setFormData}/>} />
        <Route path="/dashboard" element={<Dashboard formDetails={formDetails} setFormDetails={setFormDetails}/>} />
        <Route path="/test-and-train" element={<Testing url={formDetails.websiteUrl}/>} />
        <Route path="/integrationSuccess" element={<Integrate />} />
      </Routes>
    </Router>
  );
};

export default App;
