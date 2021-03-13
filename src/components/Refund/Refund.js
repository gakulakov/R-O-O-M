import React from "react";
import './Refund.scss'

export const Refund = () => {
    return (
        <div className={'refund'}>
            <p className={'refund__title'}>100 day risk-free trial</p>
            <div className={'refund__methods'}>
                <div className={'refund__items'}>
                    <img src='../../assets/images/methods/shipping.svg' alt="shipping"/>
                    <p>FREE SHIPPING</p>
                </div>
                <div className={'refund__items'}>
                    <img src='../../assets/images/methods/plug.svg' alt="plug"/>
                    <p>FREE SHIPPING</p>
                </div>
                <div className={'refund__items'}>
                    <img src='../../assets/images/methods/return.svg' alt="return"/>
                    <p>FREE SHIPPING</p>
                </div>
            </div>
            <div className={'refund__bot'}>
                <button className={'refund__button'}>GET A ROOM</button>
                <p>Terms & Conditions apply</p>
            </div>
        </div>
    )
}
