import "./GoogleMapsAPI";

import { fetchUnreviewedBusiness } from "../../store/business";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo} from "react";
import { useLoadScript, } from "@react-google-maps/api";

const place = ["places"];
export default function BizGMap({ business, class_name }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: place,
  });

  if (!business) {
    return null;
  }
  if (!isLoaded) return <div>Loading...</div>;
  return <Map business={business} class_name={class_name} />;
}

function Map({ business }) {
  const center = useMemo(
    () => ({ lat: business.lat, lng: business.lng }),
    [business]
  );
  const [selected, setSelected] = useState(null);

  return (
    <>

    </>
  );
}
