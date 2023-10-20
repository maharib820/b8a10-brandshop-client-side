import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const AddProduct = () => {

    const brands = useLoaderData();

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const product = form.product.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const newProduct = { brand, product, type, price, rating, photo, description }
        console.log(newProduct);

        fetch("http://localhost:5000/addnewproduct/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="flex justify-center">
            <div className="w-11/12 lg:w-3/4 bg-[#F4F4F4] mt-5 lg:mt-12 px-4 lg:px-10">
                <h2 className="text-center text-3xl font-bold mt-8 mb-5">Add New Product</h2>
                <form className="text-center" onSubmit={handleAddProduct}>

                    {/* row 1 */}
                    <div className="w-full mb-2">
                        <label className="label">
                            <span className="label-text font-bold">Brand Name</span>
                        </label>
                        <select name="brand" className="select select-bordered w-full">
                            {
                                brands.map(brand => <option key={brand.id}>{brand.brandName}</option>)
                            }
                        </select>
                    </div>

                    {/* row 2 */}
                    <div className="md:flex gap-4 mb-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="product" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* row 3 */}
                    <div className="md:flex gap-4 mb-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form row 4 */}
                    <div className="mb-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* row 4 */}
                    <div className="mb-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input className="btn btn-block bg-[#e50010] my-4 mb-10 text-white" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;