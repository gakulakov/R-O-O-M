import React from 'react'
import './Products.scss'
import {ProductCard} from "../../templates/ProductCard/ProductCard";

export const Products = () => {
    return(
        <div className={'products'}>
            <ProductCard value={'Phone Booth'} imgUrl={'../../assets/images/card-photos/phone-booth.png'} />
            <ProductCard value={'Focus Room'} imgUrl={'../../assets/images/card-photos/focus-room.png'} />
            <ProductCard value={'Meeting Room'} imgUrl={'../../assets/images/card-photos/meeting-room.png'} />
            <ProductCard value={'Open Meeting Room'} imgUrl={'../../assets/images/card-photos/open-meetingroom.png'} />
        </div>
    )
}