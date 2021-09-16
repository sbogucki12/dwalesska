import "./chatBoxFAB.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ChatBoxMain from "./ChatBoxMain";
import { useState } from "react";

const ChatBoxFAB = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  let fabBackgroundColor = "darkgray";

  if (showChatBox === false) {
    fabBackgroundColor = "white";
  }

  return (
    <div>
      <ChatBoxMain showChatBox={showChatBox} setShowChatBox={setShowChatBox} />
      <div
        className="chatBoxFABContainer"
        onClick={() => setShowChatBox(!showChatBox)}
        style={{ backgroundColor: fabBackgroundColor }}
      >
        <div>
          {showChatBox ? (
            <FontAwesomeIcon icon={faTimesCircle} className="chatBoxFabIcon" />
          ) : (
            <FontAwesomeIcon icon={faComment} className="chatBoxFabIcon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBoxFAB;
