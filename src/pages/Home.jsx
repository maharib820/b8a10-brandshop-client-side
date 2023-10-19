import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Home = () => {
    return (
        <div>
            <div className='w-8/12 mx-auto h-[720px] flex justify-center items-center bg-[#F4F4F4] my-14'>
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
        </div>
    );
};

export default Home;