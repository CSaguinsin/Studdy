import React from "react";
import StuddyLogo from "../assets/StuddyLogo.png";
import "./Navbar.css";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
const Navbar = () => {
  const { user, logout, getUser } = useStateContext();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);
  return (
    <>
      <nav style={{ backgroundColor: "#DADDE2" }} className="dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <img
              src={StuddyLogo}
              className="logo" // Apply custom class for logo styling
              alt="Flowbite Logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {user ? (
          <>
            <Button
              onClick={logout}
              type="submit"
              className="button text-white rounded-full"
              color="danger"
            >
              {user.name} Logout
            </Button>
          </>
        ) : (
          <>
          <Link to="/login" className="hidden w-full md:block md:w-auto">
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <Button
                className="button text-white rounded-full"
                color="success"
              >
                Get Started
              </Button>
            </div>
          </Link>
          </>
        )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
