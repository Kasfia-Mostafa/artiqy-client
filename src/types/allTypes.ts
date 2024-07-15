import { User } from "firebase/auth";

export interface TPost {
  post: {
    img: string;
    likes: number;
    name: string;
    desc: string;
  };
}

export interface ProfileModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}


export interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
  googleSignIn: () => Promise<void>;
}