import React from "react";
import './Header.scss'
import {Logo} from "../../templates/Logo/Logo";

export const Header = () => {
    return (
        <div className={'header-container'} id={'header'}>
            <div className={'topper'}>
                <p>Contact Sales</p>
                <p>TEL 646-791-3726</p>
                <p>US</p>
            </div>
            {/* HEADER */}
            <div className={'header'}>
                <div className={'header__left'}>
                    <Logo/>
                    <div className={'header__links'}>
                        <p>Products</p>
                        <p>Explore</p>
                        <p>Shop</p>
                    </div>
                </div>
                <div className={'header__right'}>
                    <div className={'header__cart'}>
                        <img src="../../assets/images/location.svg" alt="cart"/>
                        <p>Showrooms</p>
                    </div>
                    <img src="../../assets/images/cart.svg" alt=""/>
                </div>

            </div>
        </div>
    )
}