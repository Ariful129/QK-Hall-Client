import { useLoaderData } from 'react-router-dom';
import img3 from '../../assets/ban2.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'

const HallFee = () => {
    
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


    const handleHallFee = event => {

        event.preventDefault();
        const form = event.target;
        const Transaction_id = form.Transaction_id.value;
        const bkash_number = form.bkash_number.value;
        const month_start = form.month_start.value; 
        const month_end = form.month_end.value; 
        const lavel = form.lavel.value; 
        const term = form.term.value; 
        //const password = form.password.value;
        console.log( month_start, month_end, Transaction_id, bkash_number)
       
        const HallFee={
            name: findUser.name,
            email: findUser.email,
            id: findUser.id,
            month_start,
            month_end,
            Transaction_id,
            bkash_number,
            lavel,
            term


        }
        console.log(HallFee)

        fetch('https://qk-hall-server.vercel.app/hallfee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(HallFee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                      //alert('Your Hall Fee submitted')
                     //SweetAlert
                     Swal.fire({
                        title: 'Success!',
                        text: 'Hall Fee Successfully Submitted',
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
             <div className="  border-2 shadow-2xl p-8 m-2 w-3/4 mx-auto grid lg:grid-cols-2  gap-12">
                <div >
                    <img className='h-full' src={img3} alt="" />
                </div>

                <form onSubmit={handleHallFee}>
                    <div className=' space-y-3'>
                        <h1 className=' font-bold  text-center  text-2xl'>Hall Fee</h1> <hr></hr>
                        <h1 className=' font-semibold text-xl'> Name: <span> {findUser.name}</span></h1>
                        <h1 className=' font-semibold text-xl'> Email: <span> {findUser.email}</span></h1>
                        <h1 className=' font-semibold text-xl'> Student ID: <span> {findUser.id}</span></h1>
                        <h1 className=''>
                            <p className=' font-semibold text-xl'>Start month:</p>
                            <select name="month_start" className="select select-info w-full max-w-xs">
                                <option disabled defaultValue>Select Start Month</option>
                                <option value="january">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="june">june</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </h1>
                        <h1 className=''>
                            <p className=' font-semibold text-xl'>End month:</p>
                            <select name="month_end" className="select select-info w-full max-w-xs">
                                <option disabled defaultValue>Select Start Month</option>
                                <option value="january">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="june">june</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </h1>
                        <h1 className=''>
                            <p className=' font-semibold text-xl'>Lavel:</p>
                            <select name="lavel" className="select select-info w-full max-w-xs">
                                <option disabled defaultValue>Select your Lavel</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </h1>
                        <h1 className=''>
                            <p className=' font-semibold text-xl'>Term:</p>
                            <select name="term" className="select select-info w-full max-w-xs">
                                <option disabled defaultValue>Select your term</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            
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

export default HallFee;