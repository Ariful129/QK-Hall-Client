import { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import userpic from '../assets/user.png'
//import { useLoaderData } from "react-router-dom";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
 

    return (
        <div>
        <div className=" bg-base-100 mt-2 border-2 w-2/3 h-[700px] mx-auto rounded-2xl">
            <p className=" font-semibold text-xl text-center mb-4 mt-2">Personal Details</p>
            <img className="mx-auto h-[150px]" src={userpic} alt="" />
            <button className="btn  btn-warning w-full mt-4 mb-12">Upload Your Img <FaLongArrowAltRight /></button>  
             

            <form className="p-4" >
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text text-xl font-semibold">Name</span>
                       </label>
                         <input type="text"  defaultValue={user.displayName} className="input input-bordered" />
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text text-xl font-semibold">Email</span>
                       </label>
                       <input type="email" defaultValue={user.email}  className="input input-bordered" />              
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text text-xl font-semibold">Phone</span>
                       </label>
                       <input type="text" defaultValue={'019087****43'}  className="input input-bordered" />              
                   </div>
                   
               </form>

               <div className=" text-end">
                   <button className="btn  btn-warning w-1/3  mt-4 ">Update</button>  
               </div>
        </div>
   </div>
    );
};

export default MyProfile;