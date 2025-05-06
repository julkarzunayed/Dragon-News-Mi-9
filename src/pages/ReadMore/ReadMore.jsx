import React from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router';
import ReadMoreDetails from '../../components/ReadMoreDetails/ReadMoreDetails';
import LoginWith from '../../components/RightAside/LoginWith/LoginWith';
import FindUsOn from '../../components/RightAside/FindUsOn';
import QZon from '../../components/RightAside/QZon';

const ReadMore = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div className='max-w-[1200px] mx-auto' >
            <Header></Header>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-9">
                <ReadMoreDetails id={id}></ReadMoreDetails>
                </div>
                <aside className='col-span-3'>
                    <LoginWith></LoginWith>
                    <FindUsOn></FindUsOn>
                    <QZon></QZon>
                </aside>
            </div>

        </div>
    );
};

export default ReadMore;
