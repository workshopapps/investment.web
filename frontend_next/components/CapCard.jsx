/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Eye from "../assets/index/eye.svg";
import Chart from "../assets/index/fundamentals-chart.svg";
import Graph from "../assets/index/stock-price-graph.svg";
import inactiveEye from "../assets/index/default-eye.svg";
import Modal from "./Modal";
import Tippy from "@tippyjs/react";
import authHooks from "./auth/AuthHooks";
import "tippy.js/dist/tippy.css";
import AuthContext from "./auth/AuthContext";
import { TailSpin } from "react-loader-spinner";
import Link from "next/link";
import MiniBarChartCard from "./Charts/MiniBarChart";
import { useRouter } from "next/router";

const CapCard = ({
  logo,
  abbr,
  name,
  marketCap,
  stockPrice,
  link,
  index,
  sector,
  onSuccess,
  onFailure,
}) => {
  const [fundamentalModal, setFundamentalModal] = useState(false);
  const [priceModal, setPriceModal] = useState(false);
  const [hoverFundamental, setHoverFundamental] = useState(false);
  const [hoverPrice, setHoverPrice] = useState(false);
  const [isInWatchlist, setInWatchlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { accessToken, isLoggedIn } = useContext(AuthContext);
  const apiService = authHooks.useApiService();
  const router = useRouter();

  const handlePriceModal = () => {
    setPriceModal(!priceModal);
  };

  const handleFundamentalModal = () => {
    setFundamentalModal(!fundamentalModal);
  };

  const handleFundamentalHover = () => {
    setHoverFundamental(!hoverFundamental);
  };

  const handlePriceHover = () => {
    setHoverPrice(!hoverPrice);
  };

  const addToWatchList = (id, onSuccess, onFailure) => {
    if (isLoading) return;
    setIsLoading(true);

    apiService(accessToken)
      .post(`/user/watchlist/${id}`)
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          onSuccess();
          setInWatchlist(true);
        } else {
          onFailure();
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        onFailure();
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      apiService(accessToken)
        .get(`/user/in_watchlist/${abbr}`)
        .then((res) => {
          if (res.status === 200) {
            setInWatchlist(true);
          } else {
            setInWatchlist(false);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, isLoggedIn]);

  return (
    <div className="border-2 border-[#B0B2B7] hover:border-[#96ebc2] rounded-[10px] p-6 h-full font-Hauora">
      <div>
        <div className="-mt-6 -ml-6 rounded-tl-lg rounded-br-lg flex justify-center items-center bg-[#1F2226] w-8 h-8 text-white text-xl font-Hauora font-bold">
          {index + 1}
        </div>
        <div className="flex gap-5 mb-6 justify-between">
          <div className="flex gap-5">
            <div className="bg-[#E8FBF2] rounded-full h-6 lg:h-[50px] w-6 lg:w-[50px]">
              <img src={logo} alt={abbr} />
            </div>
            <div className="">
              <p className="text-[#333946] font-normal text-lg">{abbr}</p>
              <p
                className="text-[#139757] font-normal text-sm"
                style={{ cursor: "pointer" }}
                onClick={() => router.push(link)}
              >
                {name}
              </p>
              <p className="text-[#545964] font-semibold text-sm">{sector}</p>
            </div>
          </div>
          {!isInWatchlist && (
            <div
              className="bg-[#B8F2D650] hover:bg-[#B8F2D6] text-[#292D32] font-normal text-2xl rounded-full cursor-pointer w-11 h-11 items-center flex justify-center"
              onClick={() => addToWatchList(abbr, onSuccess, onFailure)}
            >
              {isLoading ? (
                <TailSpin
                  height="40"
                  width="40"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                <Tippy
                  content={<span className="">Add to watchlist</span>}
                  placement="bottom"
                >
                  <span>+</span>
                </Tippy>
              )}
            </div>
          )}
        </div>
        <div className="space-y-2">
          {/* Desktop view */}
          <span onClick={handlePriceModal}>
            <div className="hidden lg:flex font-semibold text-[#66717E] w-fit text-xs lg:text-base mb-6 items-center cursor-pointer">
              <p
                onMouseEnter={handlePriceHover}
                onMouseLeave={handlePriceHover}
                className={
                  !hoverPrice
                    ? `text-[#B0B2B7] font-normal pr-4`
                    : `font-normal pr-4 text-[#49DD95]`
                }
              >
                PRICE{" "}
              </p>
              <p className="cursor-pointer">
                <Tippy
                  content={<span className="">See details</span>}
                  placement="bottom"
                >
                  <img
                    src={hoverPrice ? Eye.src : inactiveEye.src}
                    alt="eye"
                    className="w-5 h-6 transition duration-200"
                    onMouseEnter={handlePriceHover}
                    onMouseLeave={handlePriceHover}
                    style={{
                      filter: !hoverPrice ? "" : "",
                      transition: ".2s ease",
                    }}
                  />
                </Tippy>
              </p>
            </div>
          </span>
          {/* Mobile view */}
          <span onClick={handlePriceModal}>
            <div className="flex lg:hidden font-semibold text-[#66717E] text-xs lg:text-base mb-6 items-center cursor-pointer">
              <p
                className={
                  !hoverPrice
                    ? `text-[#B0B2B7] font-normal pr-4`
                    : `font-normal pr-4 text-[#49DD95]`
                }
              >
                PRICE{" "}
              </p>
              <p className="cursor-pointer">
                <img
                  src={hoverPrice ? Eye.src : inactiveEye.src}
                  alt="eye"
                  className="w-5 h-6"
                />
              </p>
            </div>
          </span>
          <div className="flex justify-between text-xs lg:text-base">
            <p className="text-[#66717E] font-normal">Stock Price </p>
            <p className="text-[#333946] text-semibold">
              ${stockPrice.toFixed(2)}
            </p>
          </div>
          <div className="p-2">
            <div className="w-full bg-[#B0B2B7] h-[1px]"></div>
          </div>
          {/* Desktop view */}
          <div>
            <span className="w-2" onClick={handleFundamentalModal}>
              <div className="hidden lg:flex w-fit font-semibold text-[#66717E] text-xs lg:text-base mb-[34px] mt-2 cursor-pointer items-center">
                <p
                  onMouseEnter={handleFundamentalHover}
                  onMouseLeave={handleFundamentalHover}
                  className={
                    !hoverFundamental
                      ? `text-[#B0B2B7] font-normal pr-4`
                      : `font-normal pr-4 text-[#49DD95]`
                  }
                >
                  FUNDAMENTALS{" "}
                </p>{" "}
                <p className="cursor-pointer">
                  <Tippy
                    content={<span className="">See details</span>}
                    placement="bottom"
                  >
                    <img
                      src={hoverFundamental ? Eye.src : inactiveEye.src}
                      alt="eye"
                      className="w-5 h-6 transition duration-200"
                      onMouseEnter={handleFundamentalHover}
                      onMouseLeave={handleFundamentalHover}
                      style={{
                        filter: !hoverFundamental ? "text-[#49DD95]" : "",
                        transition: ".2s ease",
                      }}
                    />
                  </Tippy>
                </p>
              </div>
            </span>
          </div>
          {/* Mobile view */}
          <span onClick={handleFundamentalModal}>
            <div className="flex lg:hidden font-semibold text-[#66717E] text-xs lg:text-base mb-[34px] mt-2 cursor-pointer items-center">
              <p
                className={
                  !hoverFundamental
                    ? `text-[#B0B2B7] font-normal pr-4`
                    : `font-normal pr-4 text-[#49DD95]`
                }
              >
                FUNDAMENTALS{" "}
              </p>{" "}
              <p>
                <img
                  src={hoverFundamental ? Eye.src : inactiveEye.src}
                  alt="eye"
                  className="w-5 h-6"
                />
              </p>
            </div>
          </span>
          <div className="flex justify-between text-xs lg:text-base">
            <p className="text-[#66717E] font-normal">Market Cap </p>
            <p className="text-[#333946] text-semibold">
              ${(marketCap / 1000000000).toFixed(2)}B
            </p>
          </div>
        </div>
        <Link href={link}>
          <div className="text-[#0F7544] mt-7 font-semibold cursor-pointer underline underline-offset-2 text-center hover:underline-offset-4 transition duration-500">
            See Company Profile
          </div>
        </Link>
      </div>
      {priceModal && (
        <Modal passedFunc={priceModal} setPassedFunc={setPriceModal}>
          {/* <div>
                        <p className="text-[#B0B2B7] font-normal pl-2 pb-6 text-xs lg:text-base">
                            PRICE{' '}
                        </p>
                    </div>
                    <div className="flex justify-between text-xs lg:text-base">
                        <p className="text-[#66717E] font-normal">Stock Price </p>
                        <p className="text-[#333946] text-semibold">${stockPrice.toFixed(2)}</p>
                    </div> */}
          <div
            className="flex text-center text-xs lg:text-base mt-2 w-full"
            style={{ justifyContent: "center" }}
          >
            {/* <img
              src={Graph.src}
              alt="fundamentals chart"
              className="h-[170px] w-full"
            /> */}
            N/A
          </div>
          <Link href={link}>
            <div className="text-[#0F7544] mt-7 font-semibold cursor-pointer underline text-center text-xs lg:text-base">
              See Company Profile
            </div>
          </Link>
        </Modal>
      )}
      {fundamentalModal && (
        <Modal
          passedFunc={fundamentalModal}
          setPassedFunc={setFundamentalModal}
        >
          <div>
            <p className="text-[#B0B2B7] font-normal pb-2 text-xs lg:text-sm">
              FUNDAMENTALS{" "}
            </p>
          </div>
          <div className="flex justify-between text-xs lg:text-sm">
            <p className="text-[#66717E] font-normal">Market Cap </p>
            <p className="text-[#333946] text-semibold">
              ${(marketCap / 1000000000).toFixed(2)}B
            </p>
          </div>
          <hr className="mt-2" />
          <div className="flex h-10 flex-row text-left text-xs pt-4 gap-x-2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.50032" cy="8.33333" r="8.33333" fill="#1BD47B" />
            </svg>
            Profit($bn)
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.50032" cy="8.33333" r="8.33333" fill="#000000" />
            </svg>
            Income($bn)
          </div>
          <MiniBarChartCard companyId={abbr} />
          <Link href={link}>
            <div className="text-[#0F7544] mt-2 font-semibold cursor-pointer underline text-center text-xs lg:text-base">
              See Company Profile
            </div>
          </Link>
        </Modal>
      )}
    </div>
  );
};

CapCard.propTypes = {
  logo: PropTypes.string,
  abbr: PropTypes.string,
  name: PropTypes.string,
  marketCap: PropTypes.number,
  stockPrice: PropTypes.number,
  PERatio: PropTypes.number,
  rank: PropTypes.string,
  link: PropTypes.string,
  sector: PropTypes.string,
  index: PropTypes.number,
};

export default CapCard;
