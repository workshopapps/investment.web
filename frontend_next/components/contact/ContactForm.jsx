import React from "react";

const ContactForm = () => {
  const FormStyle = {
    background: "#000718",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "2rem",
  };
  return (
    <div>
      <form action="" style={FormStyle} className="rounded-lg md:my-0 my-6 ">
        <h2 className="text-left text-white">Send us a message</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-[100%] m-3 p-2 rounded-md outline-none  bg-transparent border-[#333946] border-[1px]"
          style={{ color: "white" }}
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="w-[100%] m-3 p-2 rounded-md outline-none bg-transparent border-[#333946]  border-[1px]"
          style={{ color: "white" }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="w-[100%] m-3 p-2 rounded-md outline-none bg-transparent border-[1px] border-[#333946] "
          style={{ color: "white" }}
        ></textarea>
        <button className="w-[100%] m-3 p-2 rounded-md outline-none bg-[#1bd47b] text-white">
          send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
