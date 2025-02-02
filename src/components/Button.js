import "../styling/Dashboard.css";
import {useNavigate} from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();
    const onNext = () => {
        navigate("/test-and-train");
    }
 return(
    <div className="next-button" onClick={onNext}>
        Proceed to Next Step
      </div>
 )
}

export default Button;