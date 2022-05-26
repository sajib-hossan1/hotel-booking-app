import React from 'react';
import Featured from '../../Featured/Featured';
import Header from '../Header/Header';
import Top from '../Top/Top';

const Home = () => {
    return (
        <div>
            <Top></Top>
            <Header></Header>
            <Featured></Featured>
        </div>
    );
};

export default Home;