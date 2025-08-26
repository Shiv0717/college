"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const PlacementPartners = () => {
  const partners = [
    { id: 1, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_logo.svg" },
    { id: 3, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 4, logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 5, logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Tata_logo.svg" },
    { id: 6, logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Infosys_logo.svg" },
    { id: 7, logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/IBM_logo.svg" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Our Placement Partners
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000} // smooth speed
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`Partner ${partner.id}`}
                  className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PlacementPartners;
