import React from 'react'
import './ProductCard.scss'

export const ProductCard = ({imgUrl, value}) => {
    return(
        <div className={'product-card'}>
            <img src={imgUrl} alt="1"/>
            <p>{value}</p>
        </div>
    )
}