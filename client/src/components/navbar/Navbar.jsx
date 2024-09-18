import { FiMenu } from "react-icons/fi";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/brand_icon.jpg";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const MenuItem = (
    <>
      <li className="navlink">
        <Link to="/">Visa Check</Link>
      </li>
      {user?.email == "peterleney179@gmail.com" && (
        <li className="navlink">
          <Link to="/upload">Upload Data</Link>
        </li>
      )}
      <li className="navlink">
        {user ? (
          <Link onClick={() => logOut()}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <>
      <div className="md:hidden w-[100vw] navbar text-black font-semibold bg-slate-950 py-2">
        <div className="navbar py-2 flex justify-between items-center w-11/12 mx-auto">
          <Link
            to="/"
            className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-1 md:hidden"
          >
            <img
              src={brandLogo}
              alt="brand logo"
              className="w-12 lg:w-20 2xl:w-32 rounded-full"
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

      <div className="navbar-center hidden md:block w-[100vw] navbar text-white font-semibold bg-slate-950 py-2">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <Link
            to="/"
            className="text-xl tracking-wide md:tracking-widest text-white flex items-center gap-1"
          >
            <img
              src={brandLogo}
              alt="brand logo"
              className="w-12 lg:w-16 2xl:w-24 rounded-full"
            />
          </Link>
          <ul className="menu menu-horizontal px-1 flex justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 items-center">
            {MenuItem}
          </ul>
            {user && (
              <img
                src={user?.photoURL}
                alt="user photo"
                className="w-12 h-12 rounded-full"
              />
            )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
