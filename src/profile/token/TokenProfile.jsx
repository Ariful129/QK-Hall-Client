import { FaChevronCircleRight } from "react-icons/fa";

const TokenProfile = ({ token }) => {
    const {status,id,email ,package1, amount, Transaction_id, bkash_number,Start_date ,End_date} = token;
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
                <td>{Start_date} to {End_date}</td>
                <td>
                    {
                        status === 'confirm' ? <button className="btn btn-outline btn-info">Download token</button>
                            : <button  className="btn w-full text-xm border-2  bg-red-600 text-white ">Pending</button>
                    }
                </td>
    
                

            </tr>
        </>
    );
};

export default TokenProfile;