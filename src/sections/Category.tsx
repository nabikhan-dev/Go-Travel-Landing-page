import React from "react";
import { Card } from "../components/Card"; // Assuming Card is a named export
import { Images } from "../data/Constants";

interface CardItem {
  img: string;
  title: string;
  description: string;
}

const cardData: CardItem[] = [
  {
    img: Images.Satellite,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    img: Images.Airplane,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    img: Images.Microphone,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    img: Images.Setting,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers",
  },
];

const Category: React.FC = () => {
  return (
    <div className="items-center justify-center max-w-screen-xl mx-auto lg:mt-30 sm:mt-10 md:mt-20">
      <div>
        <p className="capitalize text-center font-semibold body-Fonts text-gray-400">
          Category
        </p>
        <h1 className="capitalize text-center text-5xl font-semibold heading-Fonts pt-5 heading-Fonts-Color">
          We Offer Best Services
        </h1>
      </div>
      {/* Centered Grid Container */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 mt-20 z-50">
        {cardData.map((card: CardItem) => (
          <Card
            key={card.title} // Unique key for each card (title in this case)
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
        {/* Background or extra visual element */}
        <div className="w-20 h-25 rounded-t-full secondary-Color shadow-xl absolute mt-70 mr-145 -z-50"></div>
      </div>
    </div>
  );
};

export default Category;
