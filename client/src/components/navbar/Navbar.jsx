import { FiMenu } from "react-icons/fi";
import { useState } from "react";
// import "./navbar.css";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/brand_icon.png";
import { MdAddCall } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuItem = (
    <>
      <li className="navlink">
        <Link to="/">Home</Link>
      </li>

      {/* {user?.email == "haquemdnurul108@gmail.com" && (
        <li className="navlink">
          <Link to="/uploadData">Upload Data</Link>
        </li>
      )} */}

      <li className="navlink">
        <Link to="/check">Visa Check</Link>
      </li>
      <li className="navlink">
        <Link to="/">Contact</Link>
      </li>
      <li className="navlink">
        <Link to="/upload">Upload Data</Link>
      </li>
      {/* <li className="navlink flex gap-2 items-center">
        <MdAddCall size={32} className="text-sky-600" />
        <div className="flex flex-col">
         <span>Contact Us</span>
          <span>+443333059450</span>
        </div>
      </li> */}
      {/* <li className="navlink">
        {user ? (
          <Link onClick={() => logOut()}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li> */}
      {/* {user && (
        <img
          src={user?.photoURL}
          alt="user photo"
          className="w-12 h-12 rounded-full"
        />
      )} */}
    </>
  );

  return (
    <>
      <div className="md:hidden w-[100vw] navbar text-black font-semibold bg-slate-950">
        <div className="navbar py-2 flex justify-between items-center w-11/12 mx-auto">
          <Link
            to="/"
            className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-1 md:hidden"
          >
            <img
              src={brandLogo}
              alt="brand logo"
              className="w-12 lg:w-20 2xl:w-32"
            />
          </Link>
          <div className="dropdown z-50">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              {showMenu && (
                <FiMenu
                  onClick={() => setShowMenu(false)}
                  className="h-6 w-6 text-white bg-blue-600 p-[2px]"
                />
              )}
              {showMenu || (
                <FiMenu
                  size={60}
                  onClick={() => setShowMenu(true)}
                  className="h-6 w-6 text-white bg-blue-600 p-[2px]"
                />
              )}
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content flex items-center gap-2 rounded-box bg-white text-black rounded-lg ${
                showMenu ? "absolute flex flex-col right-1 p-8" : "hidden"
              }`}
            >
              {MenuItem}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden md:block w-[100vw] navbar text-white font-semibold bg-slate-950">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <Link
            to="/"
            className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-1"
          >
            <img
              src={brandLogo}
              alt="brand logo"
              className="w-12 lg:w-16 2xl:w-24"
            />
          </Link>
          <ul className="menu menu-horizontal px-1 flex justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
            {MenuItem}
          </ul>
          <div className="flex gap-2 justify-center items-center">
            <MdAddCall size={32} className="text-sky-600" />
            <div className="flex flex-col">
              <span>Contact Us</span>
              <span>+443333059450</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
