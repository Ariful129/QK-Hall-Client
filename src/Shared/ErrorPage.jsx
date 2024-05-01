import { NavLink } from "react-router-dom";
import errorpage from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div >
                <img className='w-full h-[450px] mt-24' src={errorpage} alt="" />
            </div>
            <div className='text-center'>
                <NavLink to="/">
                    <button className="border-2 p-2 px-12  text-xl bg-red-600 font-semibold text-white rounded-xl">Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;