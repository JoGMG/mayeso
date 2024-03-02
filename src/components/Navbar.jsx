import React, { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="  max-w-[1240px] mx-auto flex justify-between items-center py-1 px-4 mt-6 mb-3 lg:sticky lg:top-4">
      <div>
        <Link
          to="/"
          className="uppercase cursor-pointer text-xl font-bold hover:tracking-wider duration-200 flex gap-2 items-center"
        >
          <img src="/src/assets/brand.png" alt="" width={"45px"} />
          <h1>mayeso.</h1>
        </Link>
      </div>
      <div className="hidden lg:flex justify-between w-[40%] items-center ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "uppercase cursor-pointer text-green-500"
              : "uppercase cursor-pointer"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/quiz"
          className={({ isActive }) =>
            isActive
              ? "uppercase cursor-pointer text-green-500"
              : "uppercase cursor-pointer"
          }
        >
          Quizes
        </NavLink>

        <NavLink
          to="/scores"
          className={({ isActive }) =>
            isActive
              ? "uppercase cursor-pointer text-green-500"
              : "uppercase cursor-pointer"
          }
        >
          scores
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive
              ? "uppercase cursor-pointer text-green-500"
              : "uppercase cursor-pointer"
          }
        >
          faq
        </NavLink>
      </div>

      <div className="cursor-pointer">
        <Link to={"/quiz/create"} className="hidden lg:block btn">
          Make a quiz
        </Link>
        <div
          className="lg:hidden text-accent fixed right-4"
          onClick={() => {
            setShowNav((prevState) => !prevState);
          }}
        >
          {showNav ? <MdOutlineClose size={30} /> : <MdOutlineMenu size={30} />}
        </div>
      </div>

      {/* Side Nav */}
      <div
        className={
          showNav
            ? "fixed top-0 left-0 lg:hidden w-[50%] h-full  flex flex-col px-4 bg-black/50 py-7  gap-6 duration-200  shadow-sm"
            : "fixed top-0 left-[-100%] lg:hidden w-[50%] h-full  flex flex-col px-4 bg-black/50 py-1  gap-6 duration-200  shadow-sm"
        }
      >
        <div>
          <Link
            to="/"
            className="uppercase cursor-pointer text-xl font-bold hover:tracking-wider duration-200 flex gap-2 items-center"
          >
            <img src="/src/assets/brand.png" alt="" width={"45px"} />

            <h1>mayeso.</h1>
          </Link>
        </div>

        <div className="flex flex-col gap-2 h-[40%] justify-between ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40 text-green-500"
                : "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40 text-green-500"
                : "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40"
            }
          >
            Quizes
          </NavLink>

          <NavLink
            to="/scores"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40 text-green-500"
                : "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40"
            }
          >
            scores
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40 text-green-500"
                : "uppercase cursor-pointer border-b pb-3  text-center border-secondary/40"
            }
          >
            faq
          </NavLink>
        </div>
        <div className="cursor-pointer mt-4 mx-auto">
          <Link to={"/quiz/create"} className="btn ">
            Make a quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
