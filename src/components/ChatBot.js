import { useState } from "react";
import "../styling/ChatBot.css";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-router-dom";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <p>Chatbot not working as intended? <Link to="/support">Share feedback</Link></p>
        <div className="chatbotContainer">
            <button className="chatbotToggle" onClick={toggleChatbot}>
                <IoIosChatbubbles /> Chat
            </button>

            {isOpen && (
                <div>
                    <div>Chatbot</div>
                    <input
                        type="text"
                        placeholder="Type a message..."
                    />
                </div>
            )}
        </div>
        </>
    );
};
export default ChatBot;
