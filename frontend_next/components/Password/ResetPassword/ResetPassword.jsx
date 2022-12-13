import React, { useState } from "react";
import Layout from "../../Layout";
import ResetModal from "./SuccessModal";
import axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "../../auth/AuthContext";

const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [oldPwd, setOldPwd] = useState("");
  const [pwdTouched, setPwdTouched] = useState(false);
  const { baseApiUrl } = React.useContext(AuthContext);

  const { code } = useRouter().query;

  const formHandler = async (e) => {
    e.preventDefault();
    setShowModal(true);

    const body = JSON.stringify({
      new_password: newPwd,
      code: code,
    });
    try {
      const response = await axios.post(
        `${baseApiUrl}/auth/finalize_password_reset`,
        body,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response) {
        console.log(response);
        setStatus("success");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <Layout showFooter={false}>
        <div className="relative md:static md:bg-desk-signup h-screen font-hauora flex flex-col items-center md:justify-center ">
          <div>
            <div className="px-4 md:px-10 py-12 bg-white md:rounded-lg">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl text-[#000718]">Password Reset</h4>
                <p className="text-[#545964] pt-0">
                  Set your new password with strong characters and always keep
                  it secured.
                </p>
              </div>
              <form
                onSubmit={formHandler}
                action=""
                className="flex flex-col gap-6 mt-3"
              >
                <div className="flex flex-col gap-1">
                  <label className="" htmlFor="">
                    New Password
                  </label>
                  <input
                    className="w-full border rounded-[4px] h-[56px] px-4 placeholder:text-sm"
                    type="password"
                    placeholder="Enter new password"
                    onChange={(e) => setOldPwd(e.target.value)}
                    value={oldPwd}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="" htmlFor="">
                    Confirm Password
                  </label>
                  <input
                    className="w-full border rounded-[4px] h-[56px] px-4 placeholder:text-sm"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setNewPwd(e.target.value)}
                    value={newPwd}
                    onBlur={() => setPwdTouched(true)}
                  />
                </div>
                {oldPwd !== newPwd && pwdTouched && (
                  <p className="text-red-500">Passwords not the same</p>
                )}

                <button
                  disabled={newPwd.length < 3 || oldPwd !== newPwd}
                  className="bg-primary102 h-[52px] font-semibold w-full text-[#1F2226] text-center rounded-lg text-sm"
                >
                  Save Password
                </button>
              </form>
            </div>
          </div>
          {showModal && (
            <ResetModal
              status={status}
              close={() => {
                setShowModal(false);
                setStatus("");
              }}
            />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default ResetPassword;
