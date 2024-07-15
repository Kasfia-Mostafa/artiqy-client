import { ProfileModalProps } from "@/types/allTypes";
import { GiCrossedBones } from "react-icons/gi";

export const ProfileModal = ({
  modalOpen,
  setModalOpen,
}: ProfileModalProps) => {
  return (
    <div className="mx-auto flex items-center justify-center w-full">
      <lord-icon
        onClick={() => setModalOpen(true)}
        src="https://cdn.lordicon.com/ylvuooxd.json"
        trigger="hover"
        colors="primary:#ebe6ef,secondary:#d1f3fa,tertiary:#66d7ee,quaternary:#3a3347"
        style={{ width: "30px", height: "30px" }}
      ></lord-icon>
      <div
        onClick={() => setModalOpen(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          modalOpen ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute w-sm rounded-lg backdrop-blur-lg drop-shadow-2xl sm:w-[500px] ${
            modalOpen
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10 text-black w-full">
            <GiCrossedBones
              onClick={() => setModalOpen(false)}
              className="mx-auto -mr-3.5 text-slate-100 cursor-pointer"
            />
            <h1 className="flex justify-center text-slate-200 pb-8 text-4xl backdrop-blur-sm">
              Your Information
            </h1>

            <div className="space-y-4">
              <div className="w-full flex gap-3">
                <input
                  className="capitalize bg-slate-300 rounded-md shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px]"
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  required
                />
                <input
                  className="p-3 bg-slate-300 rounded-md capitalize shadow-2xl w-full outline-none focus:border-solid focus:border-[1px]"
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                />
              </div>
              <div className="w-full flex gap-3">
                <input
                  className="capitalize bg-slate-300 rounded-md shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px]"
                  type="text"
                  placeholder="Works in"
                  id="worksIn"
                  name="worksIn"
                  required
                />
                <input
                  className="p-3 bg-slate-300 rounded-md capitalize shadow-2xl w-full outline-none focus:border-solid focus:border-[1px]"
                  type="text"
                  placeholder="Relationship Status"
                  id="relationship"
                  name="relationship"
                />
              </div>
              <div className="w-full flex gap-3">
                <input
                  className="capitalize bg-slate-300 rounded-md shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px]"
                  type="text"
                  placeholder="Lives In"
                  id="lives"
                  name="lives"
                  required
                />
                <input
                  className="p-3 bg-slate-300 rounded-md capitalize shadow-2xl w-full outline-none focus:border-solid focus:border-[1px]"
                  type="text"
                  placeholder="Country"
                  id="country"
                  name="country"
                />
              </div>
              <div className="w-full flex gap-3">
                <div className="w-full">
                  <h2 className="text-slate-200">Profile Image</h2>
                  <input
                    className="capitalize bg-slate-300 rounded-md shadow-2xl p-2 w-full outline-none focus:border-solid focus:border-[1px]"
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    required
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-slate-200">Cover Image</h2>
                  <input
                    className="p-2 bg-slate-300 rounded-md capitalize shadow-2xl w-full outline-none focus:border-solid focus:border-[1px]"
                    type="file"
                    id="coverImage"
                    name="coverImage"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="relative h-8 w-32 mt-6 origin-top transform rounded-lg border text-sm before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 text-white font-bold hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-teal-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
