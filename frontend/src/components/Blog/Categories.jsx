import React from 'react';

const Categories = () => {
    return (
        <div>
            <div className="categories lg:flex justify-between mb-6 lg:mb-10 text-[#66717E] hidden">
                <div className="category">All</div>
                <div className="category">Screeners</div>
                <div className="category">Charting</div>
                <div className="category">Portfolios</div>
                <div className="category">Product Features</div>
                <div className="category">Stock Research</div>
                <div className="category">Investing Education</div>
                <div className="category">Weekly Market Brief</div>
                <div className="category">Others</div>
            </div>
            <select
                name=""
                id=""
                className="w-full rounded border-solid border lg:hidden flex justify-end lg:p-4 text-center border-[#66717E]  bg-no-repeat bg-contain bg-right px-4 mb-6 lg:mb-10  outline-none ">
                <option className="" value="">
                    All
                </option>
                <option className="" value="">
                    Screeners
                </option>
                <option className="" value="">
                    Charting
                </option>
                <option className="" value="">
                    Portfolios
                </option>
                <option className="" value="">
                    Product Features
                </option>
                <option className="" value="">
                    Stock Research
                </option>
                <option className="" value="">
                    Investing Education
                </option>
                <option className="" value="">
                    Weekly Market Brief
                </option>
                <option className="" value="">
                    Others
                </option>
            </select>
        </div>
    );
};

export default Categories;
