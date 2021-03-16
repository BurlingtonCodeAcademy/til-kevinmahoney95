import React from "react";
import { useEffect, useState, Link } from "react";

export default function Facts(props) {
  const [results, setResults] = useState();

  //Pulls post info from api
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((factsList) => {
        // setEntryId(props.match.params.id)
        setResults(factsList);
      });
  });

  //creates and fills an array with post info
  let postArray = [];
  results &&
    results.forEach((post) => {
      postArray.push(post);
    });

  //creates template to fill with post info, and returns a div for every post
  return (
    <div>
      <h1 class="page-headers">All Posts</h1>
      {postArray.map((post, index) => {
        return (
          <div class="all-posts">
            <h1 key={index}>{post.id}</h1>
            {/* <Link to={`/facts/${post._id}`}> */}
              <u>
                <h3 key={index}>{post.title}</h3>
              </u>
            {/* </Link> */}
            <h4 key={index}>By: {post.author}</h4>
            <p key={index}>"{post.fact}"</p>
            <p key={index}>{post.date}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
