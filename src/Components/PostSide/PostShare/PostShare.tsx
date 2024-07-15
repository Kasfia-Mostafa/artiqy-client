import { useContext, useRef, useState } from "react";
import { UilPlayCircle, UilScenery, UilLocationPoint, UilSchedule } from "@iconscout/react-unicons";
import { FaTimesCircle } from "react-icons/fa";
import { AuthContext } from "@/Utility/Providers/AuthProviders";

const PostShare = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = URL.createObjectURL(event.target.files[0]);
      setImage(img);
    }
  };

  const handleImageClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <div className="flex gap-4 bg-[#e6f2fc] p-4 rounded-md w-full">
      <div>
        <img className="rounded-full w-10" src={user?.photoURL} alt="User" />
      </div>
      <div className="w-full space-y-4">
        <input
          className="outline-none w-full rounded-lg p-2 bg-gray-200"
          type="text"
          placeholder="Share your imaginations..."
        />
        <div className="flex justify-around cursor-pointer">
          <div
            className="flex justify-center items-center gap-2"
            onClick={handleImageClick}
          >
            <UilScenery className="text-teal-600" aria-label="Add photo" />
            Photo
          </div>
          <div className="flex justify-center items-center gap-2">
            <UilPlayCircle className="text-sky-600" aria-label="Add video" />
            Video
          </div>
          <div className="flex justify-center items-center gap-2">
            <UilLocationPoint className="text-teal-600" aria-label="Add location" />
            Location
          </div>
          <div className="flex justify-center items-center gap-2">
            <UilSchedule className="text-sky-600" aria-label="Add schedule" />
            Schedule
          </div>
          <button className="group relative z-10 h-8 w-20 overflow-hidden rounded-md bg-sky-700 text-sm text-white">
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
            <span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
              Share
            </span>
            Share
          </button>
          <div className="hidden">
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
              aria-label="Upload image"
            />
          </div>
        </div>
        {image && (
          <div className="relative">
            <FaTimesCircle
              className="text-2xl text-white cursor-pointer absolute top-2 right-3"
              onClick={() => setImage(null)}
              aria-label="Remove image"
            />
            <img className="w-full max-h-96" src={image} alt="Post" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
