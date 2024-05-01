import { Link, NavLink } from "react-router-dom";
//import { FaLongArrowAltRight } from "react-icons/fa";
import userpic from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from '../assets/cuet.png'

const Navbar = () => {

        //from Cntex API


    const { user} = useContext(AuthContext);
    //console.log('My Name is ', user)

    //From Custom Hook
    // const auth=UseAuth();
    // const {user}=auth;

 
    
   


   const navItems = <>

       <li className="" ><NavLink className="hover:bg-slate-300 p-3 rounded-xl " to="/">Home</NavLink> </li>
       <li className="" ><NavLink className="hover:bg-slate-300 p-3 rounded-xl " to="/token_purches">Token</NavLink> </li>
       <li className="" ><NavLink className="hover:bg-slate-300 p-3  rounded-xl " to="/hallfee">Hall_Fee</NavLink> </li>
       <li className="" ><NavLink className="hover:bg-slate-300 p-3  rounded-xl " to="/complain">Complains</NavLink> </li>
       <li className="" ><NavLink className="hover:bg-slate-300 p-3  rounded-xl " to="/roomallotement">Room_Allotement</NavLink> </li>
       <li className="" ><NavLink className="hover:bg-slate-300 p-3  rounded-xl " to="/contact">Contact</NavLink> </li>
       
       
       
       

   </>

    return (
        <div className="navbar h-22 mb-1 p-4  bg-slate-100 rounded-xl font-bold  ">
        <div className="max-w-[1370px] mx-auto navbar">
        <div className="navbar-start">
             <div className="dropdown">
                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                 </label>
                 <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                     {navItems}
                 </ul>
             </div>
             <Link to="/" className="btn btn-ghost normal-case text-xl">
                 <img className="h-[40px]" src={logo} alt="" />
                 {/* <img className=" rounded-3xl w-44 border-2 border-gray-400 h-14" src={logo} alt="" /> */}
                 <h1 className=" font-bold lg:text-2xl ">QK Hall </h1>
             </Link>
         </div>
         {/* <div className="navbar-center hidden lg:flex " >
             <ul className="text-xm menu-horizontal px-1 lg:items-center  p-2 " >
                 {navItems}
             </ul>
         </div> */}
         <div className="navbar-end">

         <ul className="text-xm menu-horizontal px-1 lg:items-center  p-2  hidden lg:flex" >
                 {navItems}
             </ul>
             <p className="mr-2 font-thin">
                 {/* {
                     user && <span className="mr-2  text-green-600 font-bold">{user.displayName}</span>
                 } */}
             </p>
             {user &&
                    <Link to='/profile'>
                        <label tabIndex={0} className="btn btn-sm btn-circle avatar mr-4">
                            <div className="w-12 rounded-full">
                                <img src={userpic} />
                            </div>
                        </label>
                    </Link>
                }
                {!user ? <NavLink to='/login'> <button className="btn btn-sm md:btn-md btn-warning">Login <FaLongArrowAltRight /></button></NavLink>:''
                //    <button onClick={handleSignOut} className="btn btn-outline btn-warning">LogOut <FaLongArrowAltRight /></button>
                //    :
                }
         </div>

        </div>
     </div>
    );
};

export default Navbar;