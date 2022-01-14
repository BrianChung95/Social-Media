import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";

import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
