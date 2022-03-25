import React, { useState, useEffect } from "react";
import Mouse from "./Mouse";

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);
    
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <Mouse />}
    </>
  );
};

export default MouseContainer;
