import React, { useContext, useState } from "react";
import AuthContext from "../auth/AuthContext";
import UserAvatar from "../Nav/UserAvatar";
import authHooks from "../auth/AuthHooks";
import { ToastContainer, toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

export default function ProfileSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, accessToken, setUser } = useContext(AuthContext);
  const apiService = authHooks.useApiService();

  const updateEmail = (evt) => {
    evt.preventDefault();
    const email = evt.target[1].value;
    if (!email) {
      toast.error("Enter an email address");
    } else {
      setIsLoading(true);

      apiService(accessToken)
        .patch("/auth/update_email", { email })
        .then((res) => {
          setIsLoading(false);

          if (res.status === 200) {
            toast.success("Email updated");
            setUser({ ...user, email: email });
          } else {
            toast.error("Failed to update email");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Failed to update email");
        });
    }
  };

  return (
    <div className="flex  mt-3 md:px-[200px] flex-start">
      <ToastContainer />
      <div className="flex flex-col md:flex-col w-full h-full mx-2 md:pl-10 md:pr-[100px] pt-[56px] pb-[70px]">
        <div
          className="flex flex-col md:flex-row"
          style={{
            alignItems: "start",
          }}
        >
          <div className="flex w-2/5 ml-[180px] md:m-0">
            <UserAvatar width="200px" height="200px" fontSize="50px" />
          </div>

          <div className="flex flex-col md:ml-[60px] w-full h-full ">
            <form onSubmit={updateEmail}>
              <div className="flex flex-col w- h-full mb-8">
                <label
                  htmlFor="name"
                  className="text-sm font-normal text-[#1F2226]"
                  style={{
                    color: "gray",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  disabled
                  placeholder="Enter your name"
                  value={user.name}
                  className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                  style={{
                    color: "gray",
                  }}
                />
              </div>
              <div className="flex flex-col w-full h-full mb-8">
                <label
                  htmlFor="location"
                  className="text-sm font-normal text-[#1F2226]"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  defaultValue={user.email}
                  placeholder="you@example.com"
                  className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                />
              </div>

              <div className="mt-2" style={{ textAlign: "right" }}>
                <button
                  type="submit"
                  className=" text-[#19C170]  font-semibold text-base py-4 px-[54px] border-[1px] border-[#1BD47B] w-[230px] h-[55px] rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <ThreeDots
                        height="30"
                        width="50"
                        radius="9"
                        color="#19C170"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    </div>
                  ) : (
                    "Update Email"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
