/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Layout from "../../../components/Layout";
import AboutCompanyCard from "../../../components/CompanyProfile/AboutCompany";
import UpIcon from "../../../assets/landingPage/icons/up.svg";
import DownIcon from "../../../assets/landingPage/icons/down.svg";
import shareIcon from "../../../assets/company-profile/share.svg";
import breadcrumbIcon from "../../../assets/breadcrumb.svg";
import rankIcon from "../../../assets/company-profile/ranking.svg";
import OverviewCard from "../../../components/CompanyProfile/OverviewCard";
import VisualcompanyCard from "../../../components/CompanyProfile/AnalysisCard";
import axios from "axios";
import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import NotSubscribedModal from "../../../components/subscription/NotSubscribedModal";
import { useRouter } from "next/router";
import authHooks from "../../../components/auth/AuthHooks";
import AuthContext from "../../../components/auth/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import Share from "../../../components/CompanyProfile/Share";


const CompanyProfilePage = ({ company: comp, companyId, isSmallCap }) => {
  const [showAbout, setShowAbout] = React.useState(false);
  const [company, setCompany] = React.useState(comp);
  const [showShare, setShowShare] = React.useState(false);
  const router = useRouter();
  const apiService = authHooks.useApiService();
  const { isLoggedIn, accessToken, subscription } = useContext(AuthContext);
  const currentStock = `http://yieldvest.hng.tech/company/${companyId}`;

  React.useEffect(() => {
    if (isLoggedIn && subscription && isSmallCap) {
      apiService(
        accessToken,
        isLoggedIn && subscription && subscription.canViewSmallCaps,
        false
      )
        .get(`/company/${companyId}`)
        .then((res) => {
          if (res.status === 200) {
            setCompany(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, isLoggedIn, subscription]);

  // if (
  //   (!company && !isLoggedIn) ||
  //   (subscription && !subscription.canViewSmallCaps && isSmallCap)
  // ) {
  //   return (
  //     <Layout>
  //       <Head>
  //         <title>Small Cap Stock Fundamentals</title>
  //         <meta
  //           name="description"
  //           content="Get up to date recommendations on the best stocks to buy"
  //         />
  //       </Head>

  //       <NotSubscribedModal isOpen={true} onClose={() => router.back()} />
  //     </Layout>
  //   );
  // }

  if (/*isLoggedIn &&*/ !company) {
    return (
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
    );
  }

  return (
    <Layout>
      <Head>
        {company && <title>{company.name} Stock Fundamentals</title>}
        <meta
          name="description"
          content="Get up to date recommendations on the best stocks to buy"
        />
      </Head>
      {showShare && <Share close={setShowShare} currentStock={currentStock} />}
      <div className="bg-white md:bg-[#f5f5f5] font-Hauora">
        <div>

          <div className="hidden md:flex mt-0 pt-5 text-primaryGray text-sm md:text-md mx-[1em] md:mx-[100px] space-x-1">
            <Link href="/">
              <span className="hover:text-primary102">Stock</span>
            </Link>
            <Image src={breadcrumbIcon.src} alt="breadcrumb" width={20} height={20} />
            <span>Company Profile</span>
          </div>
          <div className="flex flex-col md:flex-col md:px-[100px] px-[1rem] gap-5 ">
            <div className="w-full flex flex-row justify-between">
              <div>
                <h1 className="text-lg text-primaryGray pt-10 md:text-2xl">
                  {company.name} Stock Fundamentals
                </h1>
                <p className="text-sm md:text-xl text-[#5C5A5A] pt-2">
                  Overview
                </p>
              </div>

              <div className="flex flex-row mt-auto gap-2">
                <Link
                  href={`/company/${companyId}/history`}
                  className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-lg text-[#5C5A5A] px-4 py-3 border flex flex-row font-regular justify-between gap-0 md:gap-2 hover:shadow-md"
                >
                  <span className="hidden md:block">View Ranking History </span>
                  <img
                    className="m-auto w-[5em] md:w-auto h-5 md:h-auto bg-none"
                    src={rankIcon.src}
                    alt="open"
                  />
                </Link>
                <button
                  className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl text-[#5C5A5A] px-4 py-3 border flex flex-row font-regular justify-between gap-0 md:gap-10 hover:shadow-md"
                  onClick={() => setShowShare(true)}
                >
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

                <h5 className="text-md md:text-xl bg-[#FFFFFF] rounded-md align-middle text-[#5C5A5A] px-2 md:px-8 py-3 flex flex-row font-regular justify-between hover:shadow">
                  About{" "}
                  <img
                    className="cursor-pointer"
                    src={(!showAbout ? DownIcon : UpIcon).src}
                    alt="open"
                    onClick={() => setShowAbout(!showAbout)}
                  />
                </h5>
                {showAbout && (
                  <AboutCompanyCard description={company.description} />
                )}

                <br />
              </div>

              <div className="md:w-2/3 w-full">
                <VisualcompanyCard
                  isLoggedIn={isLoggedIn}
                  accessToken={accessToken}
                />
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
  const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const companyId = query.id.toUpperCase();
  let company = null;
  let isSmallCap = false;

  if (companyId) {
    try {
      const res = await axios.get(`${baseApiUrl}/company/${companyId}`);
      if (res.status === 200) {
        company = res.data;
      }
    } catch (err) {
      try {
        if (err.response.status === 401) {
          isSmallCap = true;
        }
      } catch (e) { }

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
