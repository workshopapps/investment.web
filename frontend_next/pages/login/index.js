import React, { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../../components/auth/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Login = ({ GOOGLE_CLIENT_ID }) => {
  const Inner = () => {
    const baseUrl = "https://api.yieldvest.hng.tech/auth/login";

    const navigate = useRouter();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [timeOut, setTimeout] = useState(false);
    const [redirected, setRedirected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { setAccessToken, setIsLoggedIn } = useContext(AuthContext);

    //form
    const [loginForm, setLoginForm] = useState({
      email: "",
      password: "",
    });

    const [passwordType, setPasswordType] = useState("password");

    //track changes in form
    const handleChange = (event) => {
      const { type, name, value, checked } = event.target;
      setLoginForm((prevState) => {
        return {
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        };
      });
    };

    //handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setisSubmit(true);
      setFormErrors(validate(loginForm));
    };

    const togglePassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
      } else {
        setPasswordType("password");
      }
    };

    const whenAuthenticated = (accessToken) => {
      setAccessToken(accessToken);
      setIsLoggedIn(true);
      sessionStorage.setItem("accessToken", accessToken);
    };

    //handle google OAUTH
    const handleGoogleSignIn = async (tokenResponse) => {
      setIsLoading(true);

      axios
        .get(
          `https://api.yieldvest.hng.tech/auth/google_auth?token=${tokenResponse.credential}`
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Login successful");
            whenAuthenticated(res.data.access_token);
            setIsLoading(false);

            setInterval(() => {
              setTimeout(true);
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
      console.log(err);
      setIsLoading(false);
    };

    const post = () => {
      setIsLoading(true);

      const config = {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
        validateStatus: (statusCode) => statusCode >= 200 && statusCode <= 500,
      };

      axios
        .post(
          baseUrl,
          {
            grant_type: "",
            username: loginForm.email,
            password: loginForm.password,
            scope: "",
            client_id: "",
            client_secret: "",
          },
          config
        )
        .then((response) => {
          setIsLoading(false);

          if (response.status === 200) {
            toast.success("Login successful");
            whenAuthenticated(response.data.access_token);
            setInterval(() => {
              setTimeout(true);
            }, 1500);
          } else if (response.status === 401) {
            toast.error(response.data.detail);
          } else {
            toast.error("Login failed");
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Login failed");
        });
    };

    //validation
    const validate = (values) => {
      const errors = {};
      const regex = /^[^@]+@[^@]+\.[^@]{2,}$/i;

      if (!values.email) {
        errors.email = "required";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format";
      }

      if (!values.password) {
        errors.password = "required";
      }

      return errors;
    };

    useEffect(() => {
      if (redirected || !timeOut) return;

      let destination = "/";
      if (sessionStorage.getItem("destination")) {
        setRedirected(true);
        destination = sessionStorage.getItem("destination");
        sessionStorage.removeItem("destination");
      }

      navigate.push(destination);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeOut]);

    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit === true) {
        setLoginForm((prevState) => {
          return {
            ...prevState,
            email: "",
            password: "",
          };
        });
        post();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formErrors]);

    return (
      <div className="flex flex-col items-center justify-center w-full h-full pb-5 md:flex-col md:bg-desk-signup md:justify-center md:gap-4">
        <div className="w-full p-5 md:flex md:flex-col md:justify-center md:items-center md:w-520 md:bg-white md:rounded-lg md:px-8">
          <div className="flex flex-col text-center px-10 md:w-full md:px-1 md:items-center">
            <h1 className="font-HauoraBold text-xl mb-5 md:text-2xl">
              Welcome back
            </h1>
            <p className="md:text-left">
              Log in to your account - enjoy exclusive features and more
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 mt-7 md:w-full md:justify-center"
          >
            <div className="flex flex-col gap-1">
              <label className="font-HauoraBold">Email</label>
              <input
                type={"email"}
                placeholder={"Enter your email..."}
                className={
                  !formErrors?.email
                    ? "border border-gray-400 px-3 h-12 rounded-md text-base focus:outline-green-400 focus:shadow"
                    : "border border-red-400 px-3 h-12 rounded-md text-base focus:outline-red-400 focus:shadow"
                }
                onChange={handleChange}
                value={loginForm.email}
                name={"email"}
              />
              {formErrors?.email && (
                <p className="text-sm font-italic text-red-500">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="font-HauoraBold">Password</label>
              <input
                type={passwordType}
                placeholder={"Enter your password..."}
                className={
                  !formErrors?.password
                    ? "border border-gray-400 px-3 h-12 rounded-md text-base  focus:outline-green-400 focus:shadow"
                    : "border border-red-400 px-3 h-12 rounded-md text-base  focus:outline-red-400 focus:shadow"
                }
                onChange={handleChange}
                value={loginForm.password}
                name={"password"}
              />
              {formErrors?.password && (
                <p className="text-sm font-italic text-red-500">
                  {formErrors?.password}
                </p>
              )}
              <div
                className={
                  !formErrors?.password
                    ? "absolute right-5 bottom-3 cursor-pointer"
                    : "absolute right-5 bottom-9 cursor-pointer"
                }
                onClick={togglePassword}
              >
                {" "}
                <i>
                  {passwordType === "password" ? (
                    <AiOutlineEyeInvisible size={"20px"} color={"#A3AAB2"} />
                  ) : (
                    <AiOutlineEye size={"20px"} color={"#A3AAB2"} />
                  )}
                </i>
              </div>
            </div>
            <div className="flex flex-row w-full justify-center items-center">
              <Link
                href={"/forgot-password"}
                className="text-sm text-green-500 hover:text-green-600 transition ease-in-out delay-100 md:text-base"
              >
                Forgot password?
              </Link>
            </div>
            <button
              className="bg-green-500 text-white h-11 rounded-md mt-2 hover:bg-green-600 transition ease-in-out delay-100"
              style={{ color: "#1F2226", textAlign: "center" }}
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
                "Log in"
              )}
            </button>
          </form>

          <div className="w-full flex flex-col items-center gap-2">
            <p className="text-gray-600 mt-5">Or login with</p>
            <GoogleLogin
              onSuccess={handleGoogleSignIn}
              onError={handleGoogleSignInError}
            />
          </div>

          <div className="flex justify-center text-sm mt-3 md:mt-5 md:text-base">
            <p>
              Don&apos;t have an account?{" "}
              <span className="text-green-500 font-HauoraBold cursor-pointer ml-1">
                <Link href={"/signup"}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout showFooter={false}>
      <Head>
        <title>Yieldvest - Login</title>
        <meta name="description" content="Login to your account!" />
      </Head>

      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Inner />
      </GoogleOAuthProvider>
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

export default Login;
