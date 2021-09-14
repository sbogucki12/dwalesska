import './chatBoxFAB.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const ChatBoxFAB = () => {
  return (
    <div className="chatBoxFABContainer">
      <div><FontAwesomeIcon icon={faComment} className="chatBoxFabIcon" /></div>
    </div>
  );
};

export default ChatBoxFAB;
