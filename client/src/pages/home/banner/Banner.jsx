import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Container from "../../../components/Container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  const content = (
    <>
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/3 overlay flex flex-col justify-center items-start text-white text-lg md:text-2xl">
        <Container>
          <div className="w-2/3 space-y-1 lg:space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.3,
                delay: 0.5,
              }}
            >
              <p className="subHeading font-semibold uppercase text-lg md:text-xl lg:text-2xl tracking-wider">
                effective visa solution
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.3,

                delay: 0.5,
              }}
            >
              <h1 className="heading font-bold uppercase text-xl md:text-2xl lg:text-4xl xl:text-6xl tracking-wider">
                visa & immigration consultation
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.3,

                delay: 0.5,
              }}
            >
              <p className="lg:text-xl">
                our professionalism, honesty, sincerity & dedication to client
                service has helped our clients to fulfill their wishes
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.3,

                delay: 0.5,
              }}
            >
              <button className="btn_one">
                <Link to="/check">Visa Check</Link>
              </button>
            </motion.div>
          </div>
        </Container>
      </div>
    </>
  );
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="banner_image w-full h-[100vh] object-cover -z-10 relative"
            src="https://i.ibb.co.com/QrcyrF5/visa-one.jpg"
          />
          {content}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="banner_image w-full h-[100vh] object-cover -z-10 relative"
            src="https://i.ibb.co.com/mDN1zsL/visa-two.jpg"
          />
          {content}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Banner;
