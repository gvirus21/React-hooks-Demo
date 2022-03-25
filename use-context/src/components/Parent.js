import { useState, createContext } from "react";
import Children1 from "./Children/children1";

export const CountContext = createContext(0);

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <div className="counter-div">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <Children1 />
    </CountContext.Provider>
  );
};

export default Parent;
