import "../styling/Card.css";

const Card = ({ title, button, desc, icon, setActionClicked }) => {
  const handleTestChatbot = () => {
    setActionClicked(title);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-margin-2">
          <div className="icon-wrapper-2">{icon}</div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description-2">{desc}</p>
        </div>
        <button onClick={handleTestChatbot} className="button-2">
          {button}
        </button>
      </div>
    </div>
  );
};

export default Card;
