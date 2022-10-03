import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TestComponent() {
  useEffect(() => {
    console.log("executed");
  }, []);

  return (
    <div>
      <p>We will check useEffect's empty dependency array.</p>
      <p>Once user move other page, component get unmounted. </p>
      <p>
        And then, if user back to the page, useEffect with empty dependency
        array will execute again.
      </p>
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
}
