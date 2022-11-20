import { React, useState } from 'react';
import ReactSwitch from 'react-switch';

export default function Notificationsettings() {
    const [checked, setChecked] = useState({
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
        switch6: false
    });
    // handle switch change

    const handleChange = (e) => {
        setChecked({ ...checked, [e.target.name]: e.target.checked });
    };

    return (
        <div className="flex flex-col w-full pb-[100px] ">
            <div className="flex flex-col w-full h-full py-10">
                <div className="flex flex-col w-full h-full py-2 px-[80px] font-semibold text-base text-black">
                    <h1 className="text-4xl">Notifications</h1>
                    <div className="flex flex-col w-full h-full py-4 font-semibold text-base text-black ">
                        <div className="flex justify-between items-center py-6">
                            <h2 className="text-xl font-normal">
                                Receive notifications about all newly added stocks{' '}
                            </h2>
                            <ReactSwitch
                                checked={checked.switch1}
                                name="switch1"
                                onChange={handleChange}
                                onColor="#19C170"
                                onHandleColor="#ffffff"
                                handleDiameter={13}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={21}
                                width={27}
                                className="ml-4"
                            />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-6">
                            <h2 className="text-xl font-normal">
                                Receive notifications about latest stocks to invest in{' '}
                            </h2>
                            <ReactSwitch
                                checked={checked.switch2}
                                onChange={handleChange}
                                name="switch2"
                                onColor="#19C170"
                                onHandleColor="#ffffff"
                                handleDiameter={13}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={21}
                                width={27}
                                className="ml-4"
                            />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-6">
                            <h2 className="text-xl font-normal">
                                Receive notifications about changes happening in the stock market{' '}
                            </h2>
                            <ReactSwitch
                                checked={checked.switch3}
                                onChange={handleChange}
                                name="switch3"
                                onColor="#19C170"
                                onHandleColor="#ffffff"
                                handleDiameter={13}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={21}
                                width={27}
                                className="ml-4"
                            />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-6">
                            <h2 className="text-xl font-normal">
                                Notify me about stocks that should be in my watchlist{' '}
                            </h2>
                            <ReactSwitch
                                checked={checked.switch4}
                                onChange={handleChange}
                                name="switch4"
                                onColor="#19C170"
                                onHandleColor="#ffffff"
                                handleDiameter={13}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={21}
                                width={27}
                                className="ml-4"
                            />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-6">
                            <h2 className="text-xl font-normal">
                                Notify me about investment advice updates{' '}
                            </h2>
                            <ReactSwitch
                                checked={checked.switch5}
                                onChange={handleChange}
                                name="switch5"
                                onColor="#19C170"
                                onHandleColor="#ffffff"
                                handleDiameter={13}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={21}
                                width={27}
                                className="ml-4"
                            />
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-6">
                            <h2 className="text-xl font-normal">
                                Send investment notification to my email{' '}
                            </h2>
                            <ReactSwitch
                                checked={checked.switch6}
                                onChange={handleChange}
                                name="switch6"
                                onColor="#19C170"
                                onHandleColor="#ffffff"
                                handleDiameter={13}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={21}
                                width={27}
                                className="ml-4"
                            />
                        </div>
                        <hr />
                    </div>
                    <div className="flex flex-col ml-auto mr-4 mt-[70px]">
                        <button className="bg-[#19C170] text-black  font-semibold text-base py-4 px-8 rounded-md">
                            Update Notification
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
