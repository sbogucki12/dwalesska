import "./desktop.css";

const LayoutDesktop = (props) => {
  return (
    <div>
      <div className="headerDesktopSticky">{props.layout.header}</div>
      <div className="bodyDesktopBackground">
        <div className="bodyDesktopContainer">
          <div>{props.layout.title}</div>
          <div>{props.layout.body}</div>
          <div>
            <hr />
          </div>
          <div>{props.layout.servicesMain}</div>
          <div>
            <hr />
          </div>
          <div>{props.layout.servicesSecondary}</div>
        </div>
      </div>
      <div>{props.layout.subscribe}</div>
      <div>
        <div>{props.layout.social}</div>
        <div>{props.layout.footer}</div>
      </div>
      <div>{props.layout.chatBox}</div>
    </div>
  );
};

export default LayoutDesktop;
