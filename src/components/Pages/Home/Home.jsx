import React from 'react';

import BannerSection from './BannerSection/BannerSection';
import Menus from './MenuSection/Menus';
import DiscoverEvent from './DiscoverEvent/DiscoverEvent';
import TrendingItem from './TrendingItem/TrendingItem';
import BookTable from './BookTable/BookTable';
import ReviewSection from './ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <BannerSection />
            <div className=''>
                <Menus />
                <DiscoverEvent />
                <TrendingItem />
                <BookTable />
                <ReviewSection/>
            </div>
        </div>
    );
};

export default Home;