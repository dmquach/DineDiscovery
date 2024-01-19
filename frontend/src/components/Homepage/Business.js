import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchBusinesses } from "../../store/business";
// import BusinessCard from "./businessCard";
import { fetchUnreviewedBusiness } from "../../store/business";
  import AOS from "aos";
  import "aos/dist/aos.css";

const Business = ({user}) => {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.business));

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);


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
