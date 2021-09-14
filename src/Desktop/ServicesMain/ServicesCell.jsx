import './servicesMain.css';

const ServicesCell = (props) => {
  return (
    <div>
      <div>
        <span style={{fontSize: "1.5rem"}} >{props.servicesContent.servicesHeader}</span>
      </div>
      <div>
        <p>{props.servicesContent.servicesText}</p>
      </div>
      <div>
        <button className="btnMain">{props.servicesContent.servicesButtonText}</button>
      </div>
    </div>
  );
};

export default ServicesCell;
