import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed z-50">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-200px)] pt-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
