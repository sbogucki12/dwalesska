import "./chatBox.css";

const ChatBoxForm = (props) => {
  return (
    <div className="chatBoxContainer">
      <div className="chatBoxHeaderContainer">
        <span
          style={{ paddingLeft: "5%", fontSize: "1.4rem", marginTop: "5%" }}
        >
          Dania Walesska Coaching
        </span>{" "}
      </div>
      <div className="chatBoxMainPaper">
        <div style={{ padding: "1%" }}>
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
              style={{ height: "30vh" }}
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <center>
              <button className="btnMain">SEND</button>
            </center>
          </div>
          <div className="chatBoxFormCaptchaWarningContainer">
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxForm;
