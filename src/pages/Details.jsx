import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {

    const data = useLoaderData()[0];
    const { user } = useContext(AuthContext);

    const notify = () => toast("Product add on cart", {position: toast.POSITION.TOP_CENTER});

    const handleCart = () => {
        console.log(user.email);
        const email = user.email;
        const cart = data.product;
        const photo = data.photo;
        const price = data.price;
        const type = data.type;
        const brand = data.brand;
        const rating = data.rating;
        const description = data.description;

        const iCart = { email, cart, photo, price, type, brand, rating, description };
        console.log(iCart);
        fetch("https://randf-server.vercel.app/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(iCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    notify();
                }
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
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;