import React from "react";
import './Principles.scss'

export const Principles = () => {
    return (
        <div className={'principles'}>
            <div className={'principles__text'}>
                <p>Our simple and seamless modular products allow teams to shape and then reshape their work environment
                    with ease.</p>
                <p>GET IN TOUCH</p>
            </div>
            <div className={'principles__bot'}>
                <div className={'principles__card'}>
                    <img src="../../assets/images/principles/case.png" alt="case"/>
                    <div className={'principles__card-text'}>
                        <p>Cost-effective</p>
                        <p>At a fraction of the cost of traditional construction, our pre-fab solutions create
                            additional
                            space for focused work and collaboration without constant noise, debris and distraction.</p>
                    </div>
                </div>
                <div className={'principles__card'}>
                    <img src="../../assets/images/principles/time.png" alt="case"/>
                    <div className={'principles__card-text'}>
                        <p>Time Saving</p>
                        <p>Thoughtful design ensures simple installation in a few hours or less. And, because our
                            products are safety ensured, you'll never have to spend time or money chasing after permits,
                            contractors, and more.</p>
                    </div>
                </div>
                <div className={'principles__card'}>
                    <img src="../../assets/images/principles/arrows.png" alt="case"/>
                    <div className={'principles__card-text'}>
                        <p>Flexible</p>
                        <p>Unlike traditional construction, our purpose-built products were designed to adapt with your
                            workspace and can easily be positioned in various places throughout your office, or to an
                            entirely new location.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}