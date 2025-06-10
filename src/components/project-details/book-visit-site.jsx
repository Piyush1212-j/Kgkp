import React, { useState } from "react";
import CommonImage from "@/assets/images/project-details.png";

const BookVisitSite = ({ data }) => {
  const [date, setDate] = useState("");

  return (
    <section className="flex flex-col md:flex-row h-auto w-full">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-auto">
        <img
          src={data?.image || CommonImage}
          alt="Project View"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 bg-[#666666] text-white flex items-center justify-center py-6 md:py-12 px-6 md:px-16 sm:!pr-40 pr-6">
        <form className="w-full">
          <h2 className="text-2xl md:text-4xl lg:font-bold lg:mb-10 mb-4">Book A Site Visit</h2>
          <p className="text-sm mb-6">Enter Your Details To Get Callback</p>

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
            <label className="text-xs block mb-1" htmlFor="email">EMAIL*</label>
            <input
              id="email"
              type="email"
              className="w-full border-b border-white bg-transparent outline-none placeholder-white text-white"
              placeholder="EMAIL*"
              required
            />
          </div>

          <div className="flex gap-8 mb-10">
            <div className="w-1/2 relative">
              {!date && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-sm pointer-events-none">
                  DATE*
                </span>
              )}
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full border-b border-white bg-transparent outline-none text-white ${!date ? "text-transparent" : ""}`}
                required
              />
            </div>

            <div className="w-1/2">
              <input
                id="contact"
                type="tel"
                className="w-full border-b border-white bg-transparent outline-none placeholder-white text-white"
                placeholder="CONTACT*"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 font-semibold tracking-wide"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookVisitSite;
