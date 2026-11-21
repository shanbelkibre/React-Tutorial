import "./App.css";

import NavBar from "../src/component/navBar";
import InterShipCard from "../src/component/intershipCard";
import InternshipApplication from "../src/component/formAndInputControled";

function App() {
  return (
    <>
      <NavBar />
      <article>
        <InterShipCard
          title="mobile app development"
          company="ETech"
          location="Addis Ababa"
          positions="InterShip"
          buttonText="afriworket.com"
        />
      </article>

      <article>
        <InternshipApplication />
      </article>
    </>
  );
}

export default App;
