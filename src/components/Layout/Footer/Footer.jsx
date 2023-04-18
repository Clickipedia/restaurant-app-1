import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import FooterBg from '../../../assets/all-image/footer-bg.png'
import FooterLogo from '../../../assets/all-image/logo-2.png'

const Footer = () => {
    return (
        <div className='md:h-[583px] w-full bg-cover text-white md:py-[66px] md:px-[102px] py-5 px-3'
            style={{
                backgroundImage: `url(${FooterBg})`
            }}
        >
            <div className='md:mb-[70px]'>
                <img className='md:w-[15rem] w-[10rem] md:m-0 m-5' src={FooterLogo} alt="" />
            </div>
            <div className='flex md:flex-row flex-col justify-between items-center md:text-xl'>
                <p className='md:w-[511px] md:px-0 px-3' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. 

                </p >
                <div className='md:mt-0 mt-5 space-y-[30px] md:w-[511px]'>
                    <div className='flex items-center gap-[15px]'>
                        <TiLocation className='text-[#ffe001] text-3xl -ms-1' />
                        <p>Main Road, Building Name, Country</p>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <MdEmail className='text-[#ffe001] text-2xl' />
                        <p>info@companyname.com</p>
                    </div>
                </div>
            </div>
            <div className='md:mt-[162px] mt-[3rem] md:gap-0 gap-5  flex md:flex-row flex-col-reverse justify-between items-center px-2 '>
                <p>© Company Name 2020. All rights reserved.</p>
                <div className='flex gap-[14px]'>
                    <a className='text-xl' href="#"><AiFillInstagram/></a>
                    <a className='text-xl' href="#"><FaFacebookF/></a>
                    <a className='text-xl' href="#"><AiOutlineTwitter/></a>
                    <a className='text-xl' href="#"><AiOutlineWhatsApp/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;