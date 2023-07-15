import { useState } from "react";
import StarRating from "./StarRating";
import "./styles.css";

export default function App() {
  const [currentRating, setCurrentRating] = useState(3);

  return (
    <div>
      <StarRating
        maxStars={5}
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
      />
    </div>
  );
}
