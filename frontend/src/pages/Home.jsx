import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FeatureProduct from '../components/products/FeatureProduct';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='w-full'>
            <Header/>
            <Banner />
            <section className='py-[45px]'>
                <FeatureProduct/>
            </section>
            <Footer />
        </div>
    );
};

export default Home;