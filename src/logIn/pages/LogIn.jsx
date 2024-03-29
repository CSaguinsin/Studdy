import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import logo from '../images/studdy.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="relative box-border flex items-center p-1 h-screen">
      <div className="absolute top-2 left-0 right-0 p-10 text-center md:top-0">
        <p className="text-6xl font-bold font-lexend">Welcome Back</p>
        <p className="text-3 font-lexend">Please enter your details</p>
      </div>

      <section className="p-20 rounded-md shadow-lg bg-white relative z-15 mt-15 left-2/4 md:left-40 md:w-90">
        <p className="text-center mb-4 text-2xl font-lexend ">Log In</p>

        <div className="w-full md:w-auto flex-col mr-5">
          <form className="space-y-4 w-auto">
            <p className="mb-0 text-sm-3">E-mail</p> 
            <input
              className="rounded-lg text-sm w-full px-3 py-2 border border-solid border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
            />
            <p className="mb-0 text-sm font-abc">Password</p> 
            <input
              className="rounded-lg text-sm w-full px-3 py-2 border border-solid border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="password"
            />

            <div className="flex justify-end text-sm">
              <a
                className="font-lexend text-gray-400 hover:text-gray-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <div className="text-base text-black-500 text-center md:text-left">
              <div className="mb-4 text-center flex justify-center">
                <a
                  className="flex items-center justify-center text-black-300 border border-solid border-black rounded px-2 py-2 hover:bg-gray-200 w-full md:w-80"
                  href="#"
                >
                  <FaGoogle className="mr-3 text-lg font-abc" />
                  Sign in with Google
                </a>
              </div>
              <div className="flex justify-center ">
                <a
                  className="flex items-center justify-center text-black-300 border border-solid border-black rounded px-2 py-2 hover:bg-gray-200 w-full md:w-80"
                  href="#"
                >
                  <FaFacebook className="mr-3 text-lg font-abc" />
                  Sign in with Facebook
                </a>
              </div>
            </div>
            
            <button className="border-2 border-gray-400 bg-blue-600 hover:bg-blue-700 shadow-md py-2 min-w-full text-white rounded-lg text-lg tracking-wider font-lexend-deca" type="submit">
              Log in
            </button>

            <div className="flex justify-center items-center text-sm text-center">
              <a onClick={() => navigate('/signin')}
                className="text-gray-400 hover:text-gray-700 underline font-lexend"
                href="#"
              >
                OR SIGN UP
              </a>
            </div>
          </form>
        </div>
      </section>
      <div className="absolute top-50 right-1 md:w-3/5"> 
        <img src={logo} alt="Logo" className="w-full max-h-48 md:max-h-full h-auto" /> 
</div>


    </div>
  );
};

export default Login;
