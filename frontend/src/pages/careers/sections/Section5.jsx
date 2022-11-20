import React from 'react';
import Frame3 from '../../../assets/careers/frame3.png';
import Frame4 from '../../../assets/careers/frame4.png';
import Frame5 from '../../../assets/careers/frame5.png';
import Frame6 from '../../../assets/careers/frame6.png';

export default function Section5() {
    return (
        <div
            className="my-8 container flex justify-center content-center flex-col mx-6 "
            data-testid="section4">
            <p className="font-semibold text-xl leading-7 text-primary101 pt-4">
                Perks &amp; Benefits
            </p>
            <p className="text-primaryGray text-left py-2 w-3/4 leading-7 text-base pb-4">
                These are some of the perks and benefits of working with us:
            </p>

            <div className="sm:grid md:grid lg:grid grid-rows-2 grid-flow-col gap-4 block">
                <div className="md:my-2">
                    <img src={Frame3} alt="frame3" />
                    <p className="font-semibold text-base leading-7 text-primary101 pt-2">
                        Flexible Time-Off
                    </p>
                    <p className="text-primaryGray text-left py-2 w-3/4 leading-7 text-base">
                        We offer a flexible paid leave to our team for a fixed duration so team
                        members can take time off to relax and refresh their mental health.
                    </p>
                </div>
                <div className="md:my-2">
                    <img src={Frame4} alt="frame4" />
                    <p className="font-semibold text-base leading-7 text-primary101 pt-2">
                        Medical Coverage
                    </p>
                    <p className="text-primaryGray text-left py-2 w-3/4 leading-7 text-base">
                        Medical coverage including vision, dental and general health is what all
                        team members enjoy at mystockplug
                    </p>
                </div>
                <div className="md:my-2">
                    <img src={Frame5} alt="frame5" />
                    <p className="font-semibold text-base leading-7 text-primary101 pt-2">
                        Professional Development
                    </p>
                    <p className="text-primaryGray text-left py-2 w-3/4 leading-7 text-base">
                        We want to see our team grow and get better at their respective roles so we
                        invest in our team’s professional development
                    </p>
                </div>
                <div className="md:my-2">
                    <img src={Frame6} alt="frame6" />
                    <p className="font-semibold text-base leading-7 text-primary101 pt-2">
                        Employee Wellness Package
                    </p>
                    <p className="text-primaryGray text-left py-2 w-3/4 leading-7 text-base">
                        Employee wellness is our top priority at mystockplug so we make sure all
                        employees are at best perfoming capacity mentally with care packages.
                    </p>
                </div>
            </div>
        </div>
    );
}
