import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSwimmer,
  faCarRear,
  faVectorSquare,
  faLeaf,
  faPaperPlane,
  faUsers,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Images } from "../data/Constants";

const Book = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 flex flex-col lg:flex-row gap-10 justify-between">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 space-y-8">
        <div className="text-center lg:text-left space-y-4">
          <h1 className="body-Fonts font-bold text-gray-600 text-base">Easy and Fast</h1>
          <h1 className="heading-Fonts text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-Fonts-Color font-bold">
            Book Your Next Trip in 3 Easy Steps
          </h1>
        </div>

        {/* Steps */}
        {[
          { icon: faVectorSquare, title: "Choose Destination", bg: "bg-amber-500" },
          { icon: faSwimmer, title: "Make Your Booking", bg: "bg-orange-600" },
          { icon: faCarRear, title: "Enjoy Your Trip", bg: "bg-sky-800" },
        ].map((step, idx) => (
          <div className="flex items-start gap-4" key={idx}>
            <div className={`${step.bg} rounded-[13px] flex justify-center items-center w-24 h-15`}>
              <FontAwesomeIcon icon={step.icon} size="lg" className="text-white" />
            </div>
            <div>
              <h1 className="body-Fonts font-bold text-gray-600 text-base">{step.title}</h1>
              <p className="body-Fonts text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-start">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-lg p-4">
          {/* Main Trip Image */}
          <img
            src={Images.TripCardImage}
            alt="Trip To Greece"
            className="w-full h-52 sm:h-64 object-cover rounded-xl"
          />

          {/* Trip Info */}
          <div className="mt-6">
            <h1 className="font-semibold body-Fonts text-lg">Trip To Greece</h1>
            <p className="text-sm text-gray-500 body-Fonts mt-1">
              14–29 June &nbsp; | &nbsp; by Robbin Joe
            </p>

            <div className="flex gap-4 text-gray-400 text-sm mt-4">
              {[faLeaf, faPaperPlane, faUsers].map((icon, i) => (
                <div
                  key={i}
                  className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center"
                >
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mt-3 body-Fonts">24 people going</p>
          </div>

          {/* Heart Icon */}
          <FontAwesomeIcon
            icon={faHeart}
            className="w-5 h-5 text-gray-400 absolute bottom-4 right-4 cursor-pointer"
          />

          {/* Ongoing Trip Overlay */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-md px-4 py-3 w-[90%] sm:w-[260px] lg:ml-40 md:ml-0 sm:ml-0">
            <div className="flex items-center gap-4">
              <img
                src={Images.UserImage}
                alt="Ongoing Trip"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-400 body-Fonts">Ongoing</p>
                <h4 className="font-medium text-sm body-Fonts">Trip to Rome</h4>
                <p className="text-xs text-indigo-600 font-semibold">
                  40% <span className="text-black body-Fonts">completed</span>
                </p>
                <div className="w-full bg-gray-200 h-1 rounded-full mt-1">
                  <div className="bg-indigo-600 h-1 rounded-full" style={{ width: "40%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
