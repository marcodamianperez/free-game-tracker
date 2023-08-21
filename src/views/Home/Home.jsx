import React, { useState } from "react";
import Header from "../Header/Header";
import GiveawaysCount from "../GiveawaysCount/GiveawaysCount";
import Filter from "../Filter/Filter";
import CardList from "../CardList/CardList";

const Home = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const handleButtonClick = (platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <>
      <Header />
      <GiveawaysCount />
      <main>
        <Filter handleButtonClick={handleButtonClick} />
        <CardList platform={selectedPlatform} />
      </main>
    </>
  );
};

export default Home;
