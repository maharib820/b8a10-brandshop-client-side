import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Details = () => {

    const data = useLoaderData()[0];
    const p = data.product;
    const { user } = useContext(AuthContext);

    const handleCart = () => {
        console.log(user.email);
        const email = user.email;
        const cart = data.product;
        const iCart = { email, cart };
        console.log(iCart);
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(iCart)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row mt-10">
            <div className="bg-slate-300 flex-1 p-10 flex justify-center items-center">
                <img src={data.photo} alt="" />
            </div>
            <div className="flex-1 mx-5 space-y-3">
                <h2 className="card-title text-2xl">{data.brand}</h2>
                <p className="font-bold">{data.product}</p>
                <p className="font-bold">Type: {data.type}</p>
                <p className="font-bold">Price ${data.price}</p>
                <p className="font-bold">Rating {data.rating}</p>
                <p className="font-bold">Description: {data.description}</p>
                <button onClick={handleCart} className="btn bg-red-600 text-white">Add Cart</button>
                <Link to={`/myupdate/${p}`}><button className="btn bg-red-600 text-white">Update</button></Link>
            </div>
        </div>
    );
};

export default Details;