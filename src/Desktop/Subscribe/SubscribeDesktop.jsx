import './subscribeDesktop.css';

const SubscribeDesktop = () => {
  return (
    <div className="subscribeDesktopContainer" style={{backgroundImage: "url(/images/tempSubscribeBackground.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
      <h1>Subscribe</h1>
      <div>
        <p>Get 10% off your first purchase when you sign up for our newsletter!</p>
        <div className="subscribeDesktopInputContainer">
        <input type="text" placeholder="Email Address" />
        <button className="btnMain">SIGN UP</button> 
        </div>
        
      </div>
    </div>
  );
};

export default SubscribeDesktop;
