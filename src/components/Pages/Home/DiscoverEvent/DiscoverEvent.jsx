import React from 'react';
import Titles from '../Titles/Titles';

import img1 from '../../../../assets/all-image/event-1.png';
import img2 from '../../../../assets/all-image/event-2.png';
import img3 from '../../../../assets/all-image/event-3.png';
import ImageSlick from './ImageSlick/ImageSlick';
import { Slide } from "react-awesome-reveal";

const DiscoverEvent = () => {

    const tag = 'Discover';
    const title = 'Upcoming Events';
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ';

    const images = [img1, img2, img3, img1, img2, img3];



    // console.log(Carousel);

    return (
        <div className=''>
            <div>
                <Titles tag={tag} title={title} desc={desc} />
            </div>
            <div>
               <Slide><ImageSlick images={images} /></Slide>
            </div>
        </div>
    );
};

export default DiscoverEvent;