import { useEffect, useState } from "react";
import "./Highlights.css";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
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

  return <h2>{count.toString().padStart(2, "0")}{suffix}</h2>;
}

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-container">

        <div className="highlight-item">
          <Counter target={15} suffix="+" />
          <p>Projects</p>
        </div>

        <div className="highlight-item">
          <Counter target={3} suffix="+" />
          <p>Years</p>
        </div>

        <div className="highlight-item">
          <Counter target={25} suffix="+" />
          <p>Technologies</p>
        </div>

      </div>
    </section>
  );
}

export default Highlights;