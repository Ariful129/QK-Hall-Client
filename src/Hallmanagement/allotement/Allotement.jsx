import { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const Allotement = ({ token, handleBookingConfirm }) => {
    const { _id, status, id, email, student_Id_1, student_Id_2, student_Id_3, student_Id_4,
         room_1, room_2, room_3, room_4, pre_room } = token;
    const [SelectedRoom, setSelectedRoom] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Call handleBookingConfirm with _id and SelectedRoom
        handleBookingConfirm(_id, SelectedRoom);
        // Clear the input field after submission
        setSelectedRoom("");
    };

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
                <td>{email}</td>
                <td>
                    {status === 'confirm' ? (
                        <span className="font-bold border-2 p-2 px-6 bg-green-600 text-white">Approved</span>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={SelectedRoom}
                                onChange={(e) => setSelectedRoom(e.target.value)}
                                placeholder="Allocated room.."
                                className="border-2 rounded-xl p-2"
                                required
                            />
                            <button type="submit" className="btn w-2/3 text-xm border-2 bg-black text-white">Submit</button>
                        </form>
                    )}
                </td>
            </tr>
        </>
    );
};

export default Allotement;
