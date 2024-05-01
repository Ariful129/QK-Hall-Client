import  { useRef } from 'react';
import image from '../../assets/illustration-light.svg'
import { FaHandsClapping} from "react-icons/fa6";
//import { CiLocationArrow1 } from 'react-icons/ci';
import { MdEmail, MdHome, MdPhone } from "react-icons/md";
import emailjs from '@emailjs/browser';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContacEmail = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tw35xth', 'template_xzx0kf4', form.current, {
        publicKey: 'r3QdzaMTQud23qFfJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Successfully Submitted");
           // Reset the form after successful submission
        form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
         <div className=' md:space-y-36 m-16'>

      <div className='flex md:flex-row md:items-center md:gap-80 mt-10'>

        <div className='text-left space-y-4'>
          <div className='flex flex-row items-center'>
            <hr className='text-red-500'></hr>
            <div className='flex flex-row gap-2 items-center'>
              <div className='w-8 h-[2px] bg-red-500'></div>
              <p className='text-red-500 font-semibold'> Say hello</p>
              <FaHandsClapping className='text-red-500'></FaHandsClapping>
            </div>
          </div>
          <div>
            <h1 className='text-6xl font-bold mb-4'>Lets Work <br></br>Together.</h1>
            <p>Reach out today and lets turn your ideas into reality - your message matters to us.</p>
          </div>
        </div>

        <div>
          <img src={image} alt="" />
        </div>

      </div>



      <div className='flex md:flex-row gap-4md:items-start '>
        <div className='space-y-8 w-3/6  md:text-left'>
          <div className='flex flex-row items-center'>
            <MdEmail className='mr-4' color='red'></MdEmail>
            <p className='font-normal'>arif.cuet129@gmail.com</p>
          </div>
          <div className='items-center flex flex-row'>
            <MdHome className='mr-4' color='red'></MdHome>
            <p className='font-normal'>Dhaka, Bangladesh</p>
          </div>
          <div className='items-center flex flex-row'>
            <MdPhone className='mr-4' color='red'></MdPhone>
            <p className='font-normal'>+8801908779743</p>
          </div>

        </div>


        <div className='w-3/6  '>
          <div className="">

            <form ref={form} onSubmit={sendEmail} className="card-body  pt-0 space-y-4">
              <input type="text" name="from_name" placeholder="name" className=" rounded-full input input-bordered" required/>
              <input type="email" name="user_email" placeholder="email " className="rounded-full input input-bordered" required />
              <textarea name="message" placeholder="Type Your Message here" className="h-40 rounded-xl input input-bordered" required/>
              <input type="submit" value="Send" className="btn rounded-full px-8 bg-[#F5650C] text-white font-semibold"/>
            </form>

          </div>
        </div>


      </div>



    </div>
    );
};

export default ContacEmail;