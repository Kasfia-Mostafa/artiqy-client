import PostSide from "../../Components/PostSide/PostSide";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="relative grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <ProfileSide></ProfileSide>
      </div>

      <div className="col-span-2">
        <PostSide></PostSide>
      </div>
      
      <div className="col-span-1">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
