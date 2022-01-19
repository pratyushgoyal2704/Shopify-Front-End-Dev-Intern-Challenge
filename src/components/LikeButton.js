import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function LikeButton() {
  const [isClick, setClick] = useState(false);
  return (
    <div class="like-button">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}
