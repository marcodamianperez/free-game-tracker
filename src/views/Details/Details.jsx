import Navbar from "../../components/Navbar/Navbar";
import GiveawayDetails from "../GiveawayDetails/GiveawayDetails";

const Details = () => {
  return (
    <>
      <header>
        <Navbar logo="free game tracker" link1="About" link2="faq" />
      </header>
      <main>
        <GiveawayDetails />
      </main>
    </>
  );
};

export default Details;
