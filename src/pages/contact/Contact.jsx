


const Contact = () => {
    return (
        <div>
            <h1 className=" text-center text-2xl  font-bold  mt-4 mb-4">Contact Us</h1>
            <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 m-4">
                <div className="card  bg-slate-100 shadow-2xl border-2">
                    <div className="card-body">
                        <h2 className="card-title">Pro. Tareq Hossian</h2>
                        <p> Assistant Provost</p>
                        <p>+0190877*34454</p>
                        <p>tareq@gmail.com</p>  
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-2xl border-2">
                    <div className="card-body">
                        <h2 className="card-title">Rakib Hossian</h2>
                        <p> Care Taker</p>
                        <p>+0190877*23454</p>
                        <p>rakib@gmail.com</p>  
                    </div>
                </div>
                <div className="card bg-slate-100 shadow-2xl border-2">
                    <div className="card-body">
                        <h2 className="card-title">Pro. Arafat Rana</h2>
                        <p> Hall Provost</p>
                        <p>+0190877234*54</p>
                        <p>rana@gmail.com</p>  
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-2xl border-2">
                    <div className="card-body">
                        <h2 className="card-title">Nafiul Hamim</h2>
                        <p> Electrician</p>
                        <p>+0190877*34554</p>
                        <p>hamim@gmail.com</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;