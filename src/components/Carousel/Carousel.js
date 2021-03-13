import React from "react";
import './Carousel.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.css";


SwiperCore.use([Navigation, Pagination])


export const Carousel = () => {
    const mock = [
        {id: 1, imgUrl: '../../assets/images/carousel/1.png'},
        {id: 2, imgUrl: '../../assets/images/carousel/2.png'},
        {id: 3, imgUrl: '../../assets/images/carousel/3.png'},
        {id: 4, imgUrl: '../../assets/images/carousel/4.png'},
        {id: 5, imgUrl: '../../assets/images/carousel/5.png'},
    ]

    const generateSlides = mock.map(i => {
        return (
            <SwiperSlide key={i.id} tag={'div'}>
                <img src={i.imgUrl} alt={i.id}/>
            </SwiperSlide>
        )
    })
    return (
        <div className={'carousel'}>
            <Swiper
                navigation
                pagination
                tag={'section'}
                slidesPerView={1}
                // spaceBetween={25}
                id={'main'}
            >
                {generateSlides}
            </Swiper>
        </div>
    )
}