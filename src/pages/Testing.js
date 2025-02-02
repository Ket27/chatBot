import Card from "../components/Card";
import "../styling/Testing.css";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { useState } from "react";
import Test from "../components/Test";
import Guide from "../components/Guide";
import { useNavigate } from "react-router-dom";

const Testing = ({url}) => {
  const navigate = useNavigate();
  const [actionClicked, setActionClicked] = useState("");

  const handleChange = () => {
    navigate("/integrationSuccess");
  }

  return (
    <div className="container-1">
      <div className="header-1">
        <h1 className="title-1">Complete Your Chatbot Setup</h1>
        <p className="description-1">
          You're just a few steps away from having your AI chatbot live on your
          website
        </p>
      </div>

      <div className="flex-container">
        <Card title="Test Chatbot" button="Launch Preview" desc="Preview your chatbot in action on a test website" icon={<TbMessageChatbot />} setActionClicked={setActionClicked}/>
        <Card title="Integration Guide" button="View Guide" desc="Get step-by-step instructions for adding the chatbot" icon={<MdOutlineIntegrationInstructions />} setActionClicked={setActionClicked}/>
        <Card title="Verify Integration" button="Test Integration" desc="Check if your chatbot is properly installed" icon={<MdOutlineVerified />} setActionClicked={setActionClicked}/>
      </div>
      {actionClicked === "Test Chatbot" && <Test url={url}/>}
      {actionClicked === "Integration Guide" && <Guide />}
      {actionClicked === "Verify Integration" && handleChange()}
    </div>
  );
};

export default Testing;
