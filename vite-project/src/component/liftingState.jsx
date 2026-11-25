import { useState } from "react";
// // Before lifting state up - each component has its own state
// function TemperatureInput() {
//   const [temperature, setTemperature] = useState("");

//   return (
//     <input
//       value={temperature}
//       onChange={(e) => setTemperature(e.target.value)}
//     />
//   );
// }

// export default TemperatureInput;

// After lifting state up - parent owns the state

function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
    />
  );
}

function BoilingVerdict({ temperature }) {
  const temp = parseFloat(temperature);
  return temp >= 100 ? <p>Water would boil</p> : <p>Water would not boil</p>;
}

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <BoilingVerdict temperature={temperature} />
    </div>
  );
}


// Now both the input and the verdict component can access and respond to the same temperature value.

