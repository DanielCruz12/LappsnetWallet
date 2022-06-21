import React from "react";
import Header from "../layouts/Header";
import Services from "../layouts/Services";
import assets from "../assets";

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
    </div>
  );
};

export default Home;
