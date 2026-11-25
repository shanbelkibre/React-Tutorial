import { useState } from "react";
// Before lifting state up - each component has its own state
function TemperatureInput() {
  const [temperature, setTemperature] = useState("");

  return (
    <input
      value={temperature}
      onChange={(e) => setTemperature(e.target.value)}
    />
  );
}

export default TemperatureInput;
