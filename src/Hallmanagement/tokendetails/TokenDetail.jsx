
import { FaChevronCircleRight } from "react-icons/fa";

const TokenDetail = ({ token }) => {
    const {status,id,email ,package1, amount, Transaction_id, bkash_number } = token;
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
                <td>
                    {
                        status === 'confirm' ? <span className="font-bold border-2 p-2 px-6 bg-green-600  text-white">Approved</span>
                            : <button  className="btn w-full text-xm border-2 bg-black text-white ">Pending</button>
                    }
                </td>
                <td><button className="btn btn-outline btn-info">Upload Pdf</button></td>
                
                

            </tr>
        </>
    );
};

export default TokenDetail;