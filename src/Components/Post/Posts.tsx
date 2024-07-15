import { PostsData } from "@/Data/PostsData";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="flex flex-col gap-4">
      {PostsData.map((post, id) => {
        return <Post post={post} key={id}></Post>;
      })}
    </div>
  );
};

export default Posts;
