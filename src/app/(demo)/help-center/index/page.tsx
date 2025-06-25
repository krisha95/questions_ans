import React from "react";
import Hero from "./component/Hero";
import Featured from "./component/Featured";
import Articles from "./component/Articles";
import Faq from "./component/Faq";
import Action from "./component/Action";

const Page = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Articles />
      <Faq />
      <Action />
    </main>
  );
};

export default Page;
