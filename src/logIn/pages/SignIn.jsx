import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import logo from '../images/Sstuddy.png';

const SignIn = () => {
    const navigate = useNavigate();
  return (
    

    <div className="relative flex items-center h-screen">
      <div className="w-2/3 relative top-10  left-1/3 totransform -translate-x-2/4 translate-y-2/6">
        <img src={logo} alt="Logo" className="" />
      </div>

      <div className="w-full max-w-md mx-auto text-center md:text-left">
        <div className="absolute top-10 left-20 right-0 p-10 text-center md:top-2/8 md:transform -translate-y-1/3 space-y-3">
          <p className="text-6xl font-bold font-lexend ">Sign Up Today!</p>
          <p className="text-3 font-lexend">Together, we make studying way more fun</p>
        </div>


        <section className="p-10 shadow-lg bg-black text-white absolute right-40 top-40 bottom-20 w-full md:w-2/6 rounded-t-none rounded-r-xl rounded-l-xl rounded-b-none" >
          <div className="w-full md:w-auto flex-col">
            <form className="space-y-5 w-full">
              <p className="text-center mb-0 text-2xl ">Register</p>
              <p className="mb-0  text-sm">Name</p>

              <input
                className="rounded-lg text-sm w-full px-3 py-2 border border-solid border-gray-300 bg-gray-400 text-black focus:outline-none focus:border-gray-300"
                type="text"
              />

              <p className="mb-0  text-sm">Email</p>

              <input
                className="rounded-lg text-sm w-full px-3 py-2 border border-solid border-gray-300 bg-gray-400 text-black focus:outline-none focus:border-gray-300"
                type="text"
              />

              <p className="mb-0 text-sm">Password</p>
              <input
                className="rounded-lg text-sm w-full px-3 py-2 border border-solid border-gray-300 bg-gray-400 text-black focus:outline-none focus:border-gray-300"
                type="password"
              />

              <p className="mb- text-sm">Re-Type Password</p>
              <input
                className="rounded-lg text-sm w-full px-3 py-2 border border-solid border-gray-300 bg-gray-400 text-black focus:outline-none focus:border-gray-300"
                type="password"
              />

              <div className="text-base text-gray text-center md:text-left">
                <div className="mb-5 text-center flex justify-center">

                  <a
                    className="flex items-center justify-center text-gray border border-solid rounded px-2 py-2 hover:bg-gray-800 w-full md:w-80"
                    href="#"
                  >
                    <FaGoogle className="mr-2 text-lg font-abc" />
                    Sign in with Google
                  </a>
                </div>

                <div className="flex justify-center ">
                  <a
                    className="flex items-center justify-center text-white border border-solid rounded px-2 py-2 hover:bg-gray-800 w-full md:w-80"
                    href="#"
                  >
                    <FaFacebook className="mr-2 text-lg font-abc " />
                    Sign in with Facebook
                  </a>
                </div>

              </div>
            
              <button className="  border-2 border-white bg-blue-600 hover:bg-blue-800 shadow-md py-2 min-w-full text-white rounded-lg text-lg">
                Register
              </button>

              <div className="flex justify-center items-center text-sm text-center">
              <a onClick={() => navigate(-2)}
                className="text-gray-400 hover:text-gray-700 underline font-abc"
                href="#"
              >
                GO BACK
              </a>
            </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;