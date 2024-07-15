import { BiSolidCommentDots, BiSolidHomeHeart } from "react-icons/bi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { RiSettings3Fill } from "react-icons/ri";
import { useState } from "react";
import { ShareModal } from "../ShareModal/ShareModal";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 mx-4">
      <div className="mt-4 flex justify-between">
        <BiSolidHomeHeart className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
        <HiMiniBellAlert className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
        <BiSolidCommentDots className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
        <RiSettings3Fill className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
      </div>

      <TrendCard></TrendCard>
      <button onClick={() => setModalOpen(true)}
       className="group text-sky-500 text-md font-bold group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500  hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur   origin-left hover:decoration-2  relative bg-sky-100 h-14 w-72 border text-left p-3 rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
       Share
      </button>
        <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    
    </div>
  );
};

export default RightSide;
