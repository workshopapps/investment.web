import React, { useState, useEffect, useContext } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Layout from "../../components/Layout";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import AuthContext from "../../components/auth/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import SuccessModal from "../../components/Password/ForgotPwd/SuccessModal";

const Signup = ({ GOOGLE_CLIENT_ID }) => {
  const [showModal, setShowModal] = useState(false);

  const Inner = () => {
    const baseUrl = "https://api.yieldvest.hng.tech/auth/signup";

    const navigate = useRouter().push;
    const [passwordType, setPasswordType] = useState("password");
    const [signupForm, setSignUpForm] = useState({
      email: "",
      name: "",
      password: "",
    });
    const [googleUserToken, setGoogleUserToken] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [timeOut, setTimeout] = useState(false);
    const [timeOutGoogle, setTimeoutGoogle] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { setAccessToken, setIsLoggedIn } = useContext(AuthContext);

    //tracking form changes
    const handleChange = (event) => {
      const { name, value } = event.target;
      setSignUpForm((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    };

    //handle form submit
    const handleSubmit = (e) => {
      e.preventDefault();
      setisSubmit(true);
      setFormErrors(validate(signupForm));
    };

    //post to the backend
    const post = () => {
      setIsLoading(true);

      axios
        .post(baseUrl, {
          email: signupForm.email,
          name: signupForm.name,
          password: signupForm.password,
        })
        .then(function (response) {
          setIsLoading(false);

          if (response.status === 200) {
            setShowModal(true);
            toast.success("Signed up successfully");
            setInterval(() => {
              setTimeout(true);
            }, 1500);
          } else {
            toast.error("Signup failed");
            console.log(response);
          }
        })
        .catch(function (error) {
          setIsLoading(false);
          console.log(error);
          toast.warn("Account already exists. Kindly proceed to login");
        });
    };

    const whenAuthenticated = (accessToken) => {
      setAccessToken(accessToken);
      setIsLoggedIn(true);
      sessionStorage.setItem("accessToken", accessToken);
    };

    //handle google OAUTH
    const handleGoogleSignIn = async (tokenResponse) => {
      setIsLoading(true);
      setGoogleUserToken(tokenResponse);

      axios
        .get(
          `https://api.yieldvest.hng.tech/auth/google_auth?token=${tokenResponse.credential}`
        )
        .then((res) => {
          setIsLoading(false);

          if (res.status === 200) {
            toast.success("Login successful");
            whenAuthenticated(res.data.access_token);
            setInterval(() => {
              setTimeoutGoogle(true);
            }, 1500);
          } else {
            toast.error("Authentication failed");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Authentication failed");
        });
    };

    const handleGoogleSignInError = (err) => {
      setIsLoading(false);
      console.log(err);
    };

    //toggle password
    const togglePassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
      } else {
        setPasswordType("password");
      }
    };

    //getting the manual inputs
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit === true) {
        setSignUpForm((prevState) => {
          return {
            ...prevState,
            name: "",
            email: "",
            password: "",
          };
        });
        post();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formErrors]);

    const validate = (values) => {
      const errors = {};
      const regex = /^[^@]+@[^@]+\.[^@]{2,}$/i;

      if (!signupForm.name) {
        errors.name = "Required";
      }

      if (!signupForm.email) {
        errors.email = "Required";
      }

      if (!signupForm.password) {
        errors.password = "Required";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format";
      }
      return errors;
    };

    if (timeOut) {
      navigate("/login");
    }
    if (timeOutGoogle) {
      navigate("/");
    }

    return (
      <div className="mb-12 md:overflow-hidden h-full md:mb-0 md:bg-desk-signup md:flex md:flex-col md:justify-center md:items-center md:gap-4 md:pb-12">
        <div className="flex flex-col justify-center items-center md:flex-row-reverse md:items-start md:bg-white md:w-520 md:rounded-md md:pb-8">
          <div className="w-5/6 mt-8 flex flex-col gap-3 md:gap-2 lg:px-5 lg:gap-3 lg:w-full">
            <h1 className="font-HauoraBold text-xl text-center tracking-wide">
              Create Account
            </h1>
            <form
              className="flex flex-col gap-3 w-full md:justify-center md:place-self-center md:w-95"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-0.5">
                <label className="font-HauoraBold text-sm">Name</label>
                <input
                  type={"text"}
                  placeholder={"Full Name"}
                  className={
                    formErrors?.name
                      ? "border border-red-500 px-3 h-11 rounded-md text-base focus:outline-red-400 focus:shadow"
                      : "border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                  }
                  value={signupForm.name}
                  name={"name"}
                  onChange={handleChange}
                />
                {formErrors && (
                  <p className="text-red-500 text-sm ">{formErrors?.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-HauoraBold text-sm">Email</label>
                <input
                  type={"email"}
                  placeholder={"Email Address"}
                  className={
                    formErrors?.email
                      ? "border border-red-500 px-3 h-11 rounded-md text-base focus:outline-red-400 focus:shadow"
                      : "border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                  }
                  value={signupForm.email}
                  name={"email"}
                  onChange={handleChange}
                />
                {formErrors && (
                  <p className="text-red-500 text-sm ">{formErrors?.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-0.5 relative">
                <label className="font-HauoraBold text-sm">Password</label>
                <input
                  type={passwordType}
                  placeholder={"Password"}
                  className={
                    formErrors?.password
                      ? "border border-red-500 px-3 h-11 rounded-md text-base focus:outline-red-400 focus:shadow"
                      : "border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                  }
                  value={signupForm.password}
                  name={"password"}
                  onChange={handleChange}
                />
                <div
                  className={
                    formErrors?.email === null
                      ? "absolute right-5 bottom-8 cursor-pointer"
                      : "absolute right-5 bottom-4 cursor-pointer"
                  }
                  onClick={togglePassword}
                >
                  {" "}
                  <div
                    className={
                      !formErrors?.password
                        ? "absolute right-0 bottom-0 cursor-pointer"
                        : "absolute right-0 bottom-5 cursor-pointer"
                    }
                    onClick={togglePassword}
                  >
                    {" "}
                    <i>
                      {passwordType === "password" ? (
                        <AiOutlineEyeInvisible
                          size={"20px"}
                          color={"#A3AAB2"}
                        />
                      ) : (
                        <AiOutlineEye size={"20px"} color={"#A3AAB2"} />
                      )}
                    </i>
                  </div>
                </div>
                {formErrors && (
                  <p className="text-red-500 text-sm ">
                    {formErrors?.password}
                  </p>
                )}
              </div>
              <button
                className="capitalize bg-green-500 text-white h-11 rounded-md mt-2 hover:bg-green-600 transition ease-in-out delay-100"
                style={{ color: "#1F2226" }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <ThreeDots
                      height="50"
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
                  "create account"
                )}
              </button>
            </form>

            <div className="flex w-full justify-center text-gray-500">
              <p>Or create an account with</p>
            </div>

            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSignIn}
                onError={handleGoogleSignInError}
              />
            </div>

            <div className="flex justify-center text-sm md:place-self-start md:text-base md:place-self-center">
              <p className="text-gray-500">
                Already have an account?{" "}
                <span className="text-green-500 font-HauoraBold cursor-pointer ml-1">
                  <Link href={"/login"}>Log in</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout showFooter={false}>
      <div className="h-full relative sm:static ">
        <Head>
          <title>Yieldvest - My Account</title>
        </Head>

        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <Inner />
        </GoogleOAuthProvider>
        {showModal && (
          <SuccessModal
            title={"Check your Email  for account verification"}
            message={
              "A link  has been sent to your email address to verify your account"
            }
            status={"success"}
            close={() => {
              setShowModal(false);
            }}
          />
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    },
  };
}

export default Signup;
