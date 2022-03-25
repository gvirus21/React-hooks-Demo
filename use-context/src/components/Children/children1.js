import React, { useContext } from "react";
import { CountContext } from "../Parent";
import Children2 from "./children2";

const Children1 = () => {
  const count = useContext(CountContext);

  return (
    <div className="child children-1">
      <Children2 />
      {console.log("child-1:", count)}
      <h1>{count}</h1>
    </div>
  );
};

export default Children1;
