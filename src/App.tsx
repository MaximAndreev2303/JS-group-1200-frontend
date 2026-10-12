import Header from "./components/Header";
import PostList from "./components/PostList";
import { posts } from "./data/posts";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Posts</h2>
        <PostList posts={posts} />
      </main>
    </>
  );
}

export default App;