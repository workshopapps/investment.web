/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../../../components/Layout";
import AboutCompanyCard from "../../../components/CompanyProfile/AboutCompany";
import UpIcon from "../../../assets/landingPage/icons/up.svg";
import DownIcon from "../../../assets/landingPage/icons/down.svg";
import shareIcon from "../../../assets/company-profile/share.svg";
import rankIcon from "../../../assets/company-profile/ranking.svg";
import OverviewCard from "../../../components/CompanyProfile/OverviewCard";
import VisualcompanyCard from "../../../components/CompanyProfile/AnalysisCard";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import NotSubscribedModal from "../../../components/subscription/NotSubscribedModal";
import { useRouter } from "next/router";

const CompanyProfilePage = ({ company, companyId, isSmallCap }) => {
  const [show, setShow] = React.useState(true);
  const router = useRouter();

  if (!company) {
    if (isSmallCap) {
      return (
        <Layout>
          <Head>
            <title>Small Cap Stock Fundamentals</title>
            <meta
              name="description"
              content="Get up to date recommendations on the best stocks to buy"
            />
          </Head>

          <NotSubscribedModal isOpen={true} onClose={() => router.back()} />
        </Layout>
      );
    }
  }

  return (
    <Layout>
      <Head>
        <title>{company.name} Stock Fundamentals</title>
        <meta
          name="description"
          content="Get up to date recommendations on the best stocks to buy"
        />
      </Head>

      <div className="bg-white md:bg-[#f5f5f5] font-Hauora">
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
                <h3
                  className="text-1xl md:text-1xl text-[#5C5A5A] pt-10"
                  style={{ fontSize: "1.3rem" }}
                >
                  {company.name} Stock Fundamentals
                </h3>
                <p className="text-xl md:text-1xl text-[#5C5A5A] pt-0">
                  Overview
                </p>
              </div>

              <div className="flex flex-row mt-auto gap-2">
                <Link
                  href={`/company/${companyId}/history`}
                  className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10 hover:shadow-md"
                >
                  <span className="hidden md:block">View Ranking History </span>
                  <img
                    className="m-auto w-[5em] md:w-auto h-5 md:h-auto bg-none"
                    src={rankIcon.src}
                    alt="open"
                  />
                </Link>
                <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10 hover:shadow-md">
                  <span className="hidden md:block">Share This Stock </span>
                  <img
                    className="m-auto w-[5em] md:w-auto h-5 md:h-auto bg-none"
                    src={shareIcon.src}
                    alt="open"
                  />
                </button>
              </div>
            </div>

            <hr className="hidden md:block w-full mb-4 h-2" />

            <div className="flex flex-col md:flex-row gap-5 ">
              <div className="md:w-1/3 w-full">
                <OverviewCard
                  companyId={companyId}
                  name={company.name}
                  price={`${company.stock_price.stock_price.toFixed(2)}`}
                  industry={company.industry.industry}
                  market_cap={`$${(company.market_cap / 1e9).toFixed(2)}`}
                  stock_price={
                    company.stock_price.stock_price
                      ? `$${company.stock_price.stock_price.toFixed(2)}`
                      : `N/A`
                  }
                />

                <h5 className="text-md md:text-xl bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-2 md:px-5 py-3 border flex flex-row font-regular justify-between hover:shadow">
                  About{" "}
                  <img
                    className="p-2 cursor-pointer border bg-[#E8FBF2] rounded-full"
                    src={(show ? DownIcon : UpIcon).src}
                    alt="open"
                    onClick={() => setShow(!show)}
                  />
                </h5>
                {show && <AboutCompanyCard description={company.description} />}

                <br />
              </div>

              <div className="md:w-2/3 w-full">
                <VisualcompanyCard />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const companyId = query.id;
  let company = null;
  let isSmallCap = false;

  if (companyId) {
    try {
      const res = await axios.get(
        `https://api.yieldvest.hng.tech/company/${companyId}`
      );
      if (res.status === 200) {
        company = res.data;
      }
    } catch (err) {
      try {
        if (err.response.status === 401) {
          isSmallCap = true;
        }
      } catch (e) {}

      console.log("Fetch failed for company: " + companyId);
    }
  }

  return {
    props: {
      companyId: companyId,
      company: company,
      isSmallCap: isSmallCap,
    },
  };
}

export default CompanyProfilePage;
