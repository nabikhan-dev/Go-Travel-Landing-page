import React from "react";
import CardComponents from "../components/Card"; // Default import
import { Images } from "../data/Constants";

 

interface CardItem {
  image: string;
  location: string;
  price: string;
  duration: string;
}

const cardData: CardItem[] = [
  {
    image: Images.CardImage1, 
    location: "Paris, France",
    price: "$1200",
    duration: "7 Days",
  },
  {
    image: Images.CardImage2,
    location: "Rome, Italy",
    price: "$950",
    duration: "5 Days",
  },
  {
    image: Images.CardImage3,
    location: "Tokyo, Japan",
    price: "$1800",
    duration: "10 Days",
  },

];



const Category = () => {
  
  return (
    <div className=" items-center justify-center mt-40 max-w-screen-xl mx-auto 
     ">
      <div>
        <p className="capitalize text-center font-semibold body-Fonts text-gray-400">
        Top Selling
        </p>
        <h1 className="capitalize text-center text-5xl font-semibold heading-Fonts pt-5 heading-Fonts-Color">
          We Offer Best Services
        </h1>
      </div>

    <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-20 z-50">
        {cardData.map((card: CardItem)=>(
            <CardComponents.DestinationCard
            key={card.location}
            image={card.image}
            price={card.price}
            location={card.location}
            duration={card.duration}/>
        ))}
    
    </div>
    
    </div>
  );
};

export default Category;
