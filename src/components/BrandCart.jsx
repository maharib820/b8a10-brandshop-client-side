import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandCart = ({ brand }) => {

    return (
        <Link to={`/brands/${brand.brandName}`}>
            <div>
                <div className="relative">
                    <img className="rounded-xl" src={brand.brandImage} alt="" />
                    <div className="h-8 bg-black text-white absolute w-full bottom-5 flex justify-center items-center">
                        <h2 className="text-center">{brand.brandName}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BrandCart;

BrandCart.propTypes = {
    brand: PropTypes.object
}