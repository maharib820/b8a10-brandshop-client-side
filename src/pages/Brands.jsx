import { useLoaderData } from "react-router-dom";
import ProductsCart from "../components/ProductsCart";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Brands = () => {

    const datas = useLoaderData();

    return (
        <div>
            <div className="w-full lg:w-3/4 mx-auto mt-5">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://i.ibb.co/khC9tzf/cropped-1920-1080-1331511.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/cJ2h3Rw/cropped-1920-1080-194242.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/r06Hz3L/cropped-1920-1080-1019664.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            {
                datas.length > 0 ?
                    <div className="pt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-32 gap-6 bg-slate-500 pt-10 mt-10">
                            {
                                datas.map((data, index) => <ProductsCart key={index} data={data}></ProductsCart>)
                            }
                        </div>
                    </div>
                    :
                    <div className="flex justify-center mt-10">
                        <h2 className="text-2xl font-bold">Products not available</h2>
                    </div>
            }
        </div>
    );
};

export default Brands;