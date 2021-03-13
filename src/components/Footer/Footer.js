import React from "react";
import './Footer.scss'

export const Footer = () => {
    return (
        <div className={'footer-container'}>
            <div className={'footer'}>
                <img src="../../assets/images/whiteLogo.png" alt="logo"/>
                <div className={'footer__more-info'}>
                    <div className={'footer__list'}>
                        <p>About</p>
                        <ul>
                            <li>Compare</li>
                            <li>Reviews</li>
                            <li>Risk-Free Trial</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Podcast</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className={'footer__list'}>
                        <p>Support</p>
                        <ul>
                            <li>FAQ</li>
                            <li>Booth Assembly</li>
                            <li>Delivery</li>
                            <li>Room Service</li>
                            <li>Warranty</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Copyright</li>
                        </ul>
                    </div>
                    <div className={'footer__list'}>
                        <p>Showrooms</p>
                        <ul>
                            <li>New York</li>
                            <li>London</li>
                            <li>San Francisco</li>
                            <li>Paris</li>
                            <li>Copenhagen</li>
                            <li>Zürich</li>
                            <li>Los Angeles</li>
                            <li>Berlin</li>
                            <li>Belgium</li>
                            <li>Virtual Demo</li>
                        </ul>
                    </div>
                    <div className={'footer__list'}>
                        <p>Office</p>
                        <ul>
                            <li>599 Broadway, FL 9 New York, NY 10012</li>
                        </ul>
                    </div>
                </div>
                <div className={'footer__socials'}>
                    <p>Follow us</p>
                    <div className={'footer__logos'}>
                        <img src="../../assets/images/socials/1.png" alt="1"/>
                        <img src="../../assets/images/socials/2.png" alt="2"/>
                        <img src="../../assets/images/socials/3.png" alt="3"/>
                        <img src="../../assets/images/socials/4.png" alt="4"/>
                    </div>
                </div>
                <div className={'footer__subscribe'}>
                    <p>Join our mailing list</p>
                    <p>Be the first to hear everything about ROOM.</p>
                    <textarea/>
                    <p>United States</p>
                    <div className={'footer__success'}>
                        <i></i>
                        <p> Yes. I would like to receive marketing communications from ROOM about product updates and
                            special offers. Please refer to ROOM’s Privacy Policy for more information about how we
                            process your data (including how to unsubscribe). </p>
                    </div>
                    <p className={'footer__sign-up'}>Sign Up</p>
                </div>
            </div>
            <a href={'#'} className={'footer-container__to-top'}>Return to the top</a>
        </div>
    )
}