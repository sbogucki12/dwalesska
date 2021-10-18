import "./desktop.css";

const LayoutDesktop = (props) => {
  return (
    <div>
      <header>
        <div>{props.layout.header}</div>
      </header>
      <div className="bodyDesktopBackground">
        <div className="bodyDesktopContainer">
          <main>
            <div>{props.layout.body}</div>
          </main>
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
