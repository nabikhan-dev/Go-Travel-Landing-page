import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SubscribeSection = () => {
  return (
    <div className="relative bg-[#F2EFFF] sm:mx-w-auto  mx-4 md:mx-auto max-w-6xl p-30 overflow-hidden rounded-tl-[130px] rounded-2xl ">
      {/* Top Right Paper Plane Icon */}
      <div className="absolute top-0  right-0 bg-gradient-to-r from-[#5f2eff] to-[#9f60ff] w-10 flex items-center justify-center h-10 rounded-full shadow-lg">
        <FontAwesomeIcon icon={faPaperPlane} className="text-white w-4 h-4" />
      </div>

      {/* Decorative Circles */}
      <div className="absolute -left-20 -bottom-20 w-[300px] h-[300px] border border-violet-300 rounded-full opacity-30 z-0" />
      <div className="absolute -right-20 -top-20 w-[300px] h-[300px] border border-violet-300 rounded-full opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
          Subscribe to get information, latest news and other <br />
          interesting offers about <span className="text-[#5f2eff] font-bold">Jadoo</span>
        </h2>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <div className="flex items-center bg-white rounded-xl px-4 py-3 w-full md:w-[400px] shadow-md">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#ff6a5b] to-[#ff9068] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
