import Posts from "../Post/Posts"
import PostShare from "./PostShare/PostShare"

const PostSide = () => {
  return (
    <div className="flex flex-col gap-4 h-[100vh] overflow-auto">
      <PostShare></PostShare>
      <Posts></Posts>
    </div>
  )
}

export default PostSide
