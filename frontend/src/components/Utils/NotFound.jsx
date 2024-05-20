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
      </div>
    );
}

export default NotFound
