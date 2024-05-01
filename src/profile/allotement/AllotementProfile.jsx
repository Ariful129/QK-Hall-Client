import { FaChevronCircleRight } from "react-icons/fa";


const AllotementProfile = ({ token }) => {
    const { id, student_Id_1, student_Id_2, student_Id_3, student_Id_4,
        room_1, room_2, room_3, room_4, pre_room, SelectedRoom,status,apply_date } = token;
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

                <td className=" text-red-500 font-semibold">{SelectedRoom}</td>
                <td className=" font-semibold">{apply_date}</td>

                <td>    {
                    status === 'confirm' ? <span className="font-bold border-2 p-2 px-6 bg-green-600  text-white">Approved</span>
                        : <button className="btn w-full text-xm border-2 bg-red-600 text-white ">Pending</button>
                }</td>

            </tr>
        </>
    );
};

export default AllotementProfile;