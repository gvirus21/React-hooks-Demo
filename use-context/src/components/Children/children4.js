import React, { useContext } from "react";
import { CountContext } from "../Parent";

const Children4 = () => {
  const count = useContext(CountContext);
  return (
    <div className="child children-4">
      <h1>{count}</h1>
    </div>
  );
};

export default Children4;
