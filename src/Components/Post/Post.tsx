import { TPost } from "@/types/allTypes";
import Share from "../Buttons/Share/Share";


const Post: React.FC<TPost> = ({ post }) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-2 rounded-md">
      <img
        className="w-full max-h-fit object-fit rounded-md"
        src={post.img}
        alt="Post"
      />
      <div className="flex gap-4 items-start justify-around cursor-pointer">
        <lord-icon
          src="https://cdn.lordicon.com/biobqpgs.json"
          trigger="hover"
          colors="primary:#e83a30,secondary:#ebe6ef,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#f24c00"
          style={{ width: "30px", height: "30px" }}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/vhyuhmbl.json"
          trigger="hover"
          colors="primary:#9ce5f4,secondary:#66d7ee,tertiary:#16a9c7"
          style={{ width: "30px", height: "30px" }}
        />
        <div>
          <Share />
        </div>
      </div>
      <span>
        <b>{post.likes} likes</b>
      </span>
      <div>
        <span>
          <b>{post.name} </b>
        </span>
        <span>{post.desc}</span>
      </div>
    </div>
  );
};

export default Post;
