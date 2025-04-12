import React, { useState } from 'react';
import heartcolor from '../../resources/svg/heart-color.svg';
import heartEmpty from '../../resources/svg/heart-empty.svg';

function HookCounter({ likeCount = 0, like = false }) {
  const [count, setCount] = useState(likeCount);
  const [checked, setChecked] = useState(like);

  const toggleLike = () => {
    if (checked) {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
    setChecked(!checked);
  };

  const heart = checked ? heartcolor : heartEmpty;

  return (
    <div onClick={toggleLike} className="like">
      <img src={heart} alt="like" />
      {count}
    </div>
  );
}

export default HookCounter;