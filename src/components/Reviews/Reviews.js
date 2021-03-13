import React from "react";
import './Reviews.scss'

export const Reviews = () => {
    return (
        <div className={'reviews'}>
            <div className={'reviews__comment-block'}>
                <div className={'reviews__comment'}>
                    <img src="../../assets/images/stars.svg" alt=""/>
                    <p>“We can now have meetings in peace.”</p>
                    <img src="../../assets/images/google.png" alt=""/>
                </div>
                <div className={'reviews__comment'}>
                    <img src="../../assets/images/stars.svg" alt=""/>
                    <p>“We can now have meetings in peace.”</p>
                    <img src="../../assets/images/wayfair.png" alt=""/>
                </div>
                <div className={'reviews__comment'}>
                    <img src="../../assets/images/stars.svg" alt=""/>
                    <p>“We can now have meetings in peace.”</p>
                    <img src="../../assets/images/flexport.png" alt=""/>
                </div>
                <div className={'reviews__more'}>
                    <p>READ MORE REVIEWS</p>
                </div>
            </div>
        </div>
    )
}