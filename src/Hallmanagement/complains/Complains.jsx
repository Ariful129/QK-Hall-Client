import { useEffect, useState } from "react";
import Complain from "./Complain";


const Complains = () => {

    const [allstudents, setAllstudents] = useState([]);

    // const auth = UseAuth();
    // const { user } = auth;

    const url = `http://localhost:5000/complains`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllstudents(data)

            });

        // axiosSecure.get(url)
        // .then(res => setBookings(res.data))

    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/complains/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = allstudents.filter(booking => booking._id !== id);
                        setAllstudents(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h1 className=" text-center text-xl bg-black  text-white p-2 font-semibold">Total Complains: {allstudents.length} </h1>
            <div className="grid grid-cols-3 gap-4 ">
                {
                   allstudents.map((token, index) => <Complain

                        key={token._id}
                        token={token}
                        handleDelete={handleDelete}
                        index={index + 1}
                    ></Complain>)

                }
            </div>
        </div>
    );
};

export default Complains;