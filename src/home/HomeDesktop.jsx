import { Fragment } from "react";
import LayoutDesktop from "../Desktop/LayoutDesktop";
import HeaderDesktop from "../Desktop/Header/HeaderDesktop";
import BodyDesktop from "../Desktop/Body/BodyDesktop";
import ServicesMainDesktop from "../Desktop/ServicesMain/ServicesMainDesktop";
import ServicesSecondaryDesktop from "../Desktop/ServicesSecondary/ServicesSecondaryDesktop";
import FooterDesktop from "../Desktop/Footer/FooterDesktop";
import SubscribeDesktop from "../Desktop/Subscribe/SubscribeDesktop";
import SocialDesktop from "../Desktop/Social/SocialDesktop";
import ChatBoxFAB from "../Desktop/ChatBox/ChatBoxFAB";

const HomeDesktop = (props) => {
  const layout = {
    header: <HeaderDesktop />,
    body: <BodyDesktop />,
    servicesMain: <ServicesMainDesktop />,
    servicesSecondary: <ServicesSecondaryDesktop />,
    subscribe: <SubscribeDesktop />,
    social: <SocialDesktop />,
    footer: <FooterDesktop />,
    chatBox: <ChatBoxFAB />,
  };

  return (
    <Fragment>
      <LayoutDesktop layout={layout} />
    </Fragment>
  );
};

export default HomeDesktop;
