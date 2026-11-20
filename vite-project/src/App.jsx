import "./App.css";
import InterShipCard from "../src/component/intershipCard";

function App() {
  const intership = {
    title: "Frontend Developer",
    organization: "Tech Company",
    location: "Remote",
    stipend: "$500/month",
    duration: "3 months",
    applyLink: "https://example.com/apply",
  };

  function handleSubmit() {
    console.log("Data is Submitted");
  }
  return (
    <article>
      <h1>{intership.title}</h1>
      <p>Organization: {intership.organization}</p>
      <p>Location: {intership.location}</p>
      <p>Stipend: {intership.stipend}</p>
      <p>Duration: {intership.duration}</p>
      <button>
        <a href={intership.applyLink}>Apply Now</a>
      </button>

      <InterShipCard
        title="mobile app development"
        company="ETech"
        location="Addis Ababa"
        positions="InterShip"
        buttonText="afriworket.com"
      />
      <br />
      <button
        onClick={() => {
          console.log("submitted");
        }}
      >
        submit
      </button>
      <br />
      <button onClick={handleSubmit}>submit</button>
    </article>
  );
}

export default App;
