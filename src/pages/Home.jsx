import React from "react";
import assets from "../assets";
import {
  Header,
  Services,
  Features,
  Technologies,
  Gallery,
  Footer,
} from "../layouts/index";

const Home = () => {
  return (
    <div>
      <Header
        title="What is Lappsnet?"
        description=" It's an experimental smart contract network that can easily
              be used by lightning network users. You can purchase and redeem ESAT tokens from"
        mockupImg={assets.first}
        banner="banner"
      />

      <Services
        title="How does the wallet work?"
        description=" The wallet generates a key, which is encrypted using a security
              device, such as your screen lock. The encrypted key is stored in
              the browser."
        mockupImg={assets.first}
        reverse
      />
      <Features />

      <Technologies
        title="How does the wallet work?"
        description=" The wallet generates a key, which is encrypted using a security
              device, such as your screen lock. The encrypted key is stored in
              the browser."
        mockupImg={assets.first}
        reverse
      />

      <Gallery />

      <Footer />
    </div>
  );
};

export default Home;
