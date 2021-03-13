import React from "react";
import './WeDo.scss'

export const WeDo = () => {
    return (
        <div className={'we-do'}>
            <div className={'we-do__text'}>
                <p>We take a human approach to a business-to-business industry, breaking the boundaries between
                    corporate and personal, and rethinking every step of the user experience along the way.</p>
                <p>We make work, work for you.</p>
            </div>
            <div className={'wedo-info'}>
                <img src="../../assets/images/wedo/3.png" alt="1"/>
                <div className={'wedo-info__text'}>
                    <p>We sell direct.</p>
                    <p>We make extra room in the budget without compromising quality by selling direct. No middle man,
                        and no additional construction required.</p>
                </div>
            </div>
            <div className={'wedo-info'}>
                <div className={'wedo-info__text'}>
                    <p>We build with purpose.</p>
                    <p>We’re not just building another room with four walls, we’re building a more productive workspace.
                        We design with you in mind, looking at every detail as an opportunity to enable a better working
                        environment for everyone.</p>
                </div>
                <img src="../../assets/images/wedo/2.png" alt="1"/>
            </div>
            <div className={'wedo-info'}>
                <img src="../../assets/images/wedo/1.png" alt="1"/>
                <div className={'wedo-info__text'}>
                    <p>We design sustainably.</p>
                    <p>From design to delivery, we strive to lessen our impact on the environment. Our products are
                        engineered with recycled materials and replace multiple cycles of construction, minimizing noise
                        and our footprint.</p>
                </div>
            </div>
        </div>
    )
}