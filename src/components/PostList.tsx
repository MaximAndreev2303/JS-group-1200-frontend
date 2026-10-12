import type { Post } from "../types/Post";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

function PostList({ posts }: Props) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;