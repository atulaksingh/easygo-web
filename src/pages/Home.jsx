import {
  Home as HomeIcon,
  Clock,
  Wallet,
  User,
  Bell,
  Menu,
  Navigation,
  MapPin,
} from "lucide-react";

import mapUi from "../assets/map-ui.png";
import car from "../assets/car.svg";
import logo from "../assets/logo.png";
import lineImg from "../assets/Line1.png";

export default function Home() {
  const cars = [
    { top: "12%", left: "52%", rotate: 25 },
    { top: "20%", left: "30%", rotate: -45 },
    { top: "35%", left: "68%", rotate: 60 },
    { top: "48%", left: "42%", rotate: -20 },
    { top: "60%", left: "25%", rotate: 110 },
    { top: "72%", left: "55%", rotate: 10 },
    { top: "78%", left: "35%", rotate: -70 },
    { top: "85%", left: "65%", rotate: 160 },
  ];

  return (
    <div className="min-h-screen bg-[#2b3055] p-2 sm:p-4">
      <div className="max-w-[1640px] mx-auto bg-[#3a3f63] rounded-xl overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-[#5a5f7d]">
          <img
            src={logo}
            alt="EasyGo Logo"
            className="h-[40px] sm:h-[47px] object-contain"
          />

          <div className="flex gap-6 sm:gap-10 text-gray-300 text-xs sm:text-sm">
            <div className="flex flex-col items-center text-white">
              <HomeIcon size={25} />
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock size={22} />
              <span>Booking</span>
            </div>
            <div className="flex flex-col items-center">
              <Wallet size={24} />
              <span>Wallet</span>
            </div>
            <div className="flex flex-col items-center">
              <User size={24} />
              <span>Profile</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <Bell size={24} />
            <Menu size={24} />
          </div>
        </div>
      </div>

      <div className="max-w-[1640px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_2.3fr] gap-5 h-auto lg:h-[720px] mt-8 bg-gradient-to-b from-[#3f456e] to-[#2b3055] p-5 rounded-xl">
          <div className="relative">
            <div className="flex items-center gap-3 sm:gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center z-10">
                <Navigation size={16} className="text-[#1D17A7]" />
              </div>
              <input
                type="text"
                placeholder="Pick-Up Location"
                className="flex-1 h-11 sm:h-12 px-4 rounded-xl bg-[#4b5072] text-white placeholder-gray-300 outline-none"
              />
            </div>

            <img
              src={lineImg}
              alt="connector"
              className="absolute left-[18px] top-[48px] h-[56px] object-contain opacity-80"
            />

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center z-10">
                <MapPin size={16} className="text-[#1D17A7]" />
              </div>
              <input
                type="text"
                placeholder="Drop Location"
                className="flex-1 h-11 sm:h-12 px-4 rounded-xl bg-[#4b5072] text-white placeholder-gray-300 outline-none"
              />
            </div>
          </div>

          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-full rounded-xl overflow-hidden">
            <img
              src={mapUi}
              alt="map"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1f243d]/60" />

            {cars.map((carData, i) => (
              <img
                key={i}
                src={car}
                alt="car"
                className="absolute w-10 sm:w-8 opacity-90"
                style={{
                  top: carData.top,
                  left: carData.left,
                  transform: `translate(-50%, -50%) rotate(${carData.rotate}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
