import { useContext, useEffect, useState } from "react";
import AllotementProfile from "./AllotementProfile";
import { AuthContext } from "../../provider/AuthProvider";


const AllotementProfils = () => {
    const [allstudents, setAllstudents] = useState([]);
    const { user } = useContext(AuthContext);
    //From Custom Hook
    // const auth = UseAuth();
    // const { user } = auth;

    const url = `http://localhost:5000/roomallotement?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // Filter data where status is 'confirm'
                setAllstudents(data) 
               
            });

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url]);

   

    return (
        <div>
        
        <h1 className=" text-center text-xl bg-black  text-white p-2 font-semibold">Total Application: {allstudents.length} </h1>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className=" text-xl">
                    <tr>
                        <th>No</th>
                        <th>Stu_ID</th>
                        <th>
                            <div className="flex gap-4">
                                Students ID
                            </div>
                        </th>
                        <th>
                            <div className="flex gap-4 ">
                                Room_choice
                            </div>
                        </th>
                        <th>Previous Room</th>
                        <th>Allocated Room</th>
                        <th> Date</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        allstudents.map((token, index) => <AllotementProfile

                            key={token._id}
                            token={token}
                            //handleBookingConfirm={handleBookingConfirm}
                            //handleDelete={handleDelete}
                            index={index + 1}
                        ></AllotementProfile>)

                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllotementProfils;