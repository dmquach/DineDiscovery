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


  return (
    <div>
      {review?.userAvatar ? (
        <div
          className="userProfilePicURL"
        ></div>
      ) : (
        <i className="fa-solid fa-user profilePicture"></i>
      )}

      <h1>{review.firstName} {review.lastName[0]}.</h1>

      {review?.imageUrls[0] !== undefined ? (
            <li
            style={{
              backgroundImage: `url(${review.imageUrls[0]})`,
              backgroundSize: "cover",
            }}
          ></li>
        ) : (
          <li
            style={{
              backgroundImage: ``,
              backgroundSize: "cover",
            }}
          ></li>
        )}

        <Link to={`/business/${review.businessId}`}>
          <li
            className="bizName"
            style={{ marginLeft: "12px", marginRight: "12px" }}
          >
            {review.businessName}
          </li>
        </Link>
        <FixedStarRating
          rating={review.rating}
          styles={{ marginLeft: "12px" }}
        />
       <li>
          <p>{review.body}</p>
        </li>
    </div>
  );
}

export default ReviewCard;
