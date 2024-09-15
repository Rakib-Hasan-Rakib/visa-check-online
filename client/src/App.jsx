import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";

function App() {
  return (
    <>
      <div className="fixed z-50">
        <Navbar />
      </div>
      <Container>
        <div className="min-h-[calc(100vh-200px)] pt-20">
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default App;
