const ProductsCart = ({ data }) => {

    const handleDetails = e => {
        console.log(e);
    }

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
                        <button onClick={() => handleDetails(data.product)} className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCart;