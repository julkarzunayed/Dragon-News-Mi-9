import React from 'react';
import { FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
    } = news;

    return (
        <div className=" mx-auto bg-white border border-base-300 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-base-300 flex items-center">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-gray-900 font-semibold">{author.name}</h2>
                    <p className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                    <FaShareAlt className="text-gray-400 hover:text-blue-500 cursor-pointer" />
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <img src={thumbnail_url} alt="Thumbnail" className="rounded-lg my-4 w-full h-56 object-cover" />
                <p className="text-info-content text-sm">{details.slice(0, 200)}...</p>
                <button className="text-blue-500 hover:underline mt-2">Read More</button>

                <div className="border-t border-base-300 pt-4 mt-4 flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                        {/*
          {Array.from({ length: rating.number }, (_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))} */}
                        {
                            Array.from({length: rating.number}, (_, i) => <FaStar key={i} className="text-yellow-400" />)
                        }

                        <span>{rating.number}</span>
                        {/* <span className="ml-2">{rating.badge}</span> */}
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaRegEye className="text-gray-500" />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
