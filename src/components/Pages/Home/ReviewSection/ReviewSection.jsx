import React from 'react';
import Titles from '../Titles/Titles';

const ReviewSection = () => {

    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.';
    const title = 'Reviews'

    return (
        <div className='mb-10'>
            <Titles desc={desc} title={title} />
            <img className='w-20 h-20 object-contain shadow-xl rounded-[50%]' src="https://img.freepik.com/premium-photo/fun-gaul-3d-illustration_183364-40339.jpg?w=1060" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae corrupti eius corporis enim eligendi necessitatibus ad doloremque doloribus unde veritatis!</p>
        </div>
    );
};

export default ReviewSection;