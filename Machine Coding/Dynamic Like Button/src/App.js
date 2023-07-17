import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";

import "./styles.css";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const likeUnlikeAction = async () => {
    try {
      setIsPending(true);
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: liked ? "like" : "unlike"
          })
        }
      );

      if (!response.ok) {
        return;
      }

      setLiked(!liked);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <button
        className={`like-btn ${liked && "like-btn-active"}`}
        onClick={likeUnlikeAction}
        disabled={isPending}
      >
        {isPending ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}
