import React, { use } from 'react';
import { NavLink } from 'react-router';
import "./AllCategory.css"

const allCategoryPromise = fetch("/data/categories.json").then(res => res.json());

const AllCategory = () => {
    const categories = use(allCategoryPromise);
    return (
        <div>
            <h3 className='font-semibold text-neutral text-xl'>
                All Category
            </h3>
            <div className="grid grid-cols-1 mt-4 text-xl font-semibold text-info-content">
                {
                    categories.map(category => <NavLink
                        to={`/category/${category.id}`} 
                        className={`p-4 pl-8 hover:bg-base-300 rounded-sm`} 
                        key={category.id} >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default AllCategory;