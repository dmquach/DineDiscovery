import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestReviews } from "../../store/review";

import reviewCard from "./reviewCard";
import "./reviewCard.css";

const Reviews = () => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) =>
    Object.values(state.review).sort((a, b) => b.id - a.id)
  );
}

export default Reviews;
