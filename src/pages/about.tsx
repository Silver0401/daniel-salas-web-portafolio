import React, { useContext, useEffect } from "react";
import { Context } from "./../data/context";

const About: React.FC = () => {
  const { contextData, setContextData } = useContext(Context);

  useEffect(() => {
    setContextData({ ...contextData, currentPage: "About" });
  }, []);

  return (
    <div className="AboutPage">
      fillers fillers fillers fillers fillers fillers fillers fillers fillers
      fillers fillers fillers fillers fillers fillers fillers fillers fillers
    </div>
  );
};

export default About;
