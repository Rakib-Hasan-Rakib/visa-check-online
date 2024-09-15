import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Headroom from "react-headroom";

function App() {
  return (
    <>
      {/* <Headroom>
        <Navbar />
      </Headroom> */}
      <div className="fixed z-50">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
