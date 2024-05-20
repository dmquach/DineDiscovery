import "./NotFound.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound =()=>{
    return (
      <div className="cantFind">
        <div>
          <h1>We’re sorry. We can’t find the page you’re looking for.</h1>
          <h2>Please try a new </h2>
          <Link className="signupLink" to="/">
            search
          </Link>
        </div>
        <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/1c54cc25ce01/assets/img/svg_illustrations/cant_find_650x520_v2.svg" alt="" />
      </div>
    );
}

export default NotFound
