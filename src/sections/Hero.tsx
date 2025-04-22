import NavBar from "../components/NavBar";
import BgImage from "../assets/images/Decore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../data/Constants";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen  px-4 lg:px-0 ">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50 ">
        <NavBar />
      </div>

      {/* Background Decoration Image */}
      <img
        src={BgImage}
        alt="Decor"
        className="absolute right-0 top-0 z-0 w-[450px] sm:w-[300px] md:w-[700px] lg:w-[800px] xl:w-[1000px] pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10  flex-col-reverse lg:flex-row  min-h-screen max-w-8xl  pt-20 lg:pt-0 max-w-screen-xl mx-auto  flex items-center justify-between">
        {/* Text Content */}
        <div className="w-full lg:w-1/3 text-center lg:text-left space-y-6 mt-5 lg:mt-0">
          <h1 className="body-Fonts font-semibold primary-Color text-sm sm:text-lg md:text-xl">
            Best Destinations around the world
          </h1>

          <h2 className="font-extrabold heading-Fonts text-3xl sm:text-5xl lg:text-6xl heading-Fonts-Color mt-4 sm:mt-6 leading-tight">
            Travel, enjoy and live a new and full life
          </h2>

          <p className="body-Fonts body-Fonts-Color mt-4 text-sm sm:text-base lg:text-lg">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start mt-8 gap-6">
            <button className="w-40 h-12 rounded-md button-Color flex justify-center items-center text-white body-Fonts hover:opacity-90 transition">
              Find out more
            </button>
            <div className=" flex  sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-6 items-center">
              <div className="w-12 h-12 rounded-full secondary-Color flex justify-center items-center">
                <FontAwesomeIcon icon={faPlay} size="1x" color="white" />
              </div>
              <p className="body-Fonts body-Fonts-Color text-sm sm:text-base ">Play Demo</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-end">
          <img
            src={Images.HeroSection}
            alt="Hero"
            className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
