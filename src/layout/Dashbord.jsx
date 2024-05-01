import { useContext } from "react";
import { FaList} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from '../assets/2.jpg'

const Dashbord = () => {

    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-orange-400 ">
            
            <ul className="menu p-4 text-xl font-semibold">
                <li className="mb-2">
                    <Link to='/'>
                        <img  className=" rounded-3xl w-44 border-2 border-gray-400 h-14" src={logo} alt=""  />
                    </Link>
                </li>
                <div className="divider"></div>
               
                     <li>
                     <NavLink to="/dashboard/students">
                     <FaList></FaList>
                         Students</NavLink>
                     </li>
              
                
                <li>
                    <NavLink to="/dashboard/notice">
                    <FaList></FaList>
                       Notice</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/allotementreq">
                    <FaList></FaList>
                        Allotement_Req </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/allotementdetails">
                        <FaList></FaList>
                        Allotement_Details</NavLink>
                </li>
                <div className="divider"></div>
                <li>
                    <NavLink to="/dashboard/tokenreq">
                    <FaList></FaList>
                        Token_req</NavLink>
                </li>
               
               
                <li>
                    <NavLink to="/dashboard/tokendetails">
                    <FaList></FaList>
                        Token_Details</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/hallfeereq">
                    <FaList></FaList>
                        Hall_Fee_req</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/hallfeedetails">
                    <FaList></FaList>
                       Hall_Fee_Details</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/complains">
                    <FaList></FaList>
                      Complains Box</NavLink>
                </li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <h1 className="text-2xl border-b-2 text-center text-green-500">Hall Management</h1>
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashbord;