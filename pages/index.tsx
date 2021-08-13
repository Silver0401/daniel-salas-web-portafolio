import React from "react";
import Head from "next/head";

import IndexLeftBox from "../components/Index/IndexLeftBox";
import IndexRightBox from "../components/Index/IndexRightBox";

const Index: React.FC = () => {
  return (
    <div className="IndexPage">
      <Head>
        <title>Daniel | Home </title>
      </Head>
      <IndexLeftBox />
      <IndexRightBox />
    </div>
  );
};

export default Index;
