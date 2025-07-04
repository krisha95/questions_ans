import React from "react";
import Hero from "./component/Hero";
import Featured from "./component/Featured";
import Articles from "./component/Articles";
import Faq from "./component/Faq";
import Action from "./component/Action";
import NavBar from "../component/NavBar";
import Footer from "../../que-ans/index/components/Footer";

const Page = () => {
  return (
    <>
    <NavBar />
        <main>
          <Hero />
          <Featured />
          <Articles />
          <Faq />
          <Action />
       </main>
    <Footer />
    </>
  );
};

export default Page;
