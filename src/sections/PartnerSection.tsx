import React from "react";
import {Images} from "../data/Constants"
const PartnerLogos = () => {
  return (
    <div className="py-10 bg-white">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between w-full max-w-6xl px-4">
          <img src={Images.AxonLogo} alt="Axon Airlines" className="h-30" />
          <img src={Images.JetStarLog} alt="Jetstar" className="h-30" />
          
          {/* Central highlighted logo */}
          <div className="bg-white shadow-lg items-center rounded-xl  flex justify-center z-10 -mt-6 w-[280px] h-[100px]">
            <img src={Images.ExpediaLogo} alt="Expedia" className="h-30" />
          </div>
          
          <img src={Images.QunatsLogo} alt="Qantas" className="h-8" />
          <img src={Images.AlitatliaLogo} alt="Alitalia" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
