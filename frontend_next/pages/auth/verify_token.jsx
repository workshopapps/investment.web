import React from "react";
import Layout from "../../components/Layout";
import SuccessModal from "../../components/Password/ResetPassword/SuccessModal";

const verify_token = () => {
  return (
    <Layout showFooter={false}>
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

export default verify_token;
