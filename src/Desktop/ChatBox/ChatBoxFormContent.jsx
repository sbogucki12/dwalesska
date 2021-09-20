import "./chatBox.css";

const ChatBoxFormContent = (props) => {
  return (
    <div>
      <div style={{ padding: "1%" }} className="chatBoxFormCaption">
        Hi! Let us know how we can help and we’ll respond shortly.
      </div>
      <div>
        <div className="chatBoxFormContainer">
          <input type="text" placeholder="Name" className="chatBoxInput" />
          <input type="text" placeholder="Email" className="chatBoxInput" />
          <textarea
            rows="4"
            cols="35"
            placeholder="How Can We Help?"
            className="chatBoxTextArea"
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <center>
            <button
              className="btnMain"
              onClick={() => props.onSetFormSubmitted()}
            >
              {props.chatboxButtonLabel}
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxFormContent;
