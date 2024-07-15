import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Utility/Providers/AuthProviders";
import Swal from 'sweetalert2'

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;

export const Form = () => {
  const [register, setRegister] = useState(false);
  const [showName1, setShowName1] = useState({});

  const { createUser, googleSignIn, updateUserProfile, signIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // Register part
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Retrieve the selected photo
    const photoInput = form.querySelector('input[type="file"][name="photo"]');
    const photo = photoInput.files[0]; // Get the first selected file

    // Check if photo is defined before proceeding
    if (!photo) {
      console.error("No photo selected");
      return;
    }
    const imageFile = new FormData();
    imageFile.append("image", photo);
    try {
      const res = await axiosPublic.post(image_hosting_api, imageFile);
      console.log("Image uploaded successfully:", res.data);
      createUser(email, password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        // Update user profile with name and photo
        updateUserProfile(name, photo)
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
            };

            // Send user information to "/users" endpoint
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("User added to database");
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Register successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/home/main");
              }
            });
          })
          .catch((error) => console.log(error));
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleGoogleRegister = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/home/main");
      });
    });
  };

  // login part

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/home/main");
    });
  };

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/home/main");
      });
    });
  };

  return (
    <div className="flex items-center h-[100vh]">
      <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
        {/* register form  */}
        <form
          onSubmit={handleSubmit}
          className={`p-8 w-full ${
            register
              ? "lg:translate-x-0"
              : "lg:-translate-x-full hidden lg:block"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4 text-blue-600">
            Register
          </h1>
          <div className="space-y-3">
            <label htmlFor="firstName" className="block">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              required=""
              placeholder="John Doe"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="LastName" className="block">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              required=""
              placeholder="John Doe"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required=""
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required=""
              placeholder=".............."
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <div className="flex justify-center ">
              <label htmlFor="type3-3" className="flex h-10 w-44">
                <p className="r flex items-center w-full truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-cyan-500 px-8 py-3 text-lg font-medium text-cyan-500 shadow-md">
                  {showName1.name ? showName1.name : "CHOOSE FILE"}
                </p>
              </label>
              <input
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const imageFile = e.target.files[0];
                    setShowName1(imageFile);
                  }
                }}
                className="hidden"
                type="file"
                name="photo"
                id="type3-3"
              />
            </div>
          </div>
          {/* button type will be submit for handling form submission*/}
          <div className="flex justify-center my-3">
            <button className="text-xl w-32 h-10 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
              <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Register
            </button>{" "}
          </div>

          <p className="mb-3 text-center">
            Already have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Login
            </Link>
          </p>
          <hr />
          <button
            onClick={handleGoogleRegister}
            type="button"
            className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
          >
            <svg
              viewBox="-0.5 0 48 48"
              version="1.1"
              className="w-6 inline-block mr-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Google-color</title> <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Continue with Google
          </button>
        </form>
        {/* img */}
        <div
          className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${
            register
              ? "translate-x-full rounded-bl-full duration-500"
              : "rounded-br-full"
          }`}
        >
          <img
            src="https://source.unsplash.com/random"
            className="object-cover h-full"
            alt="card navigate ui"
          />
        </div>
        {/* login form */}
        <form
          onSubmit={handleLogin}
          className={`p-8 w-full mr-0 ml-auto duration-500 ${
            register ? "lg:translate-x-full hidden lg:block" : ""
          }`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4 text-blue-600">
            Login
          </h1>
          <div className="space-y-5">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder=".............."
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black"
            />
          </div>
          {/* button type will be submit for handling form submission*/}
          <div className="flex justify-center my-3">
            <button className="text-xl w-32 h-10 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
              <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Login
            </button>{" "}
          </div>
          <p className="mb-3 text-center">
            Don&apos;t have an account?
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Register
            </Link>
          </p>
          <hr />
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
          >
            <svg
              viewBox="-0.5 0 48 48"
              version="1.1"
              className="w-6 inline-block mr-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Google-color</title> <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};
