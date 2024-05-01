import { FaChevronCircleRight } from "react-icons/fa";

const HallFeeProfile = ({ token }) => {
    const { status,id,email , lavel,term, month_start, month_end, Transaction_id, bkash_number } = token;
    return (
        <>
        <tr>
            <td><FaChevronCircleRight /></td>
            <td>{id}</td>
            <td>L-{lavel}, T-{term}</td>
            <td>{ month_start}</td>
            <td>{ month_end}</td>
            <td>{Transaction_id}</td>
            <td>{bkash_number}</td>
            <td>{email}</td>
            <td>
                {
                    status === 'confirm' ? <span className="font-bold border-2 p-2 px-6 bg-green-600  text-white">Approved</span>
                        : <button className="btn w-full text-xm border-2  bg-red-600 text-white ">Pending</button>
                }
            </td>
           
            

        </tr>
    </>
    );
};

export default HallFeeProfile;