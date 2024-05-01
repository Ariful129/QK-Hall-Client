import { useContext } from 'react';
import img3 from '../../assets/ban2.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const TokenPueches = () => {
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
        const Start_date = form.Start_date.value;
        const End_date = form.End_date.value;
        const Transaction_id = form.Transaction_id.value;
        const bkash_number = form.bkash_number.value;
        const package1 = form.package1.value; 
        const amount = form.amount.value; 
        //const password = form.password.value;
        console.log(Start_date, End_date, Transaction_id, package1, amount,bkash_number)
       
        const TokenApplication={
            name: findUser.name,
            email: findUser.email,
            id: findUser.id,
            Start_date,
            End_date,
            package1,
            amount,
            Transaction_id,
            bkash_number

        }
        console.log(TokenApplication)

        fetch('http://localhost:5000/tokenpurches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(TokenApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                       //alert('Your token will be sent to your email within the next 24 hours.')
                    //SweetAlert
                     Swal.fire({
                        title: 'Success!',
                        text: 'Token Purchase Successfully Completed',
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

            <div className=" lg:h-[700px] border-2 shadow-2xl p-8 m-2 w-3/4 mx-auto grid lg:grid-cols-2  gap-12">
                <div >
                    <img className='h-full' src={img3} alt="" />
                </div>

                <form onSubmit={handleTokenPurches}>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold  text-center  text-2xl'>Token Purches</h1> <hr></hr>
                        <h1 className=' font-semibold text-xl'> Name: <span> {findUser.name}</span></h1>
                        <h1 className=' font-semibold text-xl'> Email: <span> {findUser.email}</span></h1>
                        <h1 className=' font-semibold text-xl'> Student ID: <span> {findUser.id}</span></h1>
                        <h1 className=' font-semibold text-xl'>
                            <div className="form-control flex  flex-row items-center">
                                <label>Token Started: </label>
                                <input type="date" name="Start_date" placeholder="email" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className=' font-semibold text-xl'>
                            <div className="form-control flex  flex-row items-center">
                                <label>Token End: </label>
                                <input type="date" name="End_date" placeholder="email" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className=''>
                            <select name="package1" className="select select-info w-full max-w-xs">
                                <option disabled defaultValue>Select Package</option>
                                <option value="30">30 days</option>
                                <option value="15">15 days</option>
                            </select>
                        </h1>
                        <h1 className=''>
                            <select name="amount" className="select select-info w-full max-w-xs">
                                <option disabled defaultValue>Select Amount</option>
                                <option value="2500">2500</option>
                                <option value="1300">1300</option>
                            </select>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control">

                                <label className=' font-semibold text-xl' >Transaction ID:</label>
                                <input type="text" name='Transaction_id' placeholder="Transaction ID" className="input input-bordered" required />
                            </div>
                        </h1>
                        <h1 className='lg:w-2/3'>
                            <div className="form-control">

                                <label className=' font-semibold text-xl' >Bkash Nunber:</label>
                                <input type="text" name='bkash_number' placeholder="bkash_numbe" className="input input-bordered" required />
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

export default TokenPueches;