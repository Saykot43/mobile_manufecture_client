import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Map from './map/Map';
import Newsletter from './Newsletter';
import Products from './Products';
import Review from './Review';
import UsbMember from './UsbMember';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummery />
            <Review />
            <UsbMember />
            <Map />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;