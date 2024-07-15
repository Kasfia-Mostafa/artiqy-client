import ProfileLeft from "@/Components/ProfileLeft/Profile";
import PostSide from "../../Components/PostSide/PostSide";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import RightSide from "../../Components/RightSide/RightSide";

const Profile = () => {
  return (
    <div className="className='w-full flex gap-2 lg:gap-4 md:pl-4 pt-5 pb-10 h-full">
     <div className="hidden w-1/3 lg:w-1/4 md:flex flex-col gap-6 overflow-y-auto" >
     <ProfileLeft></ProfileLeft>
     </div>
      <div className="flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto">
        <ProfileCard></ProfileCard>
        <PostSide></PostSide>
      </div>
      <div className="hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Profile;
