import React, { useState } from 'react';

const Notification = () => {
    const [active, setActive] = useState(false);
    return (
        <div>
            <h4>Notification</h4>

            <div>
                <div>
                    <h4>
                        General{' '}
                        <span className="h-[17px] w-[17px] rounded-full text-white bg-[#19C170]">
                            8
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Notification;
