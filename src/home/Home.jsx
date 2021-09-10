import { useState } from "react";
import HomeMobile from "./HomeMobile";
import HomeDesktop from "./HomeDesktop";

const Home = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.onresize = function () {
    setInnerWidth(window.innerWidth);
  };
  return <div>{innerWidth > 450 ? <HomeDesktop /> : <HomeMobile />}</div>;
};

export default Home;
