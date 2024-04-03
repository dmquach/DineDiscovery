import "./reviewCard.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import FixedStarRating from "../StarRating/FixedStarRating";

import AOS from "aos";
import "aos/dist/aos.css";
const ReviewCard = ({ review }) => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  if (!review) {
    return null;
  }


  return (<div>
    placeholderr
  </div>) :
  );
}

export default ReviewCard;
