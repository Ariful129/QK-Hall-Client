import { FaChevronCircleRight } from "react-icons/fa";

const AllotementDetail = ({ token,handleDelete }) => {
    const { _id,  id,  student_Id_1, student_Id_2, student_Id_3, student_Id_4,
        room_1, room_2, room_3, room_4, pre_room ,SelectedRoom} = token;
    return (
        <>
        <tr>
            <td><FaChevronCircleRight /></td>
            <td>{id}</td>
            <td>
                <ol type="1">
                    {[student_Id_1, student_Id_2, student_Id_3, student_Id_4].map((studentId, index) => (
                        <li key={index + 1}>{index + 1}. {studentId}</li>
                    ))}
                </ol>
            </td>
            <td>
                <ol type="1">
                    {[room_1, room_2, room_3, room_4].map((studentId, index) => (
                        <li key={index + 1}>{index + 1}. {studentId}</li>
                    ))}
                </ol>
            </td>
            <td>{pre_room}</td>
            <td  className=" text-red-500 font-semibold">{SelectedRoom}</td>            
            
            <td> <span className="font-bold border-2 p-2 px-6 bg-green-600 text-white">Approved</span></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-info">Clear</button></td>
        </tr>
    </>
    );
};

export default AllotementDetail;