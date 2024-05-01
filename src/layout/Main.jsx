import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div>
            <div className="mx-auto">
                <div className="fixed top-0 z-10 w-full ">
                    <Navbar />
                </div>
                <div className="pt-20">
                    <Outlet />
                </div>
                {/* <Footer /> */}

                <ToastContainer />

            </div>
        </div>
    );
};

export default Main;