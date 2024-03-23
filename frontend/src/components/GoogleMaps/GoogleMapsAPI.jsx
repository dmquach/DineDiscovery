
import "./map.css";
import { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  OverlayView,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";

import StarRating from "../Stars/StarRating";

const place = ["places"];

function getCenter(business) {
  const markers = Object.values(business).map((biz, i) => ({
    position: { lat: biz.lat, lng: biz.lng },
  }));
  const bounds = new window.google.maps.LatLngBounds();
  markers.forEach(({ position }) => bounds.extend(position));
  const { lat, lng } = bounds.getCenter().toJSON();
  return { lat, lng };
}
