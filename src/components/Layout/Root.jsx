import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[calc(100vh-290px)] max-w-6xl mx-auto py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
