
import { FaChevronCircleRight } from "react-icons/fa";



const Student = ({ student }) => {
    const { name, email, id } = student;

  
    

    return (
        <>
            <tr>
                 
                <td><FaChevronCircleRight /></td>
                <td>{name}</td>
                <td>{id}</td>
                <td>{email}</td>
            </tr>
        </>
    );
};



export default Student;
