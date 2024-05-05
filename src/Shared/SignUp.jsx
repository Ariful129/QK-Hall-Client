import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
   
    const { createUser, logOut } = useContext(AuthContext)

    // Error show
    const [regerror, setRegerror] = useState('')
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const id=form.id.value;
        const password = form.password.value;
        console.log(name, email, id, password)

    
        //resetError
         setRegerror('');

        if (password.length < 6) {
            setRegerror('Password should at least 6')
            return;
        }
        //password uppercase check->Regular Expression
        if (!/[A-Z]/.test(password)) {
            setRegerror('password should have at least one uppercase')
            return;
        }
        // Regular expression pattern for email matching @student.cuet.ac.bd
        if (!/@student\.cuet\.ac\.bd$/.test(email)) {
            setRegerror('You must use CUET student email.')
            return;
            
        }

        //Special cha
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setRegerror('password should have at least one Special Character')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
                //toast.success("User created successfully");
                //alert('User created successfully')

                //Update Profile
                updateProfile(result.user, {
                    displayName: name,

                })
                    .then(() => { console.log('Profile Update successfully')})
                    .catch(error => console.error(error))
                //go to home page
               // navigate('/')
 

            // Hit the API only if no Firebase error occurred
            const userData = { name, email, id };
            hitAPI(userData);
            // go to Login page
            hitlogout();

            })
            .catch(error => {
                console.log(error);
                if (error.code === 'auth/email-already-in-use') {
                    setRegerror('Email is already in use.');
                } else {
                    setRegerror(error.message);
                }
            })

    }

    const hitlogout=()=>{

        logOut()
        .then(res => {
            console.log('Logout Successful', res)
            navigate('/login');
        })
        .catch(error => {
            console.error(error);
        })

    };

    const hitAPI = (userData) => {
        fetch('https://qk-hall-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                toast.success("User created successfully");
            }
        })
        .catch(error => console.error('Error hitting API:', error));
    };




    return (
        <div className=" lg:h-[600px] bg-black rounded-xl">
        <div className="  flex justify-center p-8 ">
           
        <div className="card flex-shrink-0 h-[520px] w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold mb-2">Sign Up</h1>
                    <form onSubmit={handleSignUp} className=" space-y-2">
                        <div className="form-control">
                          
                          
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        
                        
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                       
                       
                            <input type="text" name='id' placeholder="student_id" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                      
                      
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>

                    {
                        regerror && <p className="text-xm text-red-700 text-center font-semibold">{regerror}</p>
                    }

                </div>
        </div>

        </div>
    </div>
    );
};

export default SignUp;