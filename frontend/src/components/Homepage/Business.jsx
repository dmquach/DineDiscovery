import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchBusinesses } from "../../store/business";
// import BusinessCard from "./businessCard";
import { fetchUnreviewedBusiness } from "../../store/business";
  import "aos/dist/aos.css";

const Business = ({user}) => {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.business));


  return (
    <>  </>
  );
};
export default Business;
