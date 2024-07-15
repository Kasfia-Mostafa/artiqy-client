import { useState } from "react";
import Logout from "../Buttons/LogOut/Logout";
import { ProfileModal } from "../ProfileModal/ProfileModal";
import { FaInfoCircle } from "react-icons/fa";

const InfoCard = () => {

  
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 border-b border-r-2 p-4 rounded-md mt-6 h-80">
      <div className="flex justify-center">
        <h4 className="text-lg" >Your Info</h4>
        <div>
        </div>
        <div>
          <FaInfoCircle onClick={() => setModalOpen(true)} />
          <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
     <div className="my-10 space-y-4">
     <div>
        <span>
          <b>Status </b>
        </span>
        <span>In a Relationship</span>
      </div>
      <div>
        <span>
          <b>Lives </b>
        </span>
        <span>Dhaka</span>
      </div>
      <div>
        <span>
          <b>Works At </b>
        </span>
        <span>Artiqy.co</span>
      </div>
     </div>

      <Logout />
    </div>
  );
};

export default InfoCard;
