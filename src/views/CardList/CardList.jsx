import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ platform }) => {
  const [giveaways, setGiveaways] = useState([]);

  const URL = "https://gamerpower.p.rapidapi.com/api/";
  const query = platform
    ? platform === "all"
      ? "giveaways"
      : `giveaways?platform=${platform}`
    : "filter?platform=steam.epic-games-store.android.ps4.ps5&type=game.loot&sort-by=popularity";
  //const query = "filter?platform=steam.epic-games-store.android.ps4.ps5&type=game.loot&sort-by=popularity";
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
      const response = await fetch(`${URL}${query}`, options);
      const data = await response.json();

      setGiveaways(data);
    };

    fetchData();
  }, [platform]);

  return (
    <section className={styles.cardList}>
      <div className={styles.uContainer}>
        <div className={styles.cardListContainer}>
          {giveaways.length ? (
            giveaways.map((giveaway) => (
              <Card
                key={giveaway.id}
                thumbnail={giveaway.thumbnail}
                title={giveaway.title}
                worth={giveaway.worth}
                type={giveaway.type}
                platforms={giveaway.platforms}
                users={giveaway.users}
              />
            ))
          ) : (
            <p className={styles.noGiveaways}>No giveaways available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardList;
