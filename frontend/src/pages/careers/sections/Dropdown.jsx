import React from 'react';

export default function Dropdown() {
    return (
        <div className="flex flex-col  md:w-3/4 w-full h-full gap-4 ml-10 my-10 md:justify-start">
            <p className="py-5 text-secondaryBlack font-normal text-lg leading-8">Filters</p>
            <select
                name="category"
                id="category"
                className=" shadow-md overflow-hidden relative border-2 border-shade100  p-3 rounded-lg outline-none cursor-pointer bg-transparent text-normal leading-5 font-normal">
                <option
                    value="all"
                    defaultValue
                    className="bg-white border-b border-slate-100 dark:border-slate-700 active:bg-primary102">
                    All Categories
                </option>
                <option
                    value="engineering"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Engineering
                </option>
                <option
                    value="finance"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Finance
                </option>
                <option
                    value="legal"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Legal
                </option>
                <option
                    value="management"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Management
                </option>
                <option
                    value="product"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Product &amp; Design
                </option>
                <option
                    value="sales"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Sales/Marketing
                </option>
            </select>
            <select
                name="communte"
                id="communte"
                className="shadow-md overflow-hidden relative border-2 border-shade100  p-3 rounded-lg outline-none cursor-pointer bg-transparent text-normal leading-5 font-normal">
                <option value="commute" defaultValue>
                    All Commute Type
                </option>
                <option
                    value="hybrid"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Hybrid
                </option>
                <option
                    value="person"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    In Person
                </option>
                <option
                    value="remote"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Remote
                </option>
            </select>
            <select
                name="employment"
                id="employment"
                className="shadow-md overflow-hidden relative border-2 border-shade100  p-3 rounded-lg outline-none cursor-pointer bg-transparent text-normal leading-5 font-normal">
                <option value="employment" defaultValue className="hover:bg-primary102">
                    All Employment Type
                </option>
                <option
                    value="fulltime"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Full time
                </option>
                <option
                    value="parttime"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Parttime
                </option>
                <option
                    value="internship"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Internship
                </option>
                <option
                    value="contract"
                    className="bg-white border-b border-slate-100 dark:border-slate-700">
                    Contract
                </option>
            </select>
        </div>
    );
}
