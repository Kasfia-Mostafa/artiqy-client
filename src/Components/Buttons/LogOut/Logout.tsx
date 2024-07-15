/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import "../LogOut/Logout.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/Utility/Providers/AuthProviders";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error: any) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <button className="cta flex justify-center" onClick={handleSignOut}>
        <span>Logout</span>
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Logout;
