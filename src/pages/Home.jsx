import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import BrandCart from '../components/BrandCart';

const Home = () => {

    const brands = useLoaderData();
    // console.log(brands);

    return (
        <div>
            <div className='w-full md:w-10/12 mx-auto h-56 md:h-[350px] lg:h-[600px] xl:h-[720px] flex justify-center items-center bg-[#F4F4F4] my-14'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='h-full flex items-center justify-center'><div className=''>Slide 1</div></div></SwiperSlide>
                    <SwiperSlide><div className='h-full flex items-center justify-center'><div className=''>Slide 1</div></div></SwiperSlide>
                    <SwiperSlide><div className='h-full flex items-center justify-center'><div className=''>Slide 1</div></div></SwiperSlide>
                    <SwiperSlide><div className='h-full flex items-center justify-center'><div className=''>Slide 1</div></div></SwiperSlide>
                    <SwiperSlide><div className='h-full flex items-center justify-center'><div className=''>Slide 1</div></div></SwiperSlide>
                    <SwiperSlide><div className='h-full flex items-center justify-center'><div className=''>Slide 1</div></div></SwiperSlide>
                </Swiper>
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