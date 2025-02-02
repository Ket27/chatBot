import ChatBot from "./ChatBot";

const Test = ({url}) => {
    window.open(url, "_blank", "noopener,noreferrer");
    return(
        <ChatBot />
    )
}

export default Test;