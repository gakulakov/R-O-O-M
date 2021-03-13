import React from 'react'
import './AboutUs.scss'


export const AboutUs = () => {
    return (
        <div className={'about-container'}>
            <img src="../../assets/images/1.png" alt="1"/>
            <div className={'about-container__info'}>
                <p>Design that inspires a better way to work.</p>
                <p>We've developed a series of purpose-built rooms that offer companies looking for change an
                    affordable, sustainable, and flexible alternative to fixed construction and traditional office
                    design.</p>
            </div>
        </div>
    )
}