import React from 'react';
import { Fade } from "react-awesome-reveal";

// Images
import logo from '../../../../assets/all-image/logo.png';
import headerBg from '../../../../assets/all-image/header-banner-2.png';
import phonIcon from '../../../../assets/all-image/phone-icon.png';
import { Link } from 'react-router-dom';


const BannerCarousel = () => {
    return (
        <div>
             <div className='2xl:px-[58px] md:px-[30px] md:pt-[43px] pt-[9rem] w-full h-[100vh] bg-no-repeat bg-cover'
                style={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundPositionY: '-110px'
                }}
            >
                <div className='md:flex hidden md:flex-row flex-col justify-between'>
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <div className='space-y-[20px]'>
                        <div className='flex justify-end gap-5 items-start'>
                            <div className='font-bold'>
                                <p className='text-right lg:text-sm text-xl'>Express Delivery</p>
                                <p className='2xl:text-3xl lg:text-xl'>1800 258 888</p>
                            </div>
                            <img className='2xl:h-14 lg:h-10' src={phonIcon} alt="" />
                        </div>
                        <div className='md:space-x-[150px] 2xl:text-xl md:text-lg font-bold tracking-widest'>

                            <Link className='hover:text-slate-500' to='/'>Home</Link>
                            <Link className='hover:text-slate-500' to="">Menu</Link>
                            <Link className='hover:text-slate-500' to="">Our Story</Link>
                            <Link className='hover:text-slate-500' to="">Contact Us</Link>

                        </div>
                    </div>
                </div>


                <Fade>
                    <div 
                    className='text-center md:ms-10 ms-0  md:w-2/5 w-full md:h-auto h-full flex flex-col justify-center items-center md:mt-10'>
                        <div className='md:space-y-[42px] space-y-3'>
                            <h1
                                className="2xl:text-6xl md:text-4xl text-4xl font-bold custom-font"
                            >Are You Hungry?</h1>

                            <h2
                                className='2xl:text-8xl lg:text-6xl text-6xl uppercase'
                                style={{ fontFamily: 'Fredericka the Great' }}
                            >Don't Wait!</h2>
                            <p className='uppercase font-bold 2xl:text-3xl lg:text-xl inline-block 2xl:pb-[42px] lg:pb-4 pb-2 border-b border-black'>
                                Let start to order food now</p>
                        </div>
                        <div
                            className='flex items-center md:gap-[16px] gap-2 2xl:mt-[28px] lg:mt-5 mt-10 justify-center'
                        >
                            <p className='2xl:text-4xl lg:text-xl text-2xl'
                                style={{ fontFamily: 'Fredericka the Great' }}>
                                This Monday <br />
                                Happy Hours
                            </p>
                            <p
                                style={{ fontFamily: 'Fredericka the Great' }}
                                className='2xl:text-[5rem] lg:text-[3.8rem] text-[3.8rem]'
                            >1+1=3</p>
                        </div>
                        <div className='2xl:mt-[28px] z-50 md:mt-[10px] mt-[3rem]'>
                            <button 
                                className='2xl:text-2xl duration-150 font-bold px-12 py-3 uppercase border order-btn border-black cursor-pointer'
                                >
                                Order Now
                            </button>
                        </div>
                        
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default BannerCarousel;