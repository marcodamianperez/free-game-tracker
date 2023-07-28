import React from "react";
import Header from "../Header/Header";
import GiveawaysCount from "../GiveawaysCount/GiveawaysCount";
import Filter from "../Filter/Filter";

const Home = () => {
  return (
    <>
      <Header />
      <GiveawaysCount />
      <main>
        <Filter />
      </main>
    </>
  );
};

export default Home;
