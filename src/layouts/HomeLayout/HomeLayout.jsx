import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Marque from '../../components/Header/Marque';
import NavBar from '../../components/Header/NavBar';
import AllCategory from '../../components/AllCategory/AllCategory';
import { Outlet } from 'react-router';
import LoginWith from '../../components/LoginWith/LoginWith';

const HomeLayout = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-4'>
            <header>
                <Header></Header>
                <Marque></Marque>
                <NavBar></NavBar>
            </header>
            <main className='mt-20 grid grid-cols-12 gap-4 *:border'>
                <aside className="col-span-3 left-nav">
                    <Suspense fallback={<span className="text-center loading loading-ring loading-xl"></span>}>
                        <AllCategory></AllCategory>
                    </Suspense>
                </aside>

                <section className="col-span-6 main">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3 right-nav">
                    <LoginWith></LoginWith>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;