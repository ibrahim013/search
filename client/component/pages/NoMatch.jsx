import React from "react";
import { Link } from "react-router-dom"

import errorcode from "../../aserts/404.gif";

const NoMatch = () => (
    <div className="error-main">
		<h1>404</h1>
		<p>Page not found !! <Link to="/">Go to back</Link> to home page</p>
	</div>
)
export default NoMatch;
	
