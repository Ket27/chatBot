import { useEffect } from "react";
import "../styling/Integrate.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { handleClick } from "../Confetti";

const Integrate = () => {
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="card-4">
      <div className="card-content-4">
        <div>
          <div className="success-icon">
            <IoMdCheckmarkCircleOutline className="check-mark" />
          </div>

          <div>
            <h2 className="success-title-4">Integration Successful!</h2>
            <p className="success--description">
              Your chatbot is now ready to engage with your visitors
            </p>
          </div>

          <div className="button-wrapper-4">
            <button className="primary-button-4">Explore Admin Panel</button>
            <button className="secondary-button-4">Start Chatting</button>
          </div>

          <div className="social-button-wrapper-4">
                <button className="social-button-4">
                <FaRegShareFromSquare className="social-icon-4" />
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Integrate;
