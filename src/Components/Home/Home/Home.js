import React from 'react';
import Featured from '../../Featured/Featured';
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
        </div>
    );
};

export default Home;