import ChatBoxForm from "./ChatBoxForm";
import "./chatBox.css";

const ChatBoxMain = (props) => {
  return (
    <div className="chatBoxMainContainer">
      {props.showChatBox ? (
        <ChatBoxForm setShowChatBox={props.setShowChatBox} />
      ) : null}
    </div>
  );
};

export default ChatBoxMain;
