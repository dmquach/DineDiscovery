import MainSlider from "./mainSlider"
import Business from "./Business"
// import * as sessionActions from "../../store/session";
import { useSelector } from "react-redux";
import Reviews from "./reviews";

// import React, { useRef, useState } from "react";

const Homepage=()=>{
    const sessionUser = useSelector((state) => state.session.user);

    return (
      <div className="mainPage">
        <MainSlider />
        {sessionUser && <Business user={sessionUser}/>}
       {/* {sessionUser?.avatarz
       <img src={`${sessionUser.avatar}`}/> */}
        <Reviews/>

      </div>
    );
}

export default Homepage
