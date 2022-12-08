import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import shareIcon from "../../../assets/company-profile/share.svg";
import rankIcon2 from "../../../assets/company-profile/ranked.svg";
import arrow2 from "../../../assets/company-profile/arrow-2.svg";
import arrowup from "../../../assets/company-profile/arrow-up.svg";
import arrowdown from "../../../assets/company-profile/arrow-down.svg";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import dateformat from "dateformat";
import { ordinalSuffixOf } from "../../../utils/helpers";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const History = ({ company, companyId, rankings: rnks }) => {
  const [restrictToCategory, setRestrictToCategory] = useState(false);
  const [restrictToSector, setRestrictToSector] = useState(false);
  const [restrictToIndustry, setRestrictToIndustry] = useState(false);
  const [rankings, setRankings] = useState(rnks);
  const [isLoading, setIsLoading] = useState(false);

  const getRankingHistory = () => {
    setIsLoading(true);

    axios
      .get(
        `https://api.yieldvest.hng.tech/company/${companyId}/ranking/history`,
        {
          params: {
            restrict_to_category: restrictToCategory,
            restrict_to_sector: restrictToSector,
            restrict_to_industry: restrictToIndustry,
          },
        }
      )
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
  }, [restrictToCategory, restrictToSector, restrictToIndustry]);

  return (
    <Layout>
      <Head>
        <title>{company.name} Ranking History</title>
        <meta name="description" content={`${company.name} Ranking History`} />
      </Head>

      <ToastContainer />

      <div className="bg-[#F5F5F5] h-full px-[1em] md:px-[100px]">
        <Link href="/">
          <div className="flex mt-0 pt-5 text-[#525A65] text-sm md:text-md">
            Stock <span className="inline-flex mx-2 ">&gt; </span>Company
            Profile <span className="inline-flex mx-2 ">&gt; </span> Ranking
            History
          </div>
        </Link>
        <div className="flex flex-col md:flex-col gap-5 ">
          <div className="w-full flex flex-row justify-between">
            <div>
              <h3 className="text-2xl md:text-2xl text-[#5C5A5A] pt-10">
                Ranking History
              </h3>
              <p
                className="text-xl md:text-1xl text-[#5C5A5A] pt-0"
                style={{
                  textTransform: "uppercase",
                }}
              >
                {company.name}
              </p>
            </div>

            <div className="flex flex-row mt-auto gap-2 ">
              <div className="text-left text-xs md:text-lg rounded-xl text-[#000718] px-4 py-3 border flex flex-row font-regular justify-between gap-0 md:gap-10 bg-[#1BD47B]">
                <span className="hidden md:block">View Ranking History </span>
                <img
                  className="m-auto w-[10em] md:w-auto h-10 md:h-auto bg-[none]"
                  src={rankIcon2.src}
                  alt="open"
                />
              </div>
              <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-regular justify-between gap-0 md:gap-10 hover:shadow-md">
                <span className="hidden md:block">Share This Stock </span>
                <img
                  className="m-auto w-[10em] md:w-auto h-10 md:h-auto bg-none"
                  src={shareIcon.src}
                  alt="open"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ height: "1px", background: "#5C5A5A", marginTop: "20px" }}
        />

        <div className="mt-[3.5rem]">
          <button
            className={`md:px-6 px-3 py-3 rounded-md mr-4 ${
              restrictToCategory ? "bg-[#66E2A7]" : "bg-white"
            } w-[180px]`}
            onClick={() => setRestrictToCategory(!restrictToCategory)}
          >
            Market Cap
          </button>
          <button
            className={`md:px-6 px-3 py-3 rounded-md mr-4 ${
              restrictToSector ? "bg-[#66E2A7]" : "bg-white"
            } w-[180px]`}
            onClick={() => setRestrictToSector(!restrictToSector)}
          >
            Sector
          </button>
          <button
            className={`md:px-6 px-3 py-3 rounded-md mr-4 ${
              restrictToIndustry ? "bg-[#66E2A7]" : "bg-white"
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
                  className="flex justify-between p-2 bg-white my-[1rem] px-[1rem] py-[1rem]"
                >
                  <p className="font-regular">
                    {dateformat(ranking.date, "mmm dd")}
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
  const companyId = query.id;
  let company = {};
  let rankings = [];

  if (companyId) {
    try {
      let res = await axios.get(
        `https://api.yieldvest.hng.tech/company/${companyId}`
      );
      if (res.status === 200) {
        company = res.data;
      }

      res = await axios.get(
        `https://api.yieldvest.hng.tech/company/${companyId}/ranking/history`
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
