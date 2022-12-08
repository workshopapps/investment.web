/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CapCard from "../components/CapCard";
import dateFormat from "dateformat";
import NotSubscribedModal from "../components/subscription/NotSubscribedModal";
import { ToastContainer, toast } from "react-toastify";
import AuthContext from "../components/auth/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import CookieConsent from "react-cookie-consent";
import NotFoundImage from "../assets/images/not_found.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import NewsletterModal from "../components/newsletter/NewsletterModal";
import Newsletter from "../components/newsletter/Newsletter";

const Index = () => {
  const baseUrl = "https://api.yieldvest.hng.tech";
  const [stocks, setStocks] = useState(null);
  const [marketCap, setMarketCap] = useState("all");
  const [sector, setSector] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [sectors, setSectors] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [lastUpdateDate, setLastUpdateDate] = useState(null);
  const [showNotSubscribedModal, setShowNotSubscribedModal] = useState(false);
  const [popup, setPopup] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  const handleMarketCap = (e) => {
    e.preventDefault();
    setMarketCap(e.target.value);
  };

  const handleSector = (e) => {
    e.preventDefault();
    setSector(e.target.value);
    setIndustry("all");
  };

  const handleIndustry = (e) => {
    e.preventDefault();
    setIndustry(e.target.value);
  };

  const formatLastUpdateDate = (date) => {
    return dateFormat(date + "Z", "mmmm dS, yyyy hh:MM:ss TT");
  };

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 5000);
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}/company/sectors`)
      .then((res) => {
        setSectors(res.data);
        loadAllIndustries();
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reloadIndustriesForSector(sector);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectors]);

  useEffect(() => {
    reloadIndustriesForSector(sector);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sector]);

  useEffect(() => {
    if (marketCap === "low_market_cap_category") {
      setShowNotSubscribedModal(true);
    }
  }, [marketCap]);

  useEffect(() => {
    reloadRankedCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketCap, sector, industry]);

  const reloadRankedCompanies = () => {
    setStocks(null);
    const queries = [];

    if (marketCap !== "all")
      queries.push({ key: "category", value: marketCap });
    if (sector !== "all") queries.push({ key: "sector", value: sector });
    if (industry !== "all") queries.push({ key: "industry", value: industry });

    const params = {};
    queries.forEach((query) => {
      params[query["key"]] = query["value"];
    });

    axios
      .get(`${baseUrl}/company/ranking`, {
        params: params,
      })
      .then((res) => {
        setStocks(res.data);

        if (res.data) {
          setLastUpdateDate(
            formatLastUpdateDate(res.data[0].current_ranking.updated_at)
          );
        }
      })
      .catch((err) => console.log(err));
  };

  const loadAllIndustries = () => {
    const industryList = [];
    sectors.forEach((sector) => {
      sector.industries.forEach((industry) => {
        industryList.push(industry);
      });
    });

    setIndustries([...industryList]);
  };

  const reloadIndustriesForSector = (sectorId) => {
    if (sectorId === "all") {
      loadAllIndustries();
    } else {
      for (let i = 0; i < sectors.length; i++) {
        if (sectors[i].sector_id === sectorId) {
          const industryList = [];
          sectors[i].industries.forEach((industry) => {
            industryList.push(industry);
          });

          setIndustries([...industryList]);
          break;
        }
      }
    }
  };

  const onSuccess = () => {
    toast.success("Added to watch list");
  };

  const onFailure = () => {
    toast.error("Failed to add to the list");
  };

  const navigate = useRouter().push;

  return (
    <Layout isProtected disableStrictProtection>
      <Head>
        <title>Yieldvest - Top Recommended Stocks</title>
        <meta
          name="description"
          content="Get up to date recommendations on the best stocks to buy"
        />
      </Head>

      {!isLoggedIn && (
        <NotSubscribedModal
          isOpen={showNotSubscribedModal}
          onClose={() => setShowNotSubscribedModal(false)}
        />
      )}

      <ToastContainer />

      <section className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-center relative">
        <div className="px-[17px] text-white lg:px-[100px] pt-[7px] pb-[34px] md:py-[125px]">
          <div className="mb-[34px] md:mb-0 max-w-[321px] w-full sm:max-w-max">
            <h1 className="text-[20px] font-[600] leading-[28px] mb-[8px] max-w-[400px] sm:max-w-[623px] lg:max-w-[986px] w-full md:text-[57px] md:font-[400] md:leading-[64px] md:mb-[24px] ">
              We Track, Analyze
              <br />
              & Recommend the best
              <br />
              stocks for you.
            </h1>
            <p className="text-[13px] font-[400] leading-[18px] mb-[8px] md:max-w-[520px] lg:max-w-[600px] w-full md:text-[16px] md:leading-[24px]">
              We provide well curated information to help you make smarter
              <br />
              investment decisions based on{" "}
              <span style={{ color: "#1BD47B", fontWeight: "bold" }}>
                Fundamental Analysis
              </span>
            </p>
          </div>
          <div className="flex justify-start items-center md:hidden">
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#1BD47B] py-[8px] px-[20px] rounded-[8px] inline-block font-[600] text-[13px] text-[#1F2226] leading-[20px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="xl:py-14 sm:px-10  p-5 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#5c5a5a] text-base lg:text-2xl font-bold mb-4 md:mb-14 space-y-[10px]">
            Recommended Stocks to Invest in Today
            {lastUpdateDate != null && (
              <span
                className="text-base lg:ml-8 block lg:inline"
                style={{ fontSize: ".9rem" }}
              >
                Last Updated on{" "}
                <span
                  style={{ color: "rgb(27, 180, 123)", fontWeight: "bold" }}
                >
                  {lastUpdateDate}
                </span>
              </span>
            )}
          </p>
          <div className="space-y-6 ">
            <div className="flex flex-col md:flex-row items-left md:items-center">
              <div className="flex mb-3 md:mb-0">
                <h3 className="text-sm lg:text-2xl font-semibold text-[#66717e] pr-8">
                  Filter by:
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 filter-category">
                <select
                  name="marketCap"
                  onChange={handleMarketCap}
                  className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded"
                >
                  <option value="all">All Cap</option>
                  <option value="high_market_cap_category">Large Cap </option>
                  <option value="mid_market_cap_category">Mid Cap </option>
                  <option value="low_market_cap_category">Small Cap </option>
                </select>
                <select
                  name="sector"
                  onChange={handleSector}
                  className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded"
                >
                  <option value="all">All Sectors</option>
                  {sectors.map((sector, index) => (
                    <option value={sector.sector_id} key={index}>
                      {sector.sector}
                    </option>
                  ))}
                </select>
                <select
                  name="industry"
                  onChange={handleIndustry}
                  value={industry}
                  className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded"
                >
                  <option value="all">All Industry</option>
                  {industries.map((industry, index) => (
                    <option value={industry.industry_id} key={index}>
                      {industry.industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {!stocks && (
              <div
                className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "30px",
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

            {stocks && stocks.length === 0 && (
              <div
                //className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "30px",
                }}
              >
                <div>
                  <img src={NotFoundImage.src} alt="Stocks not found" />
                </div>
              </div>
            )}

            {stocks && stocks.length !== 0 && (
              <div className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10">
                {stocks.map((item, index) => (
                  <CapCard
                    key={index}
                    logo={item.profile_image}
                    abbr={item.company_id}
                    name={item.name}
                    PERatio={item.dividend_yield}
                    marketCap={item.market_cap}
                    stockPrice={item.stock_price}
                    rank={item.category}
                    index={index}
                    sector={item.industry}
                    link={`/company/${item.company_id}`}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        cookieName="Yieldvest Cookies Consent"
        style={{
          background: "#2B373B",
        }}
        buttonStyle={{
          color: "#1F2226",
          fontSize: "16px",
          background: "rgb(27, 212, 123)",
          padding: ".5rem 2rem",
          borderRadius: "10px",
        }}
        expires={365}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span
          style={{
            fontSize: "15px",
            textDecoration: "underline",
            color: "#1BD47B",
          }}
        >
          <Link href="/cookies">Check cookies policy.</Link>
        </span>
      </CookieConsent>

      <section className="xl:py-14 sm:px-1  p-5 bg-[#F5F5F5]">
        <div className="flex justify-center items-center">
          <Newsletter />
        </div>
      </section>
      {
        popup && <div className="mx-7 p-5 "><NewsletterModal trigger={popup} setTrigger={setPopup} />
      </div>
      }
    </Layout>
  );
};

export default Index;
