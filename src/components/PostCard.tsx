import type { Post } from "../types/Post";

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  return (
    <div className="post-card">
      <span className="category">{post.category}</span>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>Автор: {post.author}</small>
    </div>
  );
}

export default PostCard;