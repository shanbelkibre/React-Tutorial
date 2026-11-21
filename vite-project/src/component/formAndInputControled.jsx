import { useState } from "react";
import "./formAndInputControled.css";

function InternshipApplication() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, email);
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="student name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="email"
        placeholder="student email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default InternshipApplication;
