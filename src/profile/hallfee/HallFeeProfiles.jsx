import { useContext, useEffect, useState } from "react";
import HallFeeProfile from "./HallFeeProfile";
import { AuthContext } from "../../provider/AuthProvider";



const HallFeeProfiles = () => {
    const [allstudents, setAllstudents] = useState([]);
    const { user } = useContext(AuthContext);

    const url = `https://qk-hall-server.vercel.app/hallfee?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllstudents(data)    
            });

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))
    }, [url]);
 
    
    return (
        <div>
    
    
        <h1 className=" text-center text-xl bg-black  text-white p-2 font-semibold">Total Submitted Semister: {allstudents.length} </h1>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className=" text-xl">
                    <tr>
                        <th>No</th>
                        <th>Stu_ID</th>
                        <th>L/T</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Tran_ID</th>
                        <th>bkash_no</th>
                        <th>Email</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        allstudents.map((token,index) => <HallFeeProfile

                            key={token._id}
                            token={token}
                            //handleBookingConfirm={handleBookingConfirm}
                            index={index + 1}
                        ></HallFeeProfile>)

                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default HallFeeProfiles;