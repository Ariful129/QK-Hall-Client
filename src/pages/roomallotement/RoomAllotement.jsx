import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import img3 from '../../assets/ban2.jpg'
import Swal from 'sweetalert2'
 
const RoomAllotement = () => {

    const users = useLoaderData();
    console.log('Loaded->', users);

    const { user } = useContext(AuthContext);
    console.log('Auth_user', user);


    //Function to find user by email
    let findUser = null; // Initialize findUser variable outside the loop
    for (const eachUser of users) {
        if (eachUser.email === user.email) {
            findUser = eachUser; // Assign the found user to findUser variable
            break; // Exit the loop once a matching user is found
        }
    }
    console.log('Find', findUser); // Print the found user


    const handleTokenPurches = event => {

        event.preventDefault();
        const form = event.target;
        const student_Id_1 = form.student_Id_1.value;
        const student_Id_2 = form.student_Id_2.value;
        const student_Id_3 = form.student_Id_3.value;
        const student_Id_4 = form.student_Id_4.value;

        const room_1 = form.room_1.value;
        const room_2 = form.room_2.value;
        const room_3 = form.room_3.value;
        const room_4 = form.room_4.value;

        const pre_room = form.pre_room.value;
        const apply_date= form.apply_date.value;
   
        
       
        const RoomApplication={
            name: findUser.name,
            email: findUser.email,
            id: findUser.id,
            student_Id_1,
            student_Id_2,
            student_Id_3,
            student_Id_4,
            room_1,
            room_2,
            room_3,
            room_4,
            pre_room,
            apply_date
           

        }
        console.log(RoomApplication)

        fetch('https://qk-hall-server.vercel.app/roomallotement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(RoomApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                   // alert('Your Application Submitted')
                     //SweetAlert
                     Swal.fire({
                        title: 'Success!',
                        text: 'Your Application Successfully Submitted',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    // Reset the form after submission
                    form.reset();  
                    
                }
            })



    }



    return (
        <div>
               <div className="mt-4 border-2  text-xl  text-red-600  font-semibold">
                     <marquee >Room Allotement will be start from 3 May,2024</marquee>
               </div>

            <div className="  border-2 shadow-2xl p-8  w-3/4 mx-auto grid lg:grid-cols-2  gap-12">
                <div >
                    <img className='h-full' src={img3} alt="" />
                </div>

                <form onSubmit={handleTokenPurches}>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold  text-center  text-2xl'>Room Allotement Application</h1> <hr></hr>
                        <h1 className=' font-semibold text-xl'> Name: <span> {findUser.name}</span></h1>
                        <h1 className=' font-semibold text-xl'> Email: <span> {findUser.email}</span></h1>
                        <h1 className=' font-semibold text-xl'> Student ID: <span> {findUser.id}</span></h1>
                        <h1 className=' font-semibold text-xl'>
                            <div className="form-control flex  flex-row items-center">
                                <label>Today Date: </label>
                                <input type="date" name="apply_date" placeholder="email" className="input input-bordered" required />
                            </div>
                        </h1>
                        
                        <h1 className=' font-semibold text-xl'>Provide Student ID: </h1> <hr></hr>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >ID_1:</label>
                                <input type="text" name='student_Id_1' placeholder="student_Id_1" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >ID_2:</label>
                                <input type="text" name='student_Id_2' placeholder="student_Id_2" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >ID_3:</label>
                                <input type="text" name='student_Id_3' placeholder="student_Id_3" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >ID_4:</label>
                                <input type="text" name='student_Id_4' placeholder="student_Id_4" className="input input-bordered" required />
                            </div>
                        </h1>

                        <h1 className=' font-semibold text-xl'>Provide Room Number: </h1> <hr></hr>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >Room_1:</label>
                                <input type="text" name='room_1' placeholder="choice_Number_1" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >Room_2:</label>
                                <input type="text" name='room_2' placeholder="choice_Number_2" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >Room_3:</label>
                                <input type="text" name='room_3' placeholder="choice_Number_3" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control flex  flex-row  items-center">

                                <label className=' font-semibold text-xl mr-1' >Room_4:</label>
                                <input type="text" name='room_4' placeholder="choice_Number_4" className="input input-bordered" required />
                            </div>
                        </h1><hr></hr>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control ">

                                <label className=' font-semibold text-xl mr-1' >Previous Room Number:</label>
                                <input type="text" name='pre_room' placeholder="previous room number" className="input input-bordered" required />
                            </div>
                        </h1>

                        <h1>
                            <div className="form-control mt-4">
                                <input className="btn btn-primary" type="submit" value="submit" />
                            </div>
                        </h1>

                    </div>

                </form>


            </div>
        </div>
    );
};

export default RoomAllotement;