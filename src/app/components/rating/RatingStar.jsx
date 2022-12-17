import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

const RatingStar = ({ rating }) => {
  const createFilledStars = (rating) => {
    const stars = [];
    // filled stars
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<StarFill key={`star-filled${i}`} color="goldenrod" />);
    }
    // not or half filled stars
    if (rating % 1 >= 0.5) {
      // half filled
      stars.push(<StarHalf key={`star-half`} color="goldenrod" />);
    } else {
      // empty ones
      for (let i = 0; i < 5 - Math.floor(rating); i++) {
        stars.push(<StarEmpty key={`star-empty${i}`} />);
      }
    }
    return stars;
  };

  return <div>{createFilledStars(rating)}</div>;
};

export default RatingStar;
