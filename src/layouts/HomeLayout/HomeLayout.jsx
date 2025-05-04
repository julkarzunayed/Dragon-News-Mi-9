import React from 'react';
import Header from '../../components/Header/Header';
import Marque from '../../components/Header/Marque';
import NavBar from '../../components/Header/NavBar';

const HomeLayout = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-4'>
            <header>
                <Header></Header>
                <Marque></Marque>
                <NavBar></NavBar>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main"></section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;