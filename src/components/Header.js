import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import carPhoto from "../assets/cheerful-french-lady-pointing-with-finger-smartphone-smiling-blonde-girl-beret-standing-red-wall copy 2 (1).png";
import chatDis from "../assets/chat.png";
import logo from "../assets/logo-pirelly.png";
import backgroundCar from "../assets/Rectangle 1318.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import { animated, useInView } from "@react-spring/web";

function Header() {
  const [valueRange, setValueRange] = useState(17000);
  const [ref, InView] = useInView();

  return (
    <section className="header-bg  h-[100vh] overflow-hidden">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex pt-28 relative">
          <div className="w-1/2">
            <span className="text-bluePirelly font-bold">
              SELES SMARTER, NOT HARDER
            </span>
            <h2 className="text-5xl py-8 font-extrabold">
              Driving dealership growth using the power of A.I
            </h2>
            <p className="font-medium">
              Pirelly harnesses the power of technology and A.I to transform
              your dealership's visuals, turning your average shoppers into
              loyal customers.
            </p>
            <div className="py-10 flex gap-5">
              <button className="button">learn more</button>
              <button className="items-center flex gap-4">
                <FontAwesomeIcon
                  className="text-white scale-50 bg-bluePirelly rounded-full  w-4 p-4 ring-[25px] ring-shadowPirelly items-center h-4"
                  icon={faPlay}
                />
                Watch intro
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative">
              <img
                className="relative -top-28 left-24"
                src={backgroundCar}
                alt="carPhoto"
              />
              <img className="absolute top-0" src={carPhoto} alt="carPhoto" />
            </div>
            <animated.div
              ref={ref}
              style={{
                right: InView ? "22em" : "-12em",
                transition: "all 1s ease-out",
              }}
              className="grid gap-3 w-52 p-4 bg-whitePirelly absolute top-0 right-[22em] rounded-lg shadow-2xl font-semibold">
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
            <animated.div
              ref={ref}
              style={{
                right: InView ? "22em" : "-12em",
                transition: "all .8s ease-in-out",
              }}
              className="grid px-12 gap-3 w-fit p-6 bg-whitePirelly absolute bottom-5 right-[13em] rounded-[47px] shadow-2xl font-semibold text-center">
              <div className="w-fit mx-auto">
                <img src={logo} alt="LogoCompany" />
              </div>
              <h3 className="text-md">Join Us Right Now!</h3>
              <p className="text-xs font-medium">
                Click Button To Request Demo
              </p>
              <button className="button w-44 mx-auto">Book A Demo</button>
            </animated.div>
            <animated.div
              ref={ref}
              style={{
                right: InView ? "-5em" : "-20em",
                transition: "all .5s ease-out",
              }}
              className="top-0 absolute -right-12">
              <img src={chatDis} alt="chatDisplay" />
            </animated.div>
          </div>
        </div>
        <div>
          <h4 className="font-bold py-2">Trusted by the industry leaders</h4>
          <div className="flex gap-[250px] justify-center logo">
            <img className="w-28" src={logo1} alt="logoBrand" />
            <img className="w-28" src={logo2} alt="logoBrand" />
            <img className="w-28" src={logo3} alt="logoBrand" />
            <img className="w-28" src={logo4} alt="logoBrand" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
