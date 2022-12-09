import React from "react";
import { useForm } from "react-hook-form";

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="flex items-center justify-center  bg-[#000718] rounded-lg">
      <div className="flex md:px-[150px] py-[60px] items-center text-white ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="flex pt-2 font-semibold text-2xl text-[#E8FBF2]">
            Don’t miss out !
          </h1>

          <p className="flex pt-4 text-center font-normal text-base md:w-[504px] md:px-8">
            Subscribe to our weekly Email Newsletter to receive stock tips and
            recommendations
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row md:w-[506px]  h-[110px] md:h-[56px] mt-4 border p-1 border-[#A3AAB2] rounded-lg"
          >
            <input
              type="email"
              className="flex w-full md:w-4/5 h-full px-2 text-base text-white border-none focus:outline-none focus:border-none bg-[#000718]"
              placeholder="Enter email address"
              {...register("email", { required: true })}
            />

            <button className="w-full hover:scale-90 transition duration-500 h-[60px] md:mt-0 md:w-[160px] md:h-[100%]  text-sm font-normal text-black bg-[#1BD47B] border rounded-lg border-none focus:outline-none focus:border-none ml-auto">
              Keep me updated
            </button>
          </form>
          {errors.email && (
            <span className="flex text-red-500">Email is required</span>
          )}
        </div>
      </div>
    </div>
  );
}
