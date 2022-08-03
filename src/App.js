import React, { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [active, setActive] = useState(true);

  const reset = () => {
    setMinutes(0);
  };

  const onChange = (event) => {
    setMinutes(event.target.value);
  };

  const changeActive = () => {
    setActive(!active);
    reset();
  };

  return (
    <div>
      <div>Time Converter</div>
      <div>
        Minutes{" "}
        <input
          placeholder="Minutes"
          value={active ? minutes : Math.floor(minutes * 60)} // active = true 참일 때 분이 나오고 거짓이면 시간이 나온다.
          type="number"
          onChange={onChange}
          disabled={!active}
        />
        <div>
          Hours{" "}
          <input
            type="number"
            placeholder="Hours"
            value={active ? Math.floor(minutes / 60) : minutes}
            disabled={active}
            onChange={onChange}
          />
        </div>
        <button onClick={reset}>reset</button>
        <button onClick={changeActive}>active toggle</button>
      </div>
    </div>
  );
}

export default App;
