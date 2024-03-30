
import "./businessCard.css"
import StarRating from "../StarRating/StarRating"
// import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

import { Link } from "react-router-dom";
  const BusinessCard =({business})=>{
      return (
        <div
          className="businessCard"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="businessCardPicture">
            {business?.photo ? (
              <div
                className="bizPic"
                style={{
                  backgroundImage: `url(${business?.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "250px",
                  height: "200px",
                }}
              />
            ) : (
              "no picture"
            )}
          </div>
        </div>
      );

  }

  export default BusinessCard
