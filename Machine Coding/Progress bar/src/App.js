import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);

    // clear the interval when the component unmounts
    // return () => clearInterval()
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSucess(true)} />
      <span>{sucess ? "Complete!" : "Loading..."}</span>
    </div>
  );
}
