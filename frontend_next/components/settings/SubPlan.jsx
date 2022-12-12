import Link from "next/link";
import React, { useCallback } from "react";
import Basicsub from "../../assets/settings/basicsub.svg";
import basicmobile from "../../assets/settings/mobileplan.svg";
import standardsub from "../../assets/settings/standardsub.svg";
import premsub from "../../assets/settings/premsub.svg";
import authHooks from "../auth/AuthHooks";
import AuthContext from "../auth/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

import { FaCheckCircle } from "react-icons/fa";
import { subscriptionData } from "../../store/subscriptionData/subData";
import { useRouter } from "next/router";

export default function SubPlan() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    target: "",
    features: []
  })

  const apiService = authHooks.useApiService();
  const { accessToken, subscription } = React.useContext(AuthContext);

  const openPortal = () => {
    setIsLoading(true);

    apiService(accessToken)
      .get(`/subscription/portal`)
      .then((res) => {
        setIsLoading(false);

        if (res.status === 200) {
          window.location = res.data.portal_url;
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const fetchData = useCallback(() => {
    console.log(subscription, "SUB")
    if (subscription.type && subscription.type.startsWith("prem")) {
      setData({
        name: "Premium",
        target: subscriptionData['Premium']['target'],
        features: [...subscriptionData['Premium']['features']]
      })
    } else if (subscription.type && subscription.type.startsWith("pro")) {
      setData({
        name: "Pro",
        target: subscriptionData['Pro']['target'],
        features: [...subscriptionData['Pro']['features']]
      })
    } else {
      setData({
        name: "Basic",
        target: subscriptionData['Basic']['target'],
        features: [...subscriptionData['Basic']['features']]
      })
    }
  }, [data, subscriptionData]);

  const subTypeButtons = () => {
    if (data.name === "Premier") {
      return (
        <button
          className="text-black bg-primary102 text-base py-4 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
          disabled={isLoading}
          onClick={openPortal}
        >
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ThreeDots
                height="18"
                width="auto"
                radius="5"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          ) : (
            "Manage Subscription"
          )}
        </button>
      )
    } else if (data.name === "Pro") {
      return (
        <React.Fragment>
          <button
            className="text-primary102 border-primary102 text-base py-4 mr-5 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
            disabled={isLoading}
            onClick={() => router.push("/subscription")}
          >
            {isLoading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ThreeDots
                  height="18"
                  width="auto"
                  radius="5"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            ) : (
              "Upgrade Plan"
            )}
          </button>
          <button
            className="text-black bg-primary102 text-base py-4 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
            disabled={isLoading}
            onClick={openPortal}
          >
            {isLoading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ThreeDots
                  height="18"
                  width="auto"
                  radius="5"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            ) : (
              "Manage Subscription"
            )}
          </button>
        </React.Fragment>
      )
    } else {
      return (
        <button
          className="text-black bg-primary102 text-base py-4 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
          disabled={isLoading}
          onClick={() => router.push("/subscription")}
        >
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ThreeDots
                height="18"
                width="auto"
                radius="5"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          ) : (
            "Upgrade Plan"
          )}
        </button>
      )
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [fetchData]);

  if (!subscription) {
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
    <div className="flex justify-center items-center font-Haoura flex-col mt-1 mb-[140px]">
      <div className="max-w-[1024px] w-full">
        <div className="mb-6">
          <h1 className="text-4xl">Your Plan </h1>
        </div>
        <div className="flex flex-col w-full h-full mt-6">

          <div className="bg-primary102 text-white rounded-lg p-6 hover:shadow-md">
            <div className="flex flex-col justify-left gap-4 border-b-2 border-white">
              <h1 className="text-4xl">{data.name}</h1>
              <p className="py-2 mb-2 font-semibold">{data.target}</p>
            </div>
            <div className="mt-6 grid grid-rows-1 md:grid-cols-2">
              {data.features.map((element, index) => (
                <li key={index} className="text-md flex flex-row items-left py-2">
                  <FaCheckCircle fill="white" className="mt-1" />
                  <p className="pl-3">{element}</p>
                </li>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-end mt-3" style={{ textAlign: "right" }}>
              {subTypeButtons()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
