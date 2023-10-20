import { useLoaderData } from 'react-router-dom';
import BrandCart from '../components/BrandCart';

const Home = () => {

    const brands = useLoaderData();
    // console.log(brands);

    return (
        <div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center bg-[#F4F4F4] h-[600px] lg:h-[500px] mt-1 lg:mt-10'>
                <div className='flex-1 text-center'>
                    <h2 className='text-xl lg:text-3xl font-bold mt-8 lg:mt-0'>Get all branded <span className='text-[#e50010]'>Clothing and Accesories</span> in one place</h2>
                    <p className='my-6'>Welcome to R&F, where you will discover the epitome of style, elegance, and individuality. Unleash your inner fashionista with a curated collection of exquisite apparel, accessories, and footwear for every occasion, from casual comfort to red-carpet glamour.</p>
                    <button className='btn bg-[#e50010] text-white'>Explore</button>
                </div>
                <div className='flex justify-center lg:justify-end mr-10 flex-1 h-auto'>
                    <img className='w-3/4' src="https://i.ibb.co/cFjBkhs/pngwing-com-2.png" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-20 xl:px-72 gap-6 py-10'>
                {
                    brands.map(brand => <BrandCart key={brand.id} brand={brand}></BrandCart>)
                }
            </div>
        </div>
    );
};

export default Home;