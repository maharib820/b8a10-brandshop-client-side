import { useLoaderData } from "react-router-dom";


const Details = () => {

    const data = useLoaderData()[0];
    console.log(data);

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
                <p className="font-bold">{data.description}</p>
                <button className="btn bg-red-600 text-white">Add Cart</button>
            </div>
        </div>
    );
};

export default Details;