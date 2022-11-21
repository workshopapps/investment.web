/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../../components/careers/Box/Box';
import Button from '../../../components/careers/Buttons/Button';

export default function Section3() {
    return (
        <div className="m-12">
            <p className="text-primary102 pb-2 text-3xl">Open Positions</p>
            <p className="text-primaryGray text-sm">
                These are some of the the most recent open positions:
            </p>
            <form className="block lg:flex md:flex sm:flex justify-center content-center gap-4 flex-wrap">
                <input
                    type="text"
                    placeholder="Search positions,category"
                    className="bg-white border-solid border border-shade100  md:w-1/2 w-full h-11 rounded-sm px-2 outline-none mt-5 text-primaryGray"
                />
                <div className="flex gap-6 content-center">
                    <select
                        name="category"
                        id="category"
                        required
                        className="h-11 w- 10 mt-5 border-2 border-shade100 bg-white rounded-lg text-xs outline-none">
                        <option
                            value="all"
                            className="bg-white border-b border-slate-100 dark:border-slate-700">
                            All Categories
                        </option>
                        <option value="engineering">Engineering</option>
                        <option value="finance">Finance</option>
                        <option value="legal">Legal</option>
                        <option value="management">Management</option>
                        <option value="product">Product &amp; Design</option>
                        <option value="sales">Sales/Marketing</option>
                    </select>
                    <Button title="Search" />
                </div>
            </form>

            <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 mt-10 w-full">
                <div>
                    <div className="border border-shade500 p-6 w-5/6  mb-6 hover:shadow-sm">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-primary102 text-sm">Product & Design</p>
                            </div>
                            <div>
                                <Link to="/position">
                                    <span className="ml-3 text-xs text-primary102 cursor-pointer">
                                        See All &gt;
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Box position="Product & Design" employment="Full Time" commute="Remote" />
                        <Box position="Product & Design" employment="Full Time" commute="Remote" />
                    </div>

                    <div className="border border-shade500 p-6  w-5/6 hover:shadow-sm">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-primary102 text-sm">Finance </p>
                            </div>
                            <div>
                                <Link to="/position">
                                    <span className="ml-3 text-xs text-primary102 cursor-pointer">
                                        See All &gt;
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Box
                            position="Business Strategist"
                            employment="Full Time"
                            commute="Remote"
                        />
                        <Box position="Stock Analyst" employment="Full Time" commute="Remote" />
                    </div>
                </div>

                <div className="my-4">
                    <div className="border border-shade500 p-6 col-start-2 col-span-4 w-5/6 mb-6 hover:shadow-sm">
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-primary102 text-sm">Sales & Marketing</p>
                            </div>
                            <div>
                                <Link to="/position">
                                    <span className="ml-3 text-xs text-primary102 cursor-pointer">
                                        See All &gt;
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Box position="Growth Manager" employment="Full Time" commute="Remote" />
                        <Box
                            position="Customer Success Manager"
                            employment="Full Time"
                            commute="Remote"
                        />
                        <Box position="Copywriter" employment="Full Time" commute="Remote" />
                        <Box position="Community Manager" employment="Full Time" commute="Remote" />
                    </div>

                    <div className="border border-shade500 p-6 w-5/6 hover:shadow-sm">
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-primary102 text-sm">Engineering </p>
                            </div>
                            <div>
                                <Link to="/position">
                                    <span className="ml-3 text-xs text-primary102 cursor-pointer">
                                        See All &gt;
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Box
                            position="Software Developer"
                            employment="Full Time"
                            commute="Remote"
                        />
                    </div>
                </div>
                <div>
                    <div className="border border-shade500 p-6 w-5/6 mb-6 hover:shadow-sm">
                        <div className="flex justify-between mt-4">
                            <div>
                                <p className="text-primary102 text-sm">Legal </p>
                            </div>
                            <div>
                                <Link to="/position">
                                    <span className="ml-3 text-xs text-primary102 cursor-pointer">
                                        See All &gt;
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Box position="Privacy Analyst" employment="Full Time" commute="Remote" />
                        <Box position="Business Lawyer" employment="Full Time" commute="Remote" />
                    </div>

                    <div className="border border-shade500 p-6 w-5/6 hover:shadow-sm">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-primary102 text-sm">Finance </p>
                            </div>
                            <div>
                                <Link to="/position">
                                    <span className="ml-3 text-xs text-primary102 cursor-pointer">
                                        See All &gt;
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Box
                            position="Business Strategist"
                            employment="Full Time"
                            commute="Remote"
                        />
                        <Box position="Stock Analyst" employment="Full Time" commute="Remote" />
                    </div>
                </div>
            </div>
        </div>
    );
}
