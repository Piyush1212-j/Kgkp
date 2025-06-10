import React, { useState } from "react";
import CommonImage from "@/assets/images/project-details.png";

const BlogContact = ({ data }) => {
  const [date, setDate] = useState("");

  return (
    <section className=" h-auto w-full">
      {/* Left Image */}
      <div className="w-full lg:h-[250px] h-[300px]">
        <img
          src={data?.image || CommonImage}
          alt="Project View"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full bg-[#666666] text-white flex items-center justify-center py-4 md:py-8 px-6 md:px-8 pr-6">
        <form className="w-full">
          <h2 className="text-2xl md:text-2xl text-center lg:font-bold mb-2">Book A Site Visit</h2>
          <p className="text-sm mb-8 text-center">Enter Your Details To Get Callback</p>

          <div className="mb-8">
            <input
              id="name"
              type="text"
              className="w-full border-b border-white bg-transparent outline-none placeholder-white text-white"
              placeholder="NAME*"
              required
            />
          </div>

          <div className="mb-8">
            <input
              id="email"
              type="email"
              className="w-full border-b border-white bg-transparent outline-none placeholder-white text-white"
              placeholder="EMAIL*"
              required
            />
          </div>

          <div className="mb-8">

            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full border-b border-white bg-transparent outline-none text-white ${!date ? "text-transparent" : ""}`}
              required
            />
          </div>

          <div className="mb-8">
            <input
              id="contact"
              type="tel"
              className="w-full border-b border-white bg-transparent outline-none placeholder-white text-white"
              placeholder="CONTACT*"
              required
            />
          </div>

          <button
            type="submit"
            className=" bg-white text-black py-2.5 px-10 mx-auto flex justify-center font-semibold tracking-wide"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogContact;
