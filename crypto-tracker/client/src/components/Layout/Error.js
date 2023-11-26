import { Link } from "react-router-dom";

import classes from "../../css/Error.module.css";
import errorImage from "../../assets/404.jpg";

const Error = () => {
  return (
    <div className={classes["error"]}>
      <img src={errorImage} alt="Robot Illustration" />
      <div className={classes["error-content"]}>
        <h1>This page is not available right now.</h1>
        <p>
          If you believe you're on the right page, try to refresh or back to the
          home page. <br />Meanwhile, please enjoy the artwork above. Obtained free
          from
          <a
            className={classes.attribution}
            href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#query=404&position=1&from_view=keyword&track=sph"
          > Freepick.</a>
        </p>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Error;
