import { useState, useEffect } from "react";
import { BsController, BsPuzzle, BsGem } from "react-icons/bs";
import styles from "./GiveawaysCount.module.scss";

const GiveawaysCount = () => {
  const [count, setCount] = useState({});

  const URL = "https://gamerpower.p.rapidapi.com/api/";
  const query = "giveaways";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}${query}`, options);
        const giveaways = await response.json();

        const gameCount = giveaways.filter(
          (giveaway) => giveaway.type.toLowerCase() === "game"
        ).length;
        const dlcCount = giveaways.filter(
          (giveaway) => giveaway.type.toLowerCase() === "dlc"
        ).length;
        const betaGameCount = giveaways.filter(
          (giveaway) => giveaway.type.toLowerCase() === "early access"
        ).length;

        setCount({ gameCount, dlcCount, betaGameCount });
      } catch (error) {
        console.log(
          "There was an error while attempting to retrieve games info, please try again later."
        );
        setCount({
          gameCount: "Amazing",
          dlcCount: "Several",
          betaGameCount: "The best",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.giveawaysCount}>
      <div className={styles.uContainer}>
        <h2
          className={`${styles.headingSecondary} ${styles.uMarginBottomSmall}`}
        >
          Currently serving...
        </h2>

        <p className={styles.giveawaysCountText}>
          <BsController />
          <span id="qtyGames">{count.gameCount}</span>&nbsp;Games
        </p>
        <p className={styles.giveawaysCountText}>
          <BsPuzzle />
          <span id="qtyDlc">{count.dlcCount}</span>&nbsp;DLCs
        </p>
        <p className={styles.giveawaysCountText}>
          <BsGem />
          <span id="qtyBeta">{count.betaGameCount}</span>&nbsp;Beta Games
        </p>
      </div>
    </section>
  );
};

export default GiveawaysCount;
