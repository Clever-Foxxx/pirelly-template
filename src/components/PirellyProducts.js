import logo from "../assets/logo-pirelly.png";
import { Player } from "@lottiefiles/react-lottie-player";
import CarAnimtion from "../Json/car.json";
import ChatBot from "../Json/chat-bot.json";
import Cooding from "../Json/coding.json";
import "./animateLineMove.css";

function PirellyProducts() {
  return (
    <section>
      <div className="max-w-6xl pt-20 overflow-hidden mx-auto h-[900px] relative">
        <div className="w-80 grid text-center justify-center absolute bg-whitePirelly shadow-2xl top-[18em] left-28 rounded-2xl py-4 px-8">
          <div className="w-fit mx-auto">
            <img src={logo} alt="logoCompany" />
          </div>
          <h2 className="font-bold py-2 text-lg">Pirelly Pruduct</h2>
          <p className="text-xs font-medium pb-4">
            Seamlessly enable customers nationwide to fall in love with a car
            directly online
          </p>
        </div>
        <div className="w-[400px] flex text-center justify-center absolute bg-whitePirelly shadow-2xl top-40 right-0 rounded-2xl py-4 px-8">
          <div>
            <Player src={CarAnimtion} className="w-16 h-16" loop autoplay />
          </div>
          <div className="flex-1">
            <h2 className="font-medium">virtual walkaround</h2>
            <p className="text-sm">
              Revolutionizing car dealership visuals with AI.Engaging customers
              through stunning imagery.Transforming the car buying experience
            </p>
          </div>
        </div>
        <div className="w-[400px] flex text-center justify-center absolute bg-whitePirelly shadow-2xl top-[21.5em] right-10 rounded-2xl py-4 px-8">
          <div>
            <Player src={ChatBot} className="w-16 h-16" loop autoplay />
          </div>
          <div className="flex-1">
            <h2 className="font-medium">A.I Chat</h2>
            <p className="text-sm">
              Conversations evolve with the power of artificial intelligence.
              Experience seamless interaction and personalized assistance like
              never before.
            </p>
          </div>
        </div>
        <div className="w-[400px] h-[150px] flex text-center justify-center absolute bg-whitePirelly shadow-2xl top-[32em] right-16 rounded-2xl py-4 px-8">
          <div>
            <Player src={Cooding} className="w-16 h-16" loop autoplay />
          </div>
          <div className="flex-1">
            <h2 className="font-medium">digital retail</h2>
            <p className="text-sm">
              Elevate the car buying experience and maximize revenue potential
              by enabling customers nationwide to purchase a car directly online
            </p>
          </div>
        </div>
        <div className="Motion line's relative">
          <div className="absolute -z-10 left-[26.6em] top-[10em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="332"
              height="172"
              viewBox="0 0 332 172"
              fill="none">
              <path
                className="lineMov"
                d="M2 170.549C2 170.549 150.809 24.2708 331 2"
                stroke="url(#paint0_linear_1458_9480)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1458_9480"
                  x1="216.103"
                  y1="172.068"
                  x2="216.103"
                  y2="173.08"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EAEAEA" />
                  <stop offset="1" stopColor="#C2C2C2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute -z-10 top-[20.4em] left-[27em]">
            <svg
              width="335"
              height="3"
              viewBox="1 1 335 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 1 20 L 400 21"
                stroke="url(#paint0_linear_1458_9480)"
                strokeWidth="50"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1458_9479"
                  x1="138.5"
                  y1="3"
                  x2="138.5"
                  y2="4"
                  gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="#EAEAEA" />
                  <stop offset="1" stopColor="#f3f3f3f" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute -z-10 top-[20.4em] left-[22.8em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="330"
              height="154"
              viewBox="0 0 200 154"
              fill="none">
              <path
                d="M1.49975 1.49995 C1.49975 1.49995 120.575 132.641 260.737 150.693"
                stroke="url(#paint0_linear_1458_9480)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1458_9481"
                  x1="83.2372"
                  y1="62.043"
                  x2="185.64"
                  y2="4.96662"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="" />
                  <stop offset="1" stopColor="" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* static line's */}
          <div className="absolute -z-10 left-[26.6em] top-[10em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="332"
              height="172"
              viewBox="0 0 332 172"
              fill="none">
              <path
                className="lineMove"
                d="M2 170.549C2 170.549 150.809 24.2708 331 2"
                stroke="url(#paint0_linear_1458_9480)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1458_9480"
                  x1="216.103"
                  y1="172.068"
                  x2="216.103"
                  y2="173.08"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EAEAEA" />
                  <stop offset="1" stopColor="#C2C2C2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute -z-10 top-[20.4em] left-[27em]">
            <svg
              width="335"
              height="3"
              viewBox="1 1 335 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="lineMove"
                d="M 1 20 L 400 21"
                stroke="url(#paint0_linear_1458_9480)"
                strokeWidth="50"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1458_9479"
                  x1="138.5"
                  y1="3"
                  x2="138.5"
                  y2="4"
                  gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="#EAEAEA" />
                  <stop offset="1" stopColor="#f3f3f3f" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute -z-10 top-[20.4em] left-[22.8em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="330"
              height="154"
              viewBox="0 0 200 154"
              fill="none">
              <path
                className="lineMove"
                d="M1.49975 1.49995 C1.49975 1.49995 120.575 132.641 260.737 150.693"
                stroke="url(#paint0_linear_1458_9480)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1458_9481"
                  x1="83.2372"
                  y1="62.043"
                  x2="185.64"
                  y2="4.96662"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="" />
                  <stop offset="1" stopColor="" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PirellyProducts;
