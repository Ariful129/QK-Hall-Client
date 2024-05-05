import { useEffect, useState } from "react";
import TokenDetail from "./TokenDetail";


const TokenDetails = () => {

    const [allstudents, setAllstudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);
    //From Custom Hook
    // const auth = UseAuth();
    // const { user } = auth;

    const url = `https://qk-hall-server.vercel.app/tokenpurches`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // Filter data where status is 'confirm'
                const confirmedStudents = data.filter(student => student.status === 'confirm');
                setAllstudents(confirmedStudents);
                setFilteredStudents(confirmedStudents);
            });

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url]);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filtered = allstudents.filter(student => student.id.includes(query));
        setFilteredStudents(filtered);
    };


    


    return (
        <div>

            <div className="w-1/4 m-1">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search by ID"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>

            </div>
            <h1 className=" text-center text-xl bg-black  text-white p-2 font-semibold">Total Applied Students: {filteredStudents.length} </h1>
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
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredStudents.map((token, index)=> <TokenDetail

                                key={token._id}
                                token={token}
                                //handleDelete={handleDelete}
                                index={index + 1}
                            ></TokenDetail>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TokenDetails;