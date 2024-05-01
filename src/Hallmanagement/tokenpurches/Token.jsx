

import { FaChevronCircleRight } from "react-icons/fa";

const Token = ({ token,handleBookingConfirm,handleDelete }) => {
    const {_id, status,id,email ,package1, amount, Transaction_id, bkash_number, Start_date, End_date } = token;

    return (
        <>
            <tr>
                <td><FaChevronCircleRight /></td>
                <td>{id}</td>
                <td>{package1}</td>
                <td>{amount}</td>
                <td>{Transaction_id}</td>
                <td>{bkash_number}</td>
                <td>{email}</td>
                {/* <td>{Start_date} <span className=" text-red-500">to </span> {End_date}</td> */}
                <td>{Start_date}</td>
                <td>{End_date}</td>
                <td>
                    {
                        status === 'confirm' ? <span className="font-bold border-2 p-2 px-6 bg-green-600  text-white">Approved</span>
                            : <button onClick={() => handleBookingConfirm(_id)} className="btn w-full text-xm border-2 bg-black text-white ">Pending</button>
                    }
                </td>
                
                <td><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-info">Clear</button></td>

               
                

            </tr>
        </>
    );
};



export default Token;
