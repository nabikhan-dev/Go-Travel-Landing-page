import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] text-[#5E6282] pt-16 pb-10 px-4 md:px-20   mt-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:mx-auto max-w-6xl ">
        {/* Left side - Logo and description */}
        <div className="md:col-span-1">
        <div className="text-3xl font-bold text-[#181E4B] tracking-tight body-Fonts">
          <span className="text-[#5E6282]">Go.</span>
          <span className="primary-Color">Travel</span>
        </div>
          <p className="mt-4 text-sm body-Fonts">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>

        {/* Company */}
        <div className="body-Fonts">
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="body-Fonts">
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* More */}
        <div className="body-Fonts">
          <h3 className="font-semibold mb-4">More</h3>
          <ul className="space-y-2 text-sm">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        {/* Socials & App download */}
        <div>
          <h3 className="font-semibold mb-4 body-Fonts">Discover our app</h3>
          <div className="flex gap-3 mb-4">
            <a
              href="#"
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <FaFacebookF className="text-[#14183E]" />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <FiInstagram className="text-[#14183E]" />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <FaTwitter className="text-[#14183E]" />
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="h-10 w-auto rounded-full"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 w-auto rounded-full"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-12 body-Fonts">
        All rights reserved@jadoo.co
      </p>
    </footer>
  );
}
