import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function MultipleStateChange() {
  const [firstState, setFirstState] = useState(0);
  const [secondState, setSecondState] = useState(0);
  const [thirdState, setThirdState] = useState(0);
  const renderCount = useRef(0);

  const stateChange = () => {
    setFirstState((prev) => prev + 1);
    setSecondState((prev) => prev + 1);
    setThirdState((prev) => prev + 1);
  };

  useEffect(() => {
    renderCount.current++;
    console.log(`renderd ${renderCount.current} times`);
  });

  useEffect(() => {
    console.log("firstState: ", firstState);
    console.log("secondState: ", secondState);
    console.log("thirdState: ", secondState);
  }, [firstState, secondState, thirdState]);

  return (
    <div>
      <h1>Multiple State Change</h1>
      <p>
        we will see what is going to happen when multiple state change at almost
        same time
      </p>
      <button onClick={stateChange}>State Change</button>
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
}
