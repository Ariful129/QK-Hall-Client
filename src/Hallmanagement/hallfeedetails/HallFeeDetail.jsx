import { FaChevronCircleRight } from "react-icons/fa";

const HallFeeDetail = ({ token,handleDelete }) => {
    const {_id, status,id,email ,lavel,term,  month_start, month_end, Transaction_id, bkash_number } = token;
    return (
        <>
        <tr>
            <td><FaChevronCircleRight /></td>
            <td>{id}</td>
            <td>L-{lavel}, T-{term}</td>
            <td>{month_start}</td>
            <td>{month_end}</td>
            <td>{Transaction_id}</td>
            <td>{bkash_number}</td>
            <td>{email}</td>
            <td>
                {
                    status === 'confirm' ? <span className="font-bold border-2 p-2 px-6 bg-green-600  text-white">Approved</span>
                        : <button  className="btn w-full text-xm border-2 bg-black text-white ">Pending</button>
                }
            </td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-info">Clear</button></td>
            

        </tr>
    </>
    );
};

export default HallFeeDetail;