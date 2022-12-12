import Link from "next/link";
import React from "react";
import Basicsub from "../../assets/settings/basicsub.svg";
import basicmobile from "../../assets/settings/mobileplan.svg";
import standardsub from "../../assets/settings/standardsub.svg";
import premsub from "../../assets/settings/premsub.svg";
import authHooks from "../auth/AuthHooks";
import AuthContext from "../auth/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

export default function SubPlan() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [plan, setPlan] = React.useState(Basicsub.src);
  const [planMobile, setPlanMobile] = React.useState(basicmobile.src);

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

  const subTypeButtons = () => {
    console.log(subscription)
    if (subscription && subscription.isActive) {
      if (subscription.type.startsWith("prem")) {
        return (
          <button
            className="text-primaryGray bg-primary102  font-semibold text-base py-4 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
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
      }
      if (subscription.type.startsWith("pro")) {
        return (
          <React.Fragment>
            <button
              className="text-primary102 border-primary102 font-semibold text-base py-4 mr-5 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
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
                "Upgrade Plan"
              )}
            </button>
            <button
              className="text-primaryGray bg-primary102  font-semibold text-base py-4 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
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
      }
    } else {
      return (
        <button
          className="text-primaryGray bg-primary102 font-semibold text-base py-4 px-[45px] border-[1px] rounded-lg hover:shadow-lg"
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
            "Upgrade Plan"
          )}
        </button>
      )
    }
  }

  React.useEffect(() => {
    if (subscription && subscription.isActive) {
      if (subscription.type.startsWith("pro")) {
        setPlan(standardsub.src);
      }
      if (subscription.type.startsWith("prem")) {
        setPlan(premsub.src);
      }
    }
  }, [subscription]);

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
          <picture>
            <source media="(min-width: 768px)" srcSet={plan} />
            <source media="(max-width: 767px)" srcSet={planMobile} />
            <img
              src={planMobile}
              alt="basicmobile"
              className="w-full h-full mb-4"
            />
          </picture>

          <div className="bg-primary102 text-white rounded-lg p-6">
            <h1 className="text-4xl">Basic</h1>
            <p>For basic users</p>
            <hr className="h-2" />
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
