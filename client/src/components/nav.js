import React from "react";
import { Link } from "react-router-dom";

//creates nav bar that leads to Home page and Facts page, which contains all posts
export default function Nav() {
  return (
    <div id="navBar-container">
      <Link class="navBar-link" to={"/"}>
        <b>Home</b>
      </Link>
      <br />
      <Link class="navBar-link" to="/facts">
        <b>Read All Posts</b>
      </Link>
    </div>
  );
}
