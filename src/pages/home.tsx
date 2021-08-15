import React from "react";

import HomeLeftBox from "./../components/home/HomeLeftBox";
import HomeRightBox from "./../components/home/HomeRightBox";

const Home: React.FC = () => {
  return (
    <div className="HomePage">
      <HomeLeftBox />
      <HomeRightBox />
    </div>
  );
};

export default Home;
