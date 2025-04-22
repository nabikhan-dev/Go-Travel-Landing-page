import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
interface CardProps {
  img: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ img, title, description }) => (
  <div className="bg-white p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 relative w-[267px] h-[314px]">
    <div className="flex flex-col items-center text-center space-y-4 h-full">
      {/* Add content inside the red circle (e.g., an icon or text) */}
      <div className="w-10 h-10 flex items-center justify-center rounded-tl-[20px] rounded-br-[20px] bg-red-100 absolute top-4 left-4">
        {/* Optional: You can put an icon here */}
      </div>
      {/* Adjust image size */}
      <img src={img} alt={title} className="w-24 h-24 object-contain z-50" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

interface DestinationCardProps {
  image: string;
  location: string;
  price: string;
  duration: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  location,
  price,
  duration,
}) => {
  return (
    <div className="w-[315px] h-[457px] rounded-[24px] overflow-hidden shadow-xl bg-white">
      {/* Top Image */}
      <img
        src={image}
        alt={location}
        className="w-full h-[80%] object-cover"
      />

      {/* Text Section */}
      <div className="px-4 pt-4">
        <div className="flex justify-between items-center text-[#14183E] font-medium text-[20px] body-Fonts">
          <span>{location}</span>
          <span className="text-[#5E6282] text-sm body-Fonts">{price}</span>
        </div>

        {/* Duration Row */}
        <div className="flex items-center mt-2 text-[#5E6282] text-sm body-Fonts">
        <FontAwesomeIcon icon={faLocationArrow} className="mr-4" />
          {duration}
        </div>
      </div>
    </div>
  );
};

export default { Card, DestinationCard }; // Export as default object
