/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from "react";
import Layout from "../../../components/Layout";
import shareIcon from "../../../assets/company-profile/share.svg";
import rankIcon from "../../../assets/company-profile/ranked.svg";
import arrowup from "../../../assets/company-profile/arrow-up.svg";
import breadcrumbIcon from "../../../assets/breadcrumb.svg";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import dateformat from "dateformat";
import { ordinalSuffixOf } from "../../../utils/helpers";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import authHooks from "../../../components/auth/AuthHooks";
import AuthContext from "../../../components/auth/AuthContext";
import Share from "../../../components/CompanyProfile/Share";
import { useRouter } from "next/router";

const History = ({ company, companyId, rankings: rnks }) => {
  const router = useRouter()
  const [restrictToCategory, setRestrictToCategory] = useState(false);
  const [restrictToSector, setRestrictToSector] = useState(false);
  const [restrictToIndustry, setRestrictToIndustry] = useState(false);
  const [rankings, setRankings] = useState(rnks);
  const [isLoading, setIsLoading] = useState(false);
  const apiService = authHooks.useApiService();
  const { isLoggedIn, accessToken } = useContext(AuthContext);
  const [showShare, setShowShare] = React.useState(false);
  const currentStock = `https://yieldvest.hng.tech/company/${companyId}`;

  const getRankingHistory = () => {
    setIsLoading(true);

    apiService(accessToken, isLoggedIn)
      .get(`/company/${companyId}/ranking/history`, {
        params: {
          restrict_to_category: restrictToCategory,
          restrict_to_sector: restrictToSector,
          restrict_to_industry: restrictToIndustry,
        },
      })
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          setRankings(res.data);
        } else {
          toast.error("An internal error occurred");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error("An internal error occurred");
      });
  };

  useEffect(() => {
    getRankingHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restrictToCategory, restrictToSector, restrictToIndustry]);

  return (
    <Layout>
      <Head>
        {company && <title>{company.name} Ranking History</title>}
        <meta name="description" content={`${company.name} Ranking History`} />
      </Head>

      {showShare && <Share close={setShowShare} currentStock={currentStock} />}

      <div className="bg-white md:bg-[#F5F5F5] font-Hauora h-full px-[1em] md:px-[100px]">
        <div className="hidden md:flex mt-0 pt-5 text-primaryGray text-sm md:text-md space-x-1">
          <Link href="/">
            <span className="hover:text-primary102">Stock</span>
          </Link>
          <Image src={breadcrumbIcon.src} alt="breadcrumb" width={20} height={20} />
          <Link href={`/company/${companyId}`}>
            <span className="hover:text-primary102">Company Profile</span>
          </Link>
          <Image src={breadcrumbIcon.src} alt="breadcrumb" width={20} height={20} />

          <span>Ranking History</span>

        </div>
        <div className="flex flex-col md:flex-col gap-5 ">
          <div className="w-full flex flex-row justify-between">
            <div>
              <h3 className="text-lg text-primaryGray pt-10 md:text-2xl">
                Ranking History
              </h3>
              <p className="text-sm md:text-xl text-[#5C5A5A] pt-2">
                {company.name}
              </p>
            </div>

            <div className="flex flex-row mt-auto gap-2 ">
              <div className="text-left text-xs md:text-lg rounded-lg text-primary104 px-4 py-3 border flex flex-row font-regular justify-between gap-0 md:gap-2 bg-primary102">
                <span className="hidden md:block">View Ranking History </span>
                <img
                  className="m-auto w-5 md:w-auto h-5 md:h-auto bg-none"
                  src={rankIcon.src}
                  alt="open"
                />
              </div>
              <button
                className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-regular justify-between gap-0 md:gap-10 hover:shadow-md"
                onClick={() => setShowShare(true)}
              >
                <span className="hidden md:block">Share This Stock </span>
                <img
                  className="m-auto w-5 md:w-auto h-5 md:h-auto bg-none"
                  src={shareIcon.src}
                  alt="open"
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="hidden md:block w-full my-4 h-2" />

        <div className="mt-10 flex flex-row gap-2">
          <button
            className={`md:px-6 px-3 py-3 text-sm md:text-base hover:shadow rounded-md mr-0 md:mr-4 ${restrictToCategory ? "bg-primary102" : "bg-white"
              } w-[180px]`}
            onClick={() => setRestrictToCategory(!restrictToCategory)}
          >
            Market Cap
          </button>
          <button
            className={`md:px-6 px-3 py-3 text-sm md:text-base hover:shadow rounded-md mr-0 md:mr-4 ${restrictToSector ? "bg-primary102" : "bg-white"
              } w-[180px]`}
            onClick={() => setRestrictToSector(!restrictToSector)}
          >
            Sector
          </button>
          <button
            className={`md:px-6 px-3 py-3 text-sm md:text-base hover:shadow rounded-md mr-0 md:mr-4 ${restrictToIndustry ? "bg-primary102" : "bg-white"
              } w-[180px]`}
            onClick={() => setRestrictToIndustry(!restrictToIndustry)}
          >
            Industry
          </button>
        </div>
        <div className="mt-8">
          <div className="m-auto">
            <p style={{ color: "#525A65" }}>
              Note: The ranking below is the position of this stock compared to{" "}
              other stocks
            </p>

            {!isLoading &&
              rankings.map((ranking, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm md:text-base p-2 bg-white my-[1rem] px-0 md:px-[1rem] py-[1rem]"
                >
                  <p className="font-regular">
                    {dateformat(ranking.date, "mmm dd, yyyy")}
                  </p>
                  <p>
                    <img src={arrowup.src} alt="" />
                  </p>
                  <p className="text-[#2D955D]">
                    Ranked {ordinalSuffixOf(ranking.position)} out of{" "}
                    {ranking.companies_compared_with}
                  </p>
                </div>
              ))}

            {isLoading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
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
            )}
          </div>

          {/* <div className="flex justify-center items-center">
            <p>prev</p>
            <p className="bg-[#66E2A7] inline p-3 rounded mx-1">1 of 5</p>
            <p>next</p>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const companyId = query.id.toUpperCase();
  let company = {};
  let rankings = [];

  if (companyId) {
    try {
      let res = await axios.get(`${baseApiUrl}/company/${companyId}`);
      if (res.status === 200) {
        company = res.data;
      }

      res = await axios.get(
        `${baseApiUrl}/company/${companyId}/ranking/history`
      );
      if (res.status === 200) {
        rankings = res.data;
      }
    } catch (err) {
      //console.log(err);
      console.log("Fetch failed for company: " + companyId);
    }
  }

  return {
    props: {
      companyId: companyId,
      company: company,
      rankings: rankings,
    },
  };
}

export default History;
