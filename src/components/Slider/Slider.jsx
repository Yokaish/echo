import React from 'react';  // Importando explicitamente o React
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import './Slider.css';

export function Slider({ settings, children }) {
    return (
        <Swiper 
            modules={[Navigation, Pagination, A11y]} 
            {...settings}
        >
            {children}
        </Swiper>
    );
}
