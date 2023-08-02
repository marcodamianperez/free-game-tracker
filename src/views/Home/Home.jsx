import React from "react";
import Header from "../Header/Header";
import GiveawaysCount from "../GiveawaysCount/GiveawaysCount";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";

const Home = () => {
  return (
    <>
      <Header />
      <GiveawaysCount />
      <main>
        <Filter />
        <CardList />
      </main>
    </>
  );
};

export default Home;
