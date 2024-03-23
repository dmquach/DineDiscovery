import "./starRating.css";

const StarRating = ({ rating,styles }) => {

  return (

    <div className="star-rating" style={styles}>
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <span key={i + 99} className={i <= rating ? "on" :"off"}>
            <i className="fa-solid fa-star"></i>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
