import React from "react";

export default function Home() {
  return (
    <div>
      <h2 class="page-headers">Enter a Post Below</h2>
      {/* Form to send TILs to mongo */}
      <form action="/api" method="POST" id="form">
        {/* Input for title of post */}
        <input name="title" type="text" placeholder="Title" />
        <br />
        {/* Input for author of post */}
        <input name="author" type="text" placeholder="Author" />
        <br />
        {/* Text area for content of post */}
        <textarea name="fact" placeholder="Enter your fact here" style={{width: "20vw", height: "20vh"}}/>
        <input type="submit" />
      </form>
    </div>
  );
}
