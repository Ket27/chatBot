import { useEffect, useState } from "react"
import "../styling/Authenticate.css";
import app from "../FirebaseConfig";
import {useNavigate} from "react-router-dom";
import {getAuth, GoogleAuthProvider, sendEmailVerification, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';

const Authenticate = ({ formData, setFormData}) => {
  const auth = getAuth(app); 
  const [emailSent, setEmailSent] = useState(false);
  const [state, setState] = useState("Register");
  const [show, setShow] = useState(false);
  const navigate= useNavigate();

  const handleToggle = () => {
    setShow((prev)=> prev = !prev);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      if (state === "Register") {
        const users = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await sendEmailVerification(users.user);
        setEmailSent(true);
        toast("Verification email sent!", { type: "success" });
      } 
      
      else {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        navigate("/dashboard");
      }
    } 
    catch (err) {
      toast(err.message, { type: "warning" });
    }
  };


  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try{
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    }
    catch (err){
      console.log(err);
    }
  }

  const handleChange = (currentState) => {
    setState(currentState);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        navigate("/");
      }
    });
  
    return () => unsubscribe();
  }, [navigate])

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2 className="title">{state === "Register" ? "Register" : "Login"}</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({...prev, [e.target.name] : e.target.value}))}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({...prev, [e.target.name] : e.target.value}))}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div>
              <input
                type={show ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({...prev, [e.target.name] : e.target.value}))}
                required
              />
              <div className="show-hide" onClick={handleToggle}>{show ? "Hide" : "Show"}</div>
            </div>
          </div>
          {state === "Register" && (<><button type="submit" className="register-button">
            Register
          </button>
          <div style={{display:"flex", gap:"3px"}}>Already an User? <p onClick={() => handleChange("Login")} style={{color:"blue", cursor:"pointer"}}>Login</p></div></>)}
          {state === "Login" && (<><button type="submit" className="register-button">
            Login
          </button>
          <div style={{display:"flex", gap:"3px"}}>Don't have an account? <p onClick={() => handleChange("Register")} style={{color:"blue", cursor:"pointer"}}> Register</p></div></>)}
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleSignIn} className="google-button">
          Continue with Google
        </button>

        {emailSent && (
          <p className="success-message">Verification email sent! Please check your inbox.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Authenticate;