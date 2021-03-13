import React from "react";
import './Brands.scss'

export const Brands = () => {
    const mock = [
        {id: 1, imgUrl: '../../assets/images/logos/1.png'},
        {id: 2, imgUrl: '../../assets/images/logos/2.png'},
        {id: 3, imgUrl: '../../assets/images/logos/3.png'},
        {id: 4, imgUrl: '../../assets/images/logos/4.png'},
        {id: 5, imgUrl: '../../assets/images/logos/5.png'},
        {id: 7, imgUrl: '../../assets/images/logos/7.png'},
        {id: 8, imgUrl: '../../assets/images/logos/8.png'},
        {id: 9, imgUrl: '../../assets/images/logos/9.png'},
        {id: 10, imgUrl: '../../assets/images/logos/10.png'},
        {id: 11, imgUrl: '../../assets/images/logos/11.png'},
        {id: 12, imgUrl: '../../assets/images/logos/12.png'},
        {id: 13, imgUrl: '../../assets/images/logos/13.png'},
        {id: 15, imgUrl: '../../assets/images/logos/15.png'},
        {id: 16, imgUrl: '../../assets/images/logos/16.png'},
        {id: 17, imgUrl: '../../assets/images/logos/17.png'},
        {id: 18, imgUrl: '../../assets/images/logos/18.png'},
        {id: 19, imgUrl: '../../assets/images/logos/19.png'},
        {id: 20, imgUrl: '../../assets/images/logos/20.png'},
    ]

    const brandsGenerate = mock.map(i => <div key={i.id} className={'brands__inner'}><img src={i.imgUrl} alt={i.id}/></div>)

    return(
        <div className={'brands'}>
            <div className="brands__text">
                <p>The world's leading brands choose ROOM.</p>
                <p>Over 3,000 and counting.</p>
            </div>
            <div className={'brands__logos'}>
                {brandsGenerate}
            </div>
        </div>
    )
}