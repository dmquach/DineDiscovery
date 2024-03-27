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
}
