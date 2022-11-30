/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import CapList from '../../components/StockCaps/CapList';
import PageLayout from '../layout';

const LargeCap = () => {
    const title = 'Large Cap';

    return (
        <PageLayout>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[1673px]">
                    <div className="py-[35px] text-[16px] md:text-[40px] font-bold px-[16px]">
                        {title}
                    </div>
                    <div>
                        <CapList />
                    </div>
                    <div className="px-[16px] flex justify-center items-center m-10">
                        <button className=" rounded bg-[#1BD47B] md:py-3 px-7 font-bold text-white py-4">
                            Show More
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default LargeCap;
