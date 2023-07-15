import Star from "./Star";
import { useState } from "react";

function StarRating({ maxStars, currentRating, setCurrentRating }) {
  const [hoverStateIndex, setHoverStateIndex] = useState(null);
  console.log(hoverStateIndex);
  return (
    <div>
      {Array.from({ length: maxStars }).map((star, index) => (
        <span
          onClick={() => setCurrentRating(index + 1)}
          onMouseEnter={() => setHoverStateIndex(index)}
          onMouseLeave={() => setHoverStateIndex(null)}
        >
          <Star
            filled={
              hoverStateIndex !== null
                ? index <= hoverStateIndex
                : index < currentRating
            }
          />
        </span>
      ))}
    </div>
  );
}

export default StarRating;
