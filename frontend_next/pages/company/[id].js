/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import AboutCompanyCard from "../../components/CompanyProfile/AboutCompany";
import UpIcon from "../../assets/landingPage/icons/up.svg";
import DownIcon from "../../assets/landingPage/icons/down.svg";
import shareIcon from "../../assets/company-profile/share.svg";
import OverviewCard from "../../components/CompanyProfile/OverviewCard";
import VisualDataCard from "../../components/CompanyProfile/AnalysisCard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const CompanyProfilePage = () => {
  const [show, setShow] = React.useState(true);
  const { id: companyId } = useRouter().query;
  const [data, setData] = React.useState({});

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`https://api.yieldvest.hng.tech/company/${companyId}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [companyId]);

  switch (loading) {
    case true:
      return null;
    default:
      return (
        <Layout>
          <div className="bg-[#f5f5f5] font-Hauora">
            <div>
              <Link href="/">
                <div className="flex mt-0 pt-5 text-[#525A65] text-sm md:text-md mx-[1em] md:mx-[100px]">
                  Stock <span className="inline-flex mx-2 ">&gt; </span>Company
                  Profile
                </div>
              </Link>
              <div className="flex flex-col md:flex-col md:px-[100px] px-[1rem] gap-5 ">
                <div className="w-full flex flex-row justify-between">
                  <div>
                    <h3 className="text-2xl md:text-4xl text-[#5C5A5A] pt-10">
                      {companyId} Stock Fundamentals
                    </h3>
                    <p className="text-xl md:text-2xl text-[#5C5A5A] pt-4">
                      Overview
                    </p>
                  </div>

                  <div className="mt-auto">
                    <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10 hover:shadow-md">
                      Share This Stock{" "}
                      <img
                        className="ml-3 md:m-auto h-4 md:h-auto bg-none"
                        src={shareIcon.src}
                        alt="open"
                      />
                    </button>
                  </div>
                </div>

                <hr className="w-full mb-4 h-2" />

                <div className="flex flex-col md:flex-row gap-5 ">
                  <div className="md:w-1/3 w-full">
                    <OverviewCard
                      companyId={companyId}
                      name={data.name}
                      price={`${data.stock_price.stock_price.toFixed(2)}`}
                      industry={data.industry.industry}
                      market_cap={`$${(data.market_cap / 1e9).toFixed(2)}`}
                      stock_price={
                        data.stock_price.stock_price
                          ? `$${data.stock_price.stock_price.toFixed(2)}`
                          : `N/A`
                      }
                    />

                    <h5 className="text-md md:text-xl bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 md:px-10 py-3 border flex flex-row font-semibold justify-between hover:shadow-xl">
                      About{" "}
                      <img
                        className="p-2 cursor-pointer border bg-[#E8FBF2] rounded-full"
                        src={(show ? DownIcon : UpIcon).src}
                        alt="open"
                        onClick={() => setShow(!show)}
                      />
                    </h5>
                    {show && (
                      <AboutCompanyCard description={data.description} />
                    )}

                    <br />
                  </div>

                  <div className="md:w-2/3 w-full">
                    <VisualDataCard />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      );
  }
};
export default CompanyProfilePage;
