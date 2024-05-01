import { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { LuClapperboard } from "react-icons/lu";
import { SlCamrecorder } from "react-icons/sl";
import { MdOutlineFileCopy } from "react-icons/md";
import {  FaLongArrowAltRight,  } from "react-icons/fa";
import logo from '../assets/2.jpg'
import { IoMdLogOut } from "react-icons/io";
import { IoManSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
      //from Cntex API
    const { user,logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log('Logout Successful', res)
                toast.success("Logout successfully");
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-66 min-h-screen bg-base-200">
            
            <ul className="menu p-4 text-xl font-semibold">
                <li className="mb-2">

                    <Link to='/'>
                       <img className=" rounded-3xl w-44 border-2 border-gray-400 h-14" src={logo} alt="" />
                    </Link>
                </li>
                <li className="border-t-2 border-b-2 mb-10 mt-4">
                            <div>
                                {/* <img className="h-[35px] mr-1 rounded-full" src={userpic} alt="" /> */}
                                <p className="font-semibold  text-xl ">{user.displayName}</p>
                            </div>
                        </li>
                <div className="divider"></div>
                
                <li>
                    <NavLink to="/profile/myprofile">
                        <IoManSharp />
                        MyProfile</NavLink>
                </li>
                <li>
                    {  user.email!=='u1904129@student.cuet.ac.bd' &&

                         <NavLink to="/profile/tokenprofile">
                         <LuClapperboard />
                          TokenPurchess_History</NavLink>
                    }
                </li>
                <li>
                     {   user.email!=='u1904129@student.cuet.ac.bd' &&
                          <NavLink to="/profile/hallfeeprofile">
                          <SlCamrecorder />
                           HallFee_History</NavLink>
                     }
                   
                </li>
                <div className="divider"></div>
                <li>
                     {   user.email!=='u1904129@student.cuet.ac.bd' &&
                          <NavLink to="/profile/allotmentprofile">
                          <MdOutlineFileCopy/>Room_History</NavLink>
                     }
                </li>
             
             
               
               
                <li className="border-t-2  mt-64 ">
                  <div>
                    <button className="btn  text-xl btn-warning" onClick={handleSignOut}>LogOut <IoMdLogOut /></button>
                   </div>
                </li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
        <div className="flex flex-col w-full border-opacity-50">
                     <div className="flex  mx-auto items-center">
                       
                         { user.email==='u1904129@student.cuet.ac.bd' ?
                            <Link to='/dashboard'>
                                <button className="btn  text-xl bg-base-100">Hall Management <FaLongArrowAltRight /></button>
                            </Link>
                            :<p className="btn  text-xl bg-base-100">Profile<FaLongArrowAltRight /></p>
                         }
                     </div>

                    <div className="divider">&&</div>
                    <div className="grid h-1 card bg-base-100 rounded-box place-items-center">
                       
                       
                    </div>
                </div>

            <Outlet></Outlet>
        </div>
    </div>

    );
};

export default Profile;