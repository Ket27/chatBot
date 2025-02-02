import "../styling/Guide.css"
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

const integrationCode = `<script>
  window.ChatbotConfig = {
    apiKey: 'your-api-key',
    position: 'bottom-right'
  }
</script>
<script src="https://chatbot-cdn.example.com/widget.js"></script>`;


const Guide = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText(integrationCode);
        return toast("Copied",{
            type:"success",
        })
    }

    return (
        <div className="card-3">
          <div className="card-header-3">
            <div className="card-title-3">Integration Instructions</div>
          </div>
          <div className="card-content-3">
            <div className="card-space-3">
              <div className="integration-option">
                <h3 className="section-title">Option 1: Direct Integration</h3>
                <p className="description-text">{"Add this code to your website's <head> tag:"}</p>
                <div className="relative">
                  <pre className="code-block">
                    {integrationCode}
                  </pre>
                  <button 
                    onClick={handleCopy}
                    className="copy-button"
                  ><MdContentCopy />
                  </button>
                </div>
              </div>

              <div className="integration-option">
                <h3 className="section-title">Option 2: Developer Instructions</h3>
                <p className="description-text">Mail instructions to client’s developer</p>
                <button 
                  className="email-button"
                >
                  Email to Developer
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
    )
}

export default Guide;