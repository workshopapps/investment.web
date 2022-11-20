import React from 'react';

export default function Dropdown() {
    return (
        <div className="flex flex-col w-2/4 h-full gap-4 ml-10 my-5">
            <p className="py-5 text-secondaryBlack font-normal text-base leading-8">Filters</p>
            <select
                name="category"
                id="category"
                className="border-1 border-shade100 bg-white p-3 rounded-sm outline-none cursor-pointer">
                <option
                    value="all"
                    className="bg-white border-b border-slate-100 dark:border-slate-700 hover:bg-primary102">
                    All Categories
                </option>
                <option value="engineering">Engineering</option>
                <option value="finance">Finance</option>
                <option value="legal">Legal</option>
                <option value="management">Management</option>
                <option value="product">Product &amp; Design</option>
                <option value="sales">Sales/Marketing</option>
            </select>
            <select
                name="communte"
                id="communte"
                className="border-1 border-shade100 bg-white p-3 rounded-sm outline-none cursor-pointer">
                <option value="commute" className="hover:bg-primary102">
                    All Commute Type
                </option>
                <option value="hybrid">Hybrid</option>
                <option value="person">In Person</option>
                <option value="remote">Remote</option>
            </select>
            <select
                name="employment"
                id="employment"
                className="border-1 border-shade100 bg-white p-3 rounded-sm outline-none cursor-pointer">
                <option value="employment" className="hover:bg-primary102">
                    All Employment Type
                </option>
                <option value="fulltime">Full time</option>
                <option value="parttime">Parttime</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
            </select>
        </div>
    );
}
