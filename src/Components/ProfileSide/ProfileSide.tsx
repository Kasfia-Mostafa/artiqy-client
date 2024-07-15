import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";
import SearchId from "../SearchId/SearchId";
const ProfileSide = () => {
  return (
    <div>
      <SearchId></SearchId>
      <ProfileCard></ProfileCard>
      <FollowersCard></FollowersCard>
    </div>
  );
};

export default ProfileSide;
