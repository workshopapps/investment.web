import React from 'react';

import Basicsub from '../../assets/settings/basicsub.svg';
import basicmobile from '../../assets/settings/mobileplan.svg';

import { Link } from 'react-router-dom';

export default function SubPlan() {
    // const [sub, setSub] = useState('basic');

    // const [Basicsubvisible, setBasicsubvisible] = useState(false);
    // const [Standardvisible, setStandardvisible] = useState(false);
    // const [Premiumvisible, setPremiumvisible] = useState(false);

    // useEffect(() => {
    //     sub === 'basic' ? setBasicsubvisible(true) : setBasicsubvisible(false);
    //     sub === 'standardsub' ? setStandardvisible(true) : setStandardvisible(false);
    //     sub === 'premiumsub' ? setPremiumvisible(true) : setPremiumvisible(false);
    // }, [sub]);

    // const handleSub = (e) => {
    //     e.preventDefault();
    //     setSub(e.target.value);
    // };

    // const handleSubUpdate = () => {
    //     let updates;
    //     sub === 'UpdateSubscription'
    //         ? (updates = <img src={Basicsub} alt="basicsub" className="w-[164px] h-[164px] mb-4" />)
    //         : (updates = (
    //               <img src={Premium} alt="premiumsub" className="w-[164px] h-[164px] mb-4" />
    //           ));
    //     return updates;
    // };

    return (
        <div className="flex flex-col mt-1 mb-[140px] mx-2 md:ml-[200px] md:mr-[200px]">
            <div className="mb-6">
                <h1 className="text-4xl">Your Plan </h1>
            </div>
            <div className="flex flex-col w-full h-full mt-6">
                <picture>
                    <source media="(min-width: 768px)" srcSet={Basicsub} />
                    <source media="(max-width: 767px)" srcSet={basicmobile} />
                    <img src={basicmobile} alt="basicmobile" className="w-full h-full mb-4" />
                </picture>
                {/* <img src={Basicsub} alt="Basicsub" className="w-full h-full mb-4" /> */}

                <div>
                    <div className="mt-3" style={{ textAlign: 'right' }}>
                        <Link to="/subscription">
                            <button className="text-[#19C170]  font-semibold text-base py-4 px-[45px] border-[1px] border-[#1BD47B] rounded-md">
                                Upgrade Plan
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
