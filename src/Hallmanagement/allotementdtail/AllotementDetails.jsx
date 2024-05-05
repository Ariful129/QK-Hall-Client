import { useEffect, useState } from "react";
import AllotementDetail from "./AllotementDetail";
import Swal from 'sweetalert2'

const AllotementDetails = () => {
    const [allstudents, setAllstudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);
    //From Custom Hook
    // const auth = UseAuth();
    // const { user } = auth;

    const url = `https://qk-hall-server.vercel.app/roomallotement`;
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

   
    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`https://qk-hall-server.vercel.app/roomallotement/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Services has been deleted.',
                                'success'
                              )
                            //alert('deleted successful');
                            const remaining = allstudents.filter(booking => booking._id !== id);
                            setAllstudents(remaining);

                        }
                    })   
             
            }
        })
        
    }







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
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredStudents.map((token, index) => <AllotementDetail

                                key={token._id}
                                token={token}
                                //handleBookingConfirm={handleBookingConfirm}
                                handleDelete={handleDelete}
                                index={index + 1}
                            ></AllotementDetail>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllotementDetails;