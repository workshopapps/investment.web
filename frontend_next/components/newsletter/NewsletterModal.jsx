/* eslint-disable @next/next/no-img-element */
import React, { useEffect, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import Cancel from "../../assets/cancel.svg";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Newsletter({ trigger, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post(
        "https://api.yieldvest.hng.tech/newsletter-subscription",
        {},
        {
          params: {
            user_email: data.email,
          },
        }
      )
      .then((res) => {
        setIsLoading(false);

        if (res.status === 200) {
          onClose();
          toast.success("Subscribed successfully!");
          sessionStorage.setItem("subscribed", true);
        } else {
          toast.error("Failed to subscribe");
        }
      })
      .catch((err) => {
        //console.log(err);
        setIsLoading(false);
        toast.error("Failed to subscribe");
      });
  };

  return (
    <Transition.Root show={trigger} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#0a0b0d] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden shadow-xl transition-all flex justify-center items-center">
                <div className="flex justify-center items-center flex-col">
                  <div
                    className="mb-[8px] flex justify-end items-center rounded-lg w-full"
                    onClick={onClose}
                  >
                    <img
                      src={Cancel.src}
                      alt="Close"
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  <div className="bg-white max-w-[784px] flex flex-col items-center justify-start rounded-[8px] px-[12px] md:px-[54px] pt-[60px] pb-[34px]">
                    <h1 className="flex pt-2 font-semibold text-2xl text-[#000718]">
                      Don’t miss out !
                    </h1>

                    <p className="flex pt-4 text-center font-normal text-base md:px-[5rem] text-[#000718]">
                      Subscribe to our weekly Email Newsletter to receive stock
                      tips and recommendations
                    </p>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col w-full md:flex-row md:w-[100%] md:h-[56px] mt-4 md:border p-1 md:border-[#A3AAB2] rounded-lg"
                    >
                      <input
                        type="email"
                        className="flex w-full md:w-4/5 mb-[16px] md:mb-0 h-[52px] md:h-auto px-2 text-base text-[#000718] border border-[#A3AAB2] rounded-lg md:border-none focus:outline-none focus:border-none bg-[#ffffff]"
                        placeholder="Enter email address"
                        {...register("email", { required: true })}
                      />

                      <button className="w-full h-[52px] mt-1 md:mt-0 md:w-[160px] md:h-full  text-sm font-normal text-black bg-[#1BD47B] border rounded-lg border-none focus:outline-none focus:border-none ml-auto">
                        {isLoading ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
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
                          "Keep me updated"
                        )}
                      </button>
                    </form>
                    {errors.email && (
                      <div
                        className="mt-1"
                        style={{ width: "100%", textAlign: "left" }}
                      >
                        <span className="text-red-500">Email is required</span>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
