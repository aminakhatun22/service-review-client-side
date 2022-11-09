import React from 'react';
import icon from '../../../assests/images/footer-gallery/fast-food.png';

import img1 from '../../../assests/images/footer-gallery/1 (1).jpg';
import img2 from '../../../assests/images/footer-gallery/2 (1).jpg';
import img3 from '../../../assests/images/footer-gallery/3 (1).jpg';
import img4 from '../../../assests/images/footer-gallery/4 (1).jpg';
import img5 from '../../../assests/images/footer-gallery/5.jpg';
import img6 from '../../../assests/images/footer-gallery/6.jpg';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
                <div>
                    {/* <img src="/src/assests/images/footer-gallery/fast-food.png" alt="" /> */}

                    <img className='object-scale-down h-48 w-96' src={icon} alt="" />
                    <p className='text-4xl text-orange-500'>Aahar<br />
                    </p>
                    <p>Providing reliable service since 2021</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <ul>
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Snacks</li>
                        <li>Quality Food</li>
                        <li>Fast Delivery</li>
                        <li>Well Beheave</li>
                        <li>Various Menu</li>
                    </ul>
                </div>
                <div >
                    <span className="footer-title ml-16">Gellary</span>
                    <div className='grid grid-cols-2 gap-2'>
                        <img src={img1} alt="" srcset="" />
                        <img src={img2} alt="" srcset="" />
                        <img src={img3} alt="" srcset="" />
                        <img src={img4} alt="" srcset="" />
                        <img src={img5} alt="" srcset="" />
                        <img src={img6} alt="" srcset="" />

                    </div>

                </div>
                <div>
                    <span className="footer-title ml-16">Legal</span>
                    <ul >
                        <li>Saturday.......9am to 11pm</li>
                        <li>Sunday.......9am to 11pm</li>
                        <li>Monday.......9am to 11pm</li>
                        <li>Tuesday.......9am to 11pm</li>
                        <li>Wednesday.......9am to 11pm</li>
                        <li>Thursday.......9am to 11pm</li>
                        <li>Friday.......9am to 11pm</li>
                    </ul>


                </div>
            </footer>
        </div>
    );
};

export default Footer;