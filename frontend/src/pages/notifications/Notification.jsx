import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { notificationData } from '../../store/notificationData/notificationData';

const NotificationCard = ({ message, time }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <span className="h-[10px] w-[10px] inline-block mt-2 bg-[#96EBC2] rounded-full" />
                <div className="flex flex-col gap-4">
                    <p className="text-sm md:text-base font-semibold w-[60vw] sm:w-full truncate ">
                        {message}
                    </p>
                    <p className="text-sm text-[#66717E]">{time}</p>
                </div>
            </div>
            <span className="h-[0.5px] border-0 m-0 p-0 bg-[#CCE3FF] w-full" />
        </div>
    );
};

NotificationCard.propTypes = {
    message: PropTypes.string,
    time: PropTypes.string
};

const Notification = () => {
    const [active, setActive] = useState(true);
    return (
        <div className="font-Hauora px-8 flex flex-col gap-8 py-12 min-h-[40rem]">
            <h4 className="text-2xl font-semibold ">Notification</h4>

            <div>
                <div className="flex gap-8">
                    <h4
                        onClick={() => setActive(true)}
                        className={`text-[#19C170]  ${
                            active ? 'bg-[#B8F2D6]' : ''
                        } font-semibold text-sm rounded-md px-4 sm:px-6 py-2 w-fit cursor-pointer`}>
                        General
                        <span className="ml-1 h-[17px] w-[17px] sm:h-[28px] sm:w-[28px] inline-flex rounded-full text-white bg-[#19C170] items-center justify-center">
                            8
                        </span>
                    </h4>
                    <h4
                        onClick={() => setActive(false)}
                        className={`text-[#19C170]  ${
                            !active ? 'bg-[#B8F2D6]' : ''
                        } font-semibold text-sm rounded-md px-4 sm:px-6 py-2 w-fit cursor-pointer`}>
                        Archived
                        <span className="ml-1 h-[17px] sm:h-[28px] w-[17px] sm:w-[28px] inline-flex rounded-full text-white bg-[#19C170] items-center justify-center">
                            0
                        </span>
                    </h4>
                </div>
            </div>
            <div className="flex flex-col gap-4 ">
                {active &&
                    notificationData.map((item) => (
                        <NotificationCard key={item.key} message={item.message} time={item.time} />
                    ))}
            </div>
        </div>
    );
};

export default Notification;
