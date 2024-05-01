


const Complain = ({ token,handleDelete }) => {
    const {_id, id, name, email, complains } = token;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body text-xm font-semibold">
                    <h1>ID: <span>{id}</span></h1>
                    <h1>Name: <span>{name}</span></h1>
                    <h1>Email: <span>{email}</span></h1>
                    <div>
                        <p><span className="text-xl  text-red-700">Complain: </span>{complains}</p>
                    </div>
                    <div>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complain;