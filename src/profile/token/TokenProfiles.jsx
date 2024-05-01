import { useContext, useEffect, useState } from "react";
import TokenProfile from "./TokenProfile";
import { AuthContext } from "../../provider/AuthProvider";


const TokenProfiles = () => {

    const [allstudents, setAllstudents] = useState([]);
    const { user } = useContext(AuthContext);
    //From Custom Hook
    // const auth = UseAuth();
    // const { user } = auth;

    const url = `http://localhost:5000/tokenpurches?email=${user?.email}`;
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

          
            <h1 className=" text-center text-xl bg-black  text-white p-2 font-semibold">Total Application: {allstudents.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className=" text-xl">
                        <tr>
                            <th>No</th>
                            <th>Stu_ID</th>
                            <th>Days</th>
                            <th>Amount</th>
                            <th>Tran_ID</th>
                            <th>bkash_no</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allstudents.map((token, index)=> <TokenProfile

                                key={token._id}
                                token={token}
                                //handleDelete={handleDelete}
                                index={index + 1}
                            ></TokenProfile>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TokenProfiles;