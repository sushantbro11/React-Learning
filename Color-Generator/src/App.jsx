import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(20));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(20);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((colors, index) => {
          return <SingleColor key={index} {...colors} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
