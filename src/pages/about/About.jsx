
import img1 from '../../assets/ban2.jpg';

const About = () => {
    return (
        <div className='relative flex lg:flex-row h-[650px] lg:h-[500px] gap-10 border-2 p-1'>
            <div className='absolute inset-0 w-full h-full bg-black bg-opacity-70'>
            </div>
            <div className='relative z-8 w-1/2  mt-12 ml-2'>
                <h1 className=' font-semibold lg:text-2xl text-white'>About</h1>
                <p className='lg:text-xl font-thin text-white'>
                    Dr. QK Hall, situated within the campus of Chittagong University of Engineering and Technology (CUET),
                    stands as a symbol of academic excellence and community spirit
                    . Named in honor of Dr. Qudrat-e khuda , it serves as a
                    residence for students, fostering a vibrant environment for learning and personal growth.</p>

                <h1 className='font-semibold lg:text-2xl mt-8 text-white'>Provost Message</h1>
                <p className='lg:text-xl font-thin text-white'>In Dr. QK Hall, we uphold values of excellence and community.
                    Together, we cultivate an environment where academic pursuit meets
                    personal growth. Lets inspire, innovate, and create a brighter
                    future for CUET and beyond. Welcome to our vibrant community!</p>

                <h1 className='lg:text-2xl  font-serif font-semibold mt-4 text-white'>Provost: Prof Dr. Arafat Rana</h1>

            </div>
            <div className='w-1/2'>
                <img className='h-full lg:h-[487px] w-full' src={img1} alt="" />
            </div>
        </div>
    );
};

export default About;
