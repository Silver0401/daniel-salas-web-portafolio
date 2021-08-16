import React, { useContext, useEffect } from "react";
import { Context } from "./../data/context";

const Contact: React.FC = () => {
  const { contextData, setContextData } = useContext(Context);

  useEffect(() => {
    setContextData({ ...contextData, currentPage: "Contact" });
  }, []);

  return (
    <div className="ContactPage">
      fillers fillers fillers fillers fillers fillers fillers fillers fillers
      fillers fillers fillers fillers fillers fillers
    </div>
  );
};

export default Contact;
