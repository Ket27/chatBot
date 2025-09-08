import "../styling/SetUp.css";
import { ToastContainer, toast } from "react-toastify";
// import urlMetadata from "url-metadata";

const SetUp = ({ formDetails, setFormDetails, setFormSubmitted }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(formDetails);
    return toast("Form Submitted", {
      type: "success",
    });
  };

  const fetchDescription = async () => {
    try {
      const desc = `${formDetails.companyName} is a dynamic and forward-thinking organization committed to delivering innovative solutions and exceptional services. With a focus on excellence, integrity, and customer satisfaction, we strive to drive meaningful impact across industries.

Our team of dedicated professionals brings expertise, creativity, and a passion for innovation, enabling us to adapt to evolving market trends and technological advancements. By fostering a collaborative and growth-oriented environment, we empower our employees, partners, and clients to achieve their goals effectively.

At ${formDetails.companyName}, we prioritize quality, efficiency, and sustainability in everything we do. Whether through cutting-edge technology, strategic insights, or customer-centric solutions, we are dedicated to shaping the future and making a lasting difference.`;

        setFormDetails((prev) => ({...prev, description : desc}));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <div>
        <div className="card-title">Organization Setup</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formDetails.companyName}
            onChange={(e) => {
              setFormDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
              setFormSubmitted(null);
            }}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label>Website Url</label>
          <div className="flex">
            <input
              type="url"
              name="websiteUrl"
              value={formDetails.websiteUrl}
              onChange={(e) => {
                setFormDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
                setFormSubmitted(null);
              }}
              className="input"
              required
            />
            <button
              type="button"
              onClick={fetchDescription}
              className="button button-secondary"
            >
              Fetch Description
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Company Description</label>
          <textarea
            name="description"
            value={formDetails.description}
            onChange={(e) => {
              setFormDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
              setFormSubmitted(null);
            }}
            className="textarea"
            required
          />
        </div>
        <button type="submit" className="button button-primary">
          Save and Continue
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SetUp;
