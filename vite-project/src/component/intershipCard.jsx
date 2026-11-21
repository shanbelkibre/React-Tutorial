import "./intershipCard.css";

export default function InterShipCard({
  title,
  company,
  location,
  positions,
  buttonText,
}) {
  return (
    <div className="internship-card">
      <h2>Title: {title}</h2>
      <h3>Organization: {company}</h3>
      <p>location:{location}</p>
      <p>Position{positions}</p>
      <button>
        applay now <a>{buttonText}</a>
      </button>
    </div>
  );
}
