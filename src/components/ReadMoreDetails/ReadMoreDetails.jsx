import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';


const ReadMoreDetails = ({id}) => {
    const [news, setNews] = useState({});
    const newsData = useLoaderData();
    // console.log(newsData)

    useEffect(() => {
        const findNews = newsData.find(news => news.id === id)
        setNews(findNews);
        console.log(findNews)
    }, [id, newsData])
    
    const {
        category_id,
        title,
        thumbnail_url,
        details,
    } = news;

    return (
        <div className='border border-base-200 p-6 rounded-xl'>
            <h2 className='font-semibold text-neutral text-xl'>
                Dragon News Home
            </h2>
            <div className="mt-4">
                <img className='w-full rounded-xl' src={thumbnail_url} alt="" />
                <h2 className='my-5 font-bold text-neutral text-xl' >{title}</h2>
                <p className="text-justify">
                    {details}
                </p>
                <Link className='btn bg-secondary text-white mt-8' to={`/category/${category_id}`}> All news in this category</Link>
            </div>
        </div>
    );
};

export default ReadMoreDetails;