import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../data/Constants";

interface Testimonial {
  id: number;
  name: string;
  position?: string;
  location?: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    image: Images.UserImage,
  },
  {
    id: 2,
    name: "Chris Thomas",
    position: "CEO of Red Button",
    quote:
      '"The product exceeded our expectations. The intuitive interface and robust features have significantly improved our workflow efficiency."',
    image: Images.UserImage,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Marketing Director",
    location: "New York, USA",
    quote:
      '"I\'ve recommended this solution to all my colleagues. The customer support team is responsive and the product keeps getting better with each update."',
    image: Images.UserImage,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getNextTestimonialIndex = () => {
    return activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
  };

  const nextTestimonialPreview = testimonials[getNextTestimonialIndex()];

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-30 ">
      <div className="flex flex-col md:flex-row  md:items-center gap-10">
        {/* Left: Heading */}
        <div className="md:w-1/2   heading-Fonts-Color  heading-Fonts">
          <p className="uppercase text-sm font-semibold mb-2 body-Fonts ">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What People Say
            <br className="hidden md:block" /> About Us.
          </h2>

          {/* Dots Pagination */}
          <div className="flex justify-center md:justify-start space-x-5 mt-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-indigo-900 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Testimonial Card */}
        <div className="md:w-1/2">
          {/* Main Testimonial Card */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl relative z-index-10">
            <div className="absolute -top-10 left-6 md:left-10">
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <div className="ml-20">
              <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed italic body-Fonts">
                {activeTestimonial.quote}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold heading-Fonts-Color body-Fonts">
                    {activeTestimonial.name}
                  </h4>
                  {activeTestimonial.location && (
                    <p className="text-gray-500 body-Fonts">
                      {activeTestimonial.location}
                    </p>
                  )}
                  {activeTestimonial.position && (
                    <p className="text-gray-500 body-Fonts ">
                      {activeTestimonial.position}
                    </p>
                  )}
                </div>
                <div className="flex flex-col border-l border-gray-200 pl-2 space-y-2 ">
                  <button
                    onClick={prevTestimonial}
                    className="p-1 text-gray-400 hover:text-heading-Fonts-Color "
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-1 text-gray-400 hover:text-heading-Fonts-Color"
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Next Preview Card */}
          <div
            className=" p-12 rounded-lg shadow-md w-3/4 ml-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer   body-Fonts border-1 border-[#bbbbbb] "
            onClick={nextTestimonial}
          >
            <h4 className="text-md font-semibold heading-Fonts-Color body-Fonts ">
              {nextTestimonialPreview.name}
            </h4>
            {nextTestimonialPreview.position && (
              <p className="text-gray-500 text-sm body-Fonts ">
                {nextTestimonialPreview.position}
              </p>
            )}
            {!nextTestimonialPreview.position &&
              nextTestimonialPreview.location && (
                <p className="text-gray-500 text-sm body-Fonts ">
                  {nextTestimonialPreview.location}
                </p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
