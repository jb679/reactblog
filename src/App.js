import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  const [posts] = useState([
    {
      id: 1,
      username: "Alice",
      content: "This is the first post content.",
      timestamp: "2024-02-20T12:00:00Z",
    },
    {
      id: 2,
      username: "Matt",
      content: "This is the second post content.",
      timestamp: "2024-02-20T12:15:00Z",
    },
    {
      id: 3,
      username: "Mikey",
      content: "This is the third post content.",
      timestamp: "2024-02-20T12:30:00Z",
    },
    {
      id: 4,
      username: "Jane",
      content: "This is the fourth post content.",
      timestamp: "2024-02-20T12:45:00Z",
    },
  ]);
  return (
    <div>
      <Nav />
      <h1>Welcome to my blog webite!</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          content={post.content}
          timestamp={post.timestamp}
        />
      ))}
      {/* Add more posts as needed */}
      <Footer />
    </div>
  );
}

export default App;
