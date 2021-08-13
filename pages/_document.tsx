import Document, { Html, Head, Main, NextScript } from "next/document";
import NavBar from "../components/nav";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <NavBar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
