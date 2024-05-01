import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import img3 from '../../assets/ban2.jpg'
import Swal from 'sweetalert2'

const Complain = () => {

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


    const handleComplain = event => {

        event.preventDefault();
        const form = event.target;
        const complains = form.complains.value;
       
        const Complains = {
            name: findUser.name,
            email: findUser.email,
            id: findUser.id,
            complains,
           

        }
        console.log(Complains)

        fetch('http://localhost:5000/complains', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Complains)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                       //alert('Your Complains submitted')
                     //SweetAlert
                     Swal.fire({
                        title: 'Success!',
                        text: 'Your Complains Successfully submitted',
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
            <div className=" lg:h-[650px] border-2 shadow-2xl p-8 m-2 w-3/4 mx-auto grid lg:grid-cols-2  gap-12">
                <div >
                    <img className='h-full' src={img3} alt="" />
                </div>

                <form onSubmit={handleComplain}>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold  text-center  text-2xl'>Complains</h1> <hr></hr>
                        <h1 className=' font-semibold text-xl'> Name: <span> {findUser.name}</span></h1>
                        <h1 className=' font-semibold text-xl'> Email: <span> {findUser.email}</span></h1>
                        <h1 className=' font-semibold text-xl'> Student ID: <span> {findUser.id}</span></h1>


                        <h1 className=' '>
                            <div className="form-control ">
                                <label className='font-semibold text-xl mb-2'>Your message:</label>
                                <textarea name='complains' placeholder="write your complains..." className="textarea textarea-bordered h-40" required></textarea>
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

export default Complain;