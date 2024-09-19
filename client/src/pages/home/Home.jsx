import Banner from "./banner/Banner";
import Featured from "./featured/Featured";
import Scholarship from "./scholarship/Scholarship";

const Home = () => {
  return (
    <>
      <div className="space-y-2 lg:space-y-5">
        <Banner />
        <Featured />
        <Scholarship />
      </div>
    </>
  );
};
export default Home;
