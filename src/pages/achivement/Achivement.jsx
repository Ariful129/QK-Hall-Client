import img1 from '../../assets/ac1.jpg'
import img2 from '../../assets/ac2.jpg'
import img3 from '../../assets/ac3.jpg'

const Achivement = () => {
    return (
        <div className=''>
  <h1 className='text-center text-2xl  font-bold  mt-4 mb-4'>Achievements</h1>
  <div className='grid grid-cols-5 gap-4 p-4  ' style={{ maxHeight: '400px', overflowY: 'auto' }}>
    <img src={img1} alt="" className="h-full object-cover  rounded-xl" />
    <img src={img2} alt="" className="h-full object-cover rounded-xl" />
    <img src={img3} alt="" className="h-full object-cover rounded-xl" />
    <img src={img1} alt="" className="h-full object-cover  rounded-xl" />
    <img src={img2} alt="" className="h-full object-cover rounded-xl" />
    <img src={img3} alt="" className="h-full object-cover rounded-xl" />
    <img src={img1} alt="" className="h-full object-cover  rounded-xl" />
    <img src={img2} alt="" className="h-full object-cover rounded-xl" />
    <img src={img3} alt="" className="h-full object-cover rounded-xl" />
    <img src={img1} alt="" className="h-full object-cover  rounded-xl" />
    <img src={img2} alt="" className="h-full object-cover rounded-xl" />
    <img src={img3} alt="" className="h-full object-cover rounded-xl" />
    <img src={img1} alt="" className="h-full object-cover  rounded-xl" />
    <img src={img2} alt="" className="h-full object-cover rounded-xl" />
    <img src={img3} alt="" className="h-full object-cover rounded-xl" />
  </div>
</div>

      
    );
};

export default Achivement;