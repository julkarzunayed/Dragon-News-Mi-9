import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const [newsData, setNewsData] = useState([]);
    const data = useLoaderData();
    const { id } = useParams();
    // console.log(id,)

    // setNewsData(data)
    // useEffect(() => {
    //     setNewsData(data)
    // }, [])

    useEffect(() => {
        if (id === "0") {
            setNewsData(data)
        }
        else if (id === "1") {
            const filteredData = data.filter(newData => newData?.others?.is_today_pick === true && newData?.others?.is_trending === true);
            setNewsData(filteredData)
        }
        else {
            const filteredData = data.filter(newData => newData?.category_id === Number(id))
            setNewsData(filteredData)
        }
    }, [data, id])

    return (
        <div className='mt-6'>
            {/* <h2 className='font-semibold text-neutral text-xl'>
                Dragon News Home
            </h2> */}
            <div className="grid grid-cols-1 gap-3">
                {
                    newsData.map(news => <NewsCard 
                        key={news.id} 
                        news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;