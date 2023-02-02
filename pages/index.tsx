import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Boost from "../components/Boost/Boost";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Boost />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
