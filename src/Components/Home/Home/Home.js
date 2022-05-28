import React from 'react';
import Featured from '../../Featured/Featured';
import FeaturedProperties from '../../FeaturedProperties/FeaturedProperties';
import Footer from '../../Footer/Footer';
import MailList from '../../MailList/MailList';
import PropertyList from '../../PropertyList/PropertyList';
import Header from '../Header/Header';
import Top from '../Top/Top';

const Home = () => {
    return (
        <div>
            <Top></Top>
            <Header></Header>
            <Featured></Featured>
            <PropertyList></PropertyList>
            <FeaturedProperties></FeaturedProperties>
            <MailList></MailList>
            <Footer></Footer>
        </div>
    );
};

export default Home;