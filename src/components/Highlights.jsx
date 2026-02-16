import { useEffect, useState } from "react";
import "./Highlights.css";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // tempo total da animação (1.5s)
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <h2>{count.toString().padStart(2, "0")}</h2>;
}

function Highlights() {
  return (
    <div className="highlights">
      <div className="highlight-item">
        <Counter target={15} suffix="+"/>
        <p>Projects</p>
      </div>

      <div className="highlight-item">
        <Counter target={3} suffix="+"/>
        <p>Years</p>
      </div>

      <div className="highlight-item">
        <Counter target={25} suffix="+"/>
        <p>Technologies</p>
      </div>
    </div>
  );
}

export default Highlights;