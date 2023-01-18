import SwiperCore, {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

SwiperCore.use([Navigation]);

const Slider3 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next",
                }}
                className="custom-class"
            >

                <SwiperSlide>
                    <img className="rounded" src="/assets/imgs/demo-screenshots/2.png" alt="Monst"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="rounded" src="/assets/imgs/demo-screenshots/1.png" alt="Monst"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="rounded" src="/assets/imgs/demo-screenshots/3.png" alt="Monst"/>
                </SwiperSlide>
            </Swiper>

            {/* <div className="custom-nav">
                <button type="button" className="custom_prev">
                    Prev
                </button>
                <button type="button" className="custom_next">
                    Next
                </button>
            </div> */}
        </>
    );
};

export default Slider3;