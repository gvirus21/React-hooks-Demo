import React, { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    
    useEffect(() => {
        document.title = `${name} - ${count}`;
    }, [name])

  return (
      <>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>
        {" "}
        clicked {count} times
      </button>
    </>
  );
};

export default Counter;
