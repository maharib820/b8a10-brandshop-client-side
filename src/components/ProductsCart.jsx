import { Link, Navigate } from "react-router-dom";

const ProductsCart = ({ data }) => {

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <img src={data.photo} alt="data.product" className="rounded-xl h-[400px] max-w-[300px] mx-auto" />
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.brand}</h2>
                    <p>{data.product}</p>
                    <p>Type: {data.type}</p>
                    <p>Price ${data.price}</p>
                    <p>Rating {data.rating}</p>
                    <div className="card-actions">
                        <Link to={`/details/${data.product}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCart;