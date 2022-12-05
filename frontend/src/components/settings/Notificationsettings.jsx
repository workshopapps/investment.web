import { React, useState } from 'react';
//import ReactSwitch from 'react-switch';
import toggleOn from '../../assets/notificationSettigns/toggleOn.svg';
import toggleOff from '../../assets/notificationSettigns/toggleOff.svg';
// import classNames from 'classnames';

export default function Notificationsettings() {
    const [ischecked1, setIsChecked1] = useState(true);
    const [ischecked2, setIsChecked2] = useState(false);
    const [ischecked3, setIsChecked3] = useState(true);
    const [ischecked4, setIsChecked4] = useState(false);

    const handleChecked = () => {
        setIsChecked1((prev) => !prev);
    };
    const handleCheckedTwo = () => {
        setIsChecked2((prev) => !prev);
    };
    const handleCheckedThree = () => {
        setIsChecked3((prev) => !prev);
    };
    const handleCheckedFour = () => {
        setIsChecked4((prev) => !prev);
    };

    return (
        <div className="flex flex-col pb-[100px]">
            <div className="flex flex-col  h-full items-center py-5">
                <div className="flex flex-col w-full h-full py-2 font-semibold text-base text-black max-w-[1028px]">
                    <div className="flex justify-between items-center  px-6 py-4">
                        <h2 className="text-xl font-normal">Enable email notification</h2>
                        {ischecked1 ? (
                            <img src={toggleOff} onClick={handleChecked} alt="toggle" />
                        ) : (
                            <img src={toggleOn} onClick={handleChecked} alt="toggle" />
                        )}
                    </div>
                    <hr className="w-full border" />
                    <div className="flex flex-col w-full h-full py-4 font-semibold text-base text-#0A0B0D ">
                        <div className="flex justify-between items-center px-6 py-6">
                            <h2 className="text-l text-#0A0B0D font-normal">
                                Receive notifications about small cap stocks to invest in{' '}
                            </h2>
                            {ischecked2 ? (
                                <img src={toggleOff} onClick={handleCheckedTwo} alt="toggle" />
                            ) : (
                                <img src={toggleOn} onClick={handleCheckedTwo} alt="toggle" />
                            )}
                        </div>

                        <div className="flex justify-between items-center px-6 py-6">
                            <h2 className="text-l text-#0A0B0D font-normal">
                                Receive notifications about large cap stocks to invest in{' '}
                            </h2>
                            {ischecked3 ? (
                                <img src={toggleOff} onClick={handleCheckedThree} alt="toggle" />
                            ) : (
                                <img src={toggleOn} onClick={handleCheckedThree} alt="toggle" />
                            )}
                        </div>

                        <div className="flex justify-between items-center px-6 py-6">
                            <h2 className="text-l text-#0A0B0D font-normal">
                                Receive notifications about mid cap stocks to invest in{' '}
                            </h2>
                            {ischecked4 ? (
                                <img src={toggleOff} onClick={handleCheckedFour} alt="toggle" />
                            ) : (
                                <img src={toggleOn} onClick={handleCheckedFour} alt="toggle" />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:ml-auto mr-4 mt-[70px]">
                        <button className="bg-[#19C170] text-black  font-semibold text-base py-3 px-6 rounded-md">
                            Update Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
