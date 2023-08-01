import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car2 from "../assets/digital-car2.png";
import {
  faCheck,
  faCodeBranch,
  faDollarSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import car1 from "../assets/digital-car (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./swiper-custom2.css";
import { useState } from "react";
import { useInView, animated } from "@react-spring/web";

export default function DigitalRetail() {
  const [valueRange, setValueRange] = useState(17000);
  const [ref, inInView] = useInView();

  return (
    <section className="h-[900px]">
      <div className="max-w-7xl h-[100vh] pt-[100px] flex gap-28 mx-auto">
        <div className="w-1/2 relative ">
          <animated.div
            ref={ref}
            style={{
              left: inInView ? "64px" : "220px",
              transition: "left 1s ease-in-out",
            }}
            className="bg-perPirelly py-5 relative -top-5 w-fit rounded-lg px-8 text-xl font-semibold text-white z-40">
            <p>Get Started 79,380$</p>
          </animated.div>
          <animated.div
            ref={ref}
            style={{
              right: inInView ? "-40px" : "-420px",
              opacity: inInView ? 1 : 0,
              transition: "all 1s ease-in-out",
            }}
            className="grid gap-3 w-52 p-4 bg-whitePirelly z-40 absolute top-0 -right-10 rounded-lg shadow-2xl font-semibold">
            <h3 className="text-sm text-center">Down Payment</h3>
            <input
              className="h-2 w-full"
              type="range"
              onChange={(e) => setValueRange(e.target.value)}
              min={0}
              max={30000}
              value={valueRange}
            />
            <h3 className="text-center text-sm">{valueRange}$</h3>
          </animated.div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[450px] h-[410px]">
            <SwiperSlide className="silde">
              <div className="bg-white w-[400]">
                <div className="w-[450px]  overflow-hidden">
                  <img className="w-full" src={car2} alt="carPhoto" />
                  <div className="p-6">
                    <h2 className="font-bold">2022 Subaru Forester</h2>
                    <span className="text-zinc-400">11 475 Miles</span>
                    <h3 className="text-zinc-500 uppercase py-3">
                      Portland, or
                    </h3>
                    <p className="flex gap-5">
                      <span>
                        <FontAwesomeIcon
                          className="pr-2 text-perPirelly"
                          icon={faUser}
                        />
                        4
                      </span>
                      <span>
                        <FontAwesomeIcon
                          className="pr-2 text-sm text-perPirelly"
                          icon={faCodeBranch}
                        />
                        Manual
                      </span>
                      <span>
                        <FontAwesomeIcon
                          className="pr-2 text-perPirelly"
                          icon={faDollarSign}
                        />
                        $24800
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[440] silde">
              <div className="bg-white overflow-hidden w-[400px]">
                <div>
                  <img
                    className="w-[800px] -rotate-[5deg]"
                    src={car1}
                    alt="carPhoto"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold">2022 Subaru Forester</h2>
                  <span className="text-zinc-400">11 475 Miles</span>
                  <h3 className="text-zinc-500 uppercase py-3">Portland, or</h3>
                  <p className="flex gap-5">
                    <span>
                      <FontAwesomeIcon
                        className="pr-2 text-perPirelly"
                        icon={faUser}
                      />
                      4
                    </span>
                    <span>
                      <FontAwesomeIcon
                        className="pr-2 text-sm text-perPirelly"
                        icon={faCodeBranch}
                      />
                      Manual
                    </span>
                    <span>
                      <FontAwesomeIcon
                        className="pr-2 text-perPirelly"
                        icon={faDollarSign}
                      />
                      $24800
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <animated.div
            ref={ref}
            style={{
              left: inInView ? "64px" : "-220px",
              opacity: inInView ? 1 : 0,
              transition: "all 1.5s ease-in-out",
            }}
            className="bg-perPirelly relative bottom-2 z-20 left-16 rounded-lg w-[480px] px-6 py-5">
            <div className="flex text-white justify-center gap-20 font-semibold">
              <h4>Finance</h4>
              <h4>Lease</h4>
              <h4>Cash</h4>
            </div>
            <div className="w-3/4 my-4 mx-auto bg-zinc-400 h-1.5 rounded-full">
              <div className="w-1/5 bg-zinc-100 h-1.5 rounded-full"></div>
            </div>
          </animated.div>
        </div>
        <div className="w-1/2 grid mt-28 h-[500px]">
          <div>
            <span className="text-perPirelly font-semibold text-lg">
              Simplicity. Honesty. Transparency at every step.
            </span>
            <h2 className="text-5xl mt-3 font-bold">Digital Retail</h2>
          </div>
          <p className="font-normal">
            Elevate the car buying experience and maximize revenue potential by
            enabling customers nationwide to purchase a car directly online
          </p>
          <p className="flex gap-5">
            <span>
              <FontAwesomeIcon
                className="text-perPirelly pr-2"
                icon={faCheck}
              />
              Online Purchase Portal
            </span>
            <span>
              <FontAwesomeIcon
                className="text-perPirelly pr-2"
                icon={faCheck}
              />
              Digital Showroom
            </span>
            <span>
              <FontAwesomeIcon
                className="text-perPirelly pr-2"
                icon={faCheck}
              />
              Dealer Dashboard
            </span>
          </p>
          <button className="px-10 h-16 w-52 py-4 rounded-xl bg-perPirelly text-white/70 font-medium">
            Coming Soon..
          </button>
        </div>
      </div>
    </section>
  );
}
