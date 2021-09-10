import { Fragment } from "react";
import LayoutDesktop from "../Desktop/LayoutDesktop";
import HeaderDesktop from "../Desktop/Header/HeaderDesktop";
import TitleDesktop from "../Desktop/Title/TitleDesktop";
import BodyDesktop from "../Desktop/Body/BodyDesktop";
import ServicesMainDesktop from "../Desktop/ServicesMain/ServicesMainDesktop";
import ServicesSecondaryDesktop from "../Desktop/ServicesSecondary/ServicesSecondaryDesktop";
import FooterDesktop from "../Desktop/Footer/FooterDesktop";
import SubscribeDesktop from "../Desktop/Subscribe/SubscribeDesktop";
import SocialDesktop from "../Desktop/Social/SocialDesktop";

const layout = {
  header: <HeaderDesktop />,
  title: <TitleDesktop />,
  body: <BodyDesktop />,
  servicesMain: <ServicesMainDesktop />,
  servicesSecondary: <ServicesSecondaryDesktop />,
  subscribe: <SubscribeDesktop />,
  social: <SocialDesktop />,
  footer: <FooterDesktop />,
};

const HomeDesktop = () => {
  return (
    <Fragment>
      <LayoutDesktop layout={layout} />
    </Fragment>
  );
};

export default HomeDesktop;
