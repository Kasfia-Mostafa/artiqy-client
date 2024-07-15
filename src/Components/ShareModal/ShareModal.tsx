import { ProfileModalProps } from "@/types/allTypes";
import PostShare from "../PostSide/PostShare/PostShare";

export const ShareModal = ({ modalOpen, setModalOpen }:ProfileModalProps) => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div
        onClick={() => setModalOpen(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          modalOpen ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div className="w-2/4">
        <PostShare></PostShare>
        </div>
      </div>
    </div>
  );
};
