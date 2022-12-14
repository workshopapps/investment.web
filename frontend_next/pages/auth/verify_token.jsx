import React from "react";
import Layout from "../../components/Layout";
import SuccessModal from "../../components/Password/ResetPassword/SuccessModal";
import axios from "axios";
import AuthContext from "../../components/auth/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import Head from "next/head";

const VerifyToken = () => {
  const [verified, setVerified] = React.useState(false);
  const router = useRouter();
  const { baseApiUrl } = React.useContext(AuthContext);

  React.useEffect(() => {
    const token = router.query.token;

    axios
      .get(`${baseApiUrl}/auth/verify_token`, {
        params: {
          token,
        },
        validateStatus: (statusCode) => statusCode >= 200 && statusCode <= 500,
      })
      .then((res) => {
        if (res.status === 200) {
          setVerified(true);
        } else {
          toast.error("Email verification failed");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email verification failed");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!verified) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ThreeDots
          height="25"
          width="30"
          color="#fff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <Layout showFooter={false}>
      <Head>
        <title>Yieldvest - Verify email</title>
      </Head>

      <div className="relative sm:static h-full bg-desk-signup">
        <SuccessModal
          title={"Email Verified"}
          message={
            "Congratulations! Your email has been successfully verified."
          }
          status={"success"}
        />
      </div>
    </Layout>
  );
};

export default VerifyToken;
