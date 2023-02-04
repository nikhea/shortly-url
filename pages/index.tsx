import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Boost from "../components/Boost/Boost";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Hero />
        <Features />
        <Boost />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
