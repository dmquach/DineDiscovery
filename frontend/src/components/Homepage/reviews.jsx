import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestReviews } from "../../store/review";

import reviewCard from "./reviewCard";
import "./reviewCard.css";

const Reviews = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const reviews = useSelector((state) =>
    Object.values(state.review).sort((a, b) => b.id - a.id)
  );

  useEffect(() => {
    dispatch(fetchLatestReviews()).then(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <>
      <h1 className="header">Recent Activity</h1>
      <div className="reviewWrapper">
        {reviews.map((review, i) => (
          <ReviewCard key={`review_${i}`} review={review} />
        ))}
      </div>
    </>
  );
}

export default Reviews;
