import React from 'react';

export default function ProductDesigner() {
    return (
        <div className="border border-shade100 p-8 m-10 rounded-md shadow bg-shade100 md:bg-white ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2  w-full mx-4  place-content-center md:gap-6">
                <div className="w-3/4">
                    <p className="font-medium text-xl leading-8 tracking-widest text-primary102 w-full">
                        Product Designer
                    </p>
                    <p className="font-normal text-sm leading-6 tracking-widest w-full mt-3">
                        We are seeking a Product Designer with a passion for finding solutions that
                        allow customers to intuitively use our products. The ideal candidate will be
                        skilled at each stage of the design process but always focused on the needs
                        of the customer. You will work with other designers and cross-functional
                        team members and will rely heavily on both qualitative and quantitative data
                        to make informed decisions.
                    </p>
                </div>
                <div className="md:mt-6 mt-1">
                    <ul className="font-normal text-sm leading-6 tracking-widest mt-5 w-full">
                        <li>
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 mr-3 inline"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Full-time
                        </li>
                        <li className="my-2">
                            {' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 mr-3 inline"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                />
                            </svg>
                            Product &amp; Design
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 mr-3 inline"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                />
                            </svg>
                            $24,000 - $25,000 annually
                        </li>
                    </ul>
                </div>
            </div>

            <div className=" grid md:grid-cols-2  gap-2 grid-cols-1 mx-4 my-8 w-full">
                <div className="w-3/4">
                    <p className="font-medium text-xl leading-8 tracking-widest text-primary102">
                        Job Responsibilities
                    </p>
                    <div className="w-full ">
                        <ul className="font-normal text-sm leading-6  list-disc text-justify mt-2">
                            <li>Identify opportunities for new products</li>
                            <li>
                                Analyze how a new product ties in with market needs and consumer
                                preferences
                            </li>
                            <li>
                                Set design requirements based on briefs from internal teams and
                                external partners
                            </li>
                            <li>Research materials and techniques</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="font-normal text-sm leading-6  md:ml-4 ml-0 list-disc w-full text-justify md:mt-6 mt-1">
                        <li>Sketch drafts on paper or digitally (for example, using CAD)</li>
                        <li>Use 3D modeling software to design products and components</li>
                        <li>Produce prototypes and test functionality</li>
                        <li>Improve the design of existing products</li>
                        <li>Gather feedback from product users </li>
                    </ul>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2  mx-4 w-full">
                <div className="w-3/4">
                    <p className="font-medium text-xl leading-8  text-primary102 tracking-widest">
                        Job Requirement
                    </p>
                    <div className="w-full md:ml-10 ml-2">
                        <ul className="font-normal text-sm leading-6  list-disc text-justify mt-2">
                            <li>
                                Proven experience in all phases of the design process including user
                                research, copywriting, wireframing, prototyping, visual design,
                                interaction design, and usability testing
                            </li>
                            <li>An intuitive eye for customer needs beyond the obvious</li>
                            <li>Excellent attention to detail</li>
                            <li>Ability to collaborate with cross-functional team members</li>
                            <li>
                                Ability to collect and interpret both qualitative and quantitative
                                feedback
                            </li>
                            <li>
                                A well-rounded portfolio of client work, demonstrating a strong
                                understanding of client objectives
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-3/4 md:ml-4 ml-1">
                    <ul className="font-normal text-sm leading-6  md:ml-4 ml-0 list-disc w-full text-justify md:mt-6 mt-0">
                        <li>
                            Ability to effectively communicate and persuade around design concepts
                        </li>
                        <li>
                            Passion for design; not satisfied with the status quo and always
                            thinking of ways to improve
                        </li>
                        <li>Creative problem-solving skills</li>
                        <li>
                            Dynamic, creative personality, effective at engaging and influencing a
                            variety of audiences
                        </li>
                        <li>Provide assistance to product engineers when needed</li>
                        <li>
                            Recommend new tools and technologies by staying abreast of the latest
                            trends and techniques
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
