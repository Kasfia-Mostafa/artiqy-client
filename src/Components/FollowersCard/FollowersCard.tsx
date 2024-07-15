import { Followers } from "../../Data/Data";
const FollowersCard = () => {
  return (
    <div className="w-full rounded-md gap-4 flex justify-center flex-col mt-8">
      <div>
        <h3 className="font-bold text-lg text-sky-700">
          Who is following you ?
        </h3>
        <hr className="my-3" />
        {Followers.map((follower) => {
          return (
            <div key={follower.id} className="flex justify-between space-y-2 mt-2">
              <div className="flex gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={follower.img}
                  alt="follower Image" 
                />
                <div className="grid grid-row-1">
                  <span className="font-semibold">{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
              <button className="text-md w-20 h-8 bg-teal-600 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-md hover:cursor-pointer">
                <span className="absolute bg-teal-700 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-teal-900 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                Follow
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowersCard;
