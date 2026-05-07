import { useState } from "react";

const ReviewStars = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [locked, setLocked] = useState(false); // lock after first click

  const handleClick = (index) => {
    if (!locked) {
      setRating(index);
      setLocked(true); // lock rating after first selection
      if (onRatingChange) {
        onRatingChange(index);
      }
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalStars)].map((_, i) => {
        const index = i + 1;
        return (
          <button
            key={index}
            type="button"
            disabled={locked} // disable further clicks
            className={`text-2xl transition-colors duration-200 ${
              index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
            } ${locked ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => !locked && setHover(index)}
            onMouseLeave={() => !locked && setHover(0)}
          >
            ★
          </button>
        );
      })}
      <span className="ml-2 text-sm text-gray-600">
        {rating > 0 ? `${rating}/${totalStars}` : ""}
      </span>
    </div>
  );
};

export default ReviewStars;
