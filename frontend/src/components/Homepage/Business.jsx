import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchBusinesses } from "../../store/business";
// import BusinessCard from "./businessCard";
import { fetchUnreviewedBusiness } from "../../store/business";
  import "aos/dist/aos.css";

const Business = ({user}) => {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.business));

  useEffect(() => {
    dispatch(fetchUnreviewedBusiness());
  }, [dispatch,]);

  if (businesses === undefined || businesses === null || businesses.length === 0) {
    return null;
  }

  return (
    <>  </>
  );
};
export default Business;
