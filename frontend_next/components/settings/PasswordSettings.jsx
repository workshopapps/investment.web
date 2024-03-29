import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import authHooks from "../../components/auth/AuthHooks";
import AuthContext from "../../components/auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import UserAvatar from "../Nav/UserAvatar";
import { ThreeDots } from "react-loader-spinner";

export default function PasswordSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [validationError, setValidationError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiService = authHooks.useApiService();
  const { accessToken } = useContext(AuthContext);

  const onSubmit = (data) => {
    setValidationError(false);

    if (data.newpassword !== data.confirmpassword) {
      setValidationError(true);
    } else {
      setIsLoading(true);
      apiService(accessToken)
        .patch("auth/update_password", {
          current_password: data.oldpassword,
          new_password: data.newpassword,
        })
        .then((res) => {
          setIsLoading(false);
          if (res.status === 200) {
            toast.success("Password updated!");
            reset();
          } else if (res.status === 400) {
            toast.error("Incorrect current password");
          } else {
            toast.error("Failed to update password");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to update password");
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="flex justify-center items-center mt-[44px] px-[17px]">
      <div className="max-w-[1024px] w-full">
        <div className="md:flex justify-start items-start gap-[48px]">
          <div
            className="hidden md:flex"
            style={{
              alignItems: "start",
            }}
          >
            <UserAvatar width="200px" height="200px" fontSize="50px" />
          </div>
          <div className="flex flex-col md:flex-col w-full h-full pb-[70px]">
            <div className="flex flex-col w-full h-full mb-6">
              <h1 className="text-base font-normal text-[#000718]">
                Change a strong password and don’t reuse it for other accounts{" "}
              </h1>
              <p className="text-sm font-normal text-[#525A65]">
                Changing your password will sign you out on your devices with
                some exceptions
              </p>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col w-full h-full ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col w-full h-full mb-8">
                    <label
                      htmlFor="oldpassword"
                      className="text-sm font-normal text-[#1F2226]"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="oldpassword"
                      id="oldpassword"
                      placeholder="Old Password"
                      className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                      {...register("oldpassword", {
                        required: "Current password is required",
                      })}
                    />
                    {errors.oldpassword && (
                      <p className="text-red-500 text-xs italic">
                        {errors.oldpassword.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full h-full mb-8">
                    <label
                      htmlFor="newpassword"
                      className="text-sm font-normal text-[#1F2226]"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newpassword"
                      id="newpassword"
                      placeholder="New Password"
                      className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                      {...register("newpassword", {
                        required: "New password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.newpassword && (
                      <p className="text-red-500 text-xs italic">
                        {errors.newpassword.message}
                      </p>
                    )}
                    {validationError && (
                      <p className="text-red-500 text-xs italic">
                        Passwords do not match
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full h-full mb-8">
                    <label
                      htmlFor="confirmpassword"
                      className="text-sm font-normal text-[#1F2226]"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="New Password"
                      className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
                      {...register("confirmpassword", {
                        required: "password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.confirmpassword && (
                      <p className="text-red-500 text-xs italic">
                        {errors.confirmpassword.message}
                      </p>
                    )}
                    {validationError && (
                      <p className="text-red-500 text-xs italic">
                        Passwords do not match
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full h-full mb-8">
                    <button
                      className="bg-[#19C170] text-black  font-semibold text-base py-3 px-6  w-[200px] h-[50px] rounded-md"
                      disabled={isLoading}
                      type="submit"
                    >
                      {isLoading ? (
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <ThreeDots
                            height="30"
                            width="50"
                            radius="9"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          />
                        </div>
                      ) : (
                        "Change Password"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//     return (
//         <div className="flex px-[200px]">
//             <div className="flex flex-col w-full h-full pl-1 md:pl-10 pr-3 md:pr-[100px]  pt-[56px] pb-[100px]">
//                 <div className="flex flex-col w-full h-full mb-6 font-semibold text-base text-black">
//                     <h1 className="text-4xl">Reset Password</h1>
//                 </div>
//                 <div className="flex flex-col w-full h-full">
//                     <form>
//                         <div className="flex flex-col w-full h-full mb-8">
//                             <label
//                                 htmlFor="currentpassword"
//                                 className="text-base font-semibold text-[#000000]">
//                                 Old Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="oldpassword"
//                                 id="oldpassword"
//                                 placeholder="Old password"
//                                 className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
//                             />
//                         </div>
//                         <div className="flex flex-col w-full h-full mb-8">
//                             <label
//                                 htmlFor="newpassword"
//                                 className="text-base font-semibold text-[#000000]">
//                                 New Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="newpassword"
//                                 id="newpassword"
//                                 placeholder="New password"
//                                 className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
//                             />
//                             <label
//                                 htmlFor="newpassword"
//                                 className="text-base font-semibold text-[#000000]">
//                                 Confirm Password
//                             </label>
//                             <input
//                                 type="password"
//                                 name="confirmpassword"
//                                 id="cofirmpassword"
//                                 placeholder="Confirm new password"
//                                 className="w-full h-10 px-4 mt-2 text-base text-black border border-[#A3AAB2] rounded-lg focus:outline-none focus:border-[#E84E4E]"
//                             />
//                         </div>
//                     </form>
//                     <div className="flex flex-col md:ml-auto mt-[70px]">
//                         <button
//                             type="submit"
//                             onClick={handleSubmit}
//                             className="bg-[#19C170] text-black  font-semibold text-base py-4 px-[54px] rounded-md">
//                             Reset Password
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
