import { React, useState, useContext } from 'react';
import toggleOn from '../../assets/notificationSettigns/toggleOn.svg';
import toggleOff from '../../assets/notificationSettigns/toggleOff.svg';
import { ThreeDots } from 'react-loader-spinner';
import AuthContext from '../../auth/AuthContext';
import authHooks from '../../auth/AuthHooks';
import { ToastContainer, toast } from 'react-toastify';

export default function Notificationsettings({ notifications }) {
    if (!notifications) {
        return (
            <div className="flex justify-center mt-3 md:px-[220px] md:pb-[200px]">
                <ThreeDots
                    height="80"
                    width="80"
                    color="#49dd95"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    const [notificationsEnabled, setNotificationsEnabled] = useState(
        notifications ? notifications.notifications_enabled : false
    );
    const [smallCapsEnabled, setSmallCapsEnabled] = useState(
        notifications ? notifications.receive_for_small_caps : false
    );
    const [midCapsEnabled, setMidCapsEnabled] = useState(
        notifications ? notifications.receive_for_mid_caps : false
    );
    const [highCapsEnabled, setHighCapsEnabled] = useState(
        notifications ? notifications.receive_for_high_caps : false
    );
    const [isLoading, setIsLoading] = useState(false);

    const { accessToken } = useContext(AuthContext);
    const apiService = authHooks.useApiService();

    const patchSettings = () => {
        if (!accessToken) return;

        setIsLoading(true);
        const data = {
            notifications_enabled: notificationsEnabled,
            receive_for_small_caps: smallCapsEnabled,
            receive_for_mid_caps: midCapsEnabled,
            receive_for_high_caps: highCapsEnabled
        };

        apiService(accessToken)
            .patch(`/user/notification_settings/`, data)
            .then((res) => {
                setIsLoading(false);

                if (res.status === 200) {
                    toast.success('Settings updated');
                } else {
                    toast.error('Failed to update settings');
                }
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
                toast.error('Failed to update settings');
            });
    };

    const handleChecked = () => {
        setNotificationsEnabled((prev) => !prev);
    };
    const handleCheckedTwo = () => {
        setSmallCapsEnabled((prev) => !prev);
    };
    const handleCheckedThree = () => {
        setMidCapsEnabled((prev) => !prev);
    };
    const handleCheckedFour = () => {
        setHighCapsEnabled((prev) => !prev);
    };

    return (
        <div className="flex mt-3 md:px-[220px]">
            <ToastContainer />
            <div className="flex flex-col  h-full items-center py-5">
                <div className="flex flex-col w-full h-full py-2 font-semibold text-base text-black max-w-[1028px]">
                    <div className="flex w-full justify-between items-center  px-6 py-4">
                        <h2 className="text-xl font-normal">Enable email notification</h2>
                        <div style={{ paddingRight: '2rem' }} />
                        {notificationsEnabled ? (
                            <img src={toggleOn} onClick={handleChecked} alt="toggle" />
                        ) : (
                            <img src={toggleOff} onClick={handleChecked} alt="toggle" />
                        )}
                    </div>
                    <hr className="w-full border" />
                    <div className="flex flex-col w-full h-full py-4 font-semibold text-base text-#0A0B0D ">
                        <div className="flex justify-between items-center px-6 py-6">
                            <h2 className="text-l text-#0A0B0D font-normal">
                                Receive notifications about small cap stocks to invest in{' '}
                            </h2>
                            <div style={{ width: '200px' }} />
                            {smallCapsEnabled ? (
                                <img src={toggleOn} onClick={handleCheckedTwo} alt="toggle" />
                            ) : (
                                <img src={toggleOff} onClick={handleCheckedTwo} alt="toggle" />
                            )}
                        </div>

                        <div className="flex justify-between items-center px-6 py-6">
                            <h2 className="text-l text-#0A0B0D font-normal">
                                Receive notifications about large cap stocks to invest in{' '}
                            </h2>
                            {midCapsEnabled ? (
                                <img src={toggleOn} onClick={handleCheckedThree} alt="toggle" />
                            ) : (
                                <img src={toggleOff} onClick={handleCheckedThree} alt="toggle" />
                            )}
                        </div>

                        <div className="flex justify-between items-center px-6 py-6">
                            <h2 className="text-l text-#0A0B0D font-normal">
                                Receive notifications about mid cap stocks to invest in{' '}
                            </h2>
                            {highCapsEnabled ? (
                                <img src={toggleOn} onClick={handleCheckedFour} alt="toggle" />
                            ) : (
                                <img src={toggleOff} onClick={handleCheckedFour} alt="toggle" />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:ml-auto mr-4 mt-[70px]">
                        <button
                            className="bg-[#19C170] text-black  font-semibold text-base py-3 px-6  w-[200px] h-[50px] rounded-md"
                            disabled={isLoading}
                            onClick={patchSettings}>
                            {isLoading ? (
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <ThreeDots
                                        height="30"
                                        width="50"
                                        radius="9"
                                        color="#fff"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    />
                                </div>
                            ) : (
                                'Update Changes'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
