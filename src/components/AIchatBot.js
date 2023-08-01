import manChating from "../assets/avatar3.png";
import avatar2 from "../assets/avatar2.png";
import { useInView, animated } from "@react-spring/web";

export default function AIchatBot() {
  const [ref, inInView] = useInView();

  return (
    <section className="h-[100vh] bg-backBlue overflow-hidden">
      <div className="max-w-7xl pt-[45px] mx-auto flex">
        <div className="w-1/3 h-full">
          <h2 className="font-bold text-4xl py-8">Ai Chat Bot</h2>
          <p className="font-medium">
            Our AI-powered chatbot revolutionizes customer interactions by
            providing intelligent, automated assistance. With natural language
            processing and machine learning capabilities, it offers personalized
            responses, instant support, and seamless engagement, delivering a
            superior and efficient customer service experience.
          </p>
          <button className="button my-8 w-44">See More</button>
        </div>
        <div className="w-2/3 relative">
          <div className="w-fit relative  left-52">
            <img src={manChating} alt="manChating" />
          </div>
          <animated.div
            ref={ref}
            style={{
              top: inInView ? "19em" : "38em",
              transition: "1.3s ease-in-out",
            }}
            className="absolute flex gap-5">
            <img className="rounded-full w-8 h-8" src={avatar2} alt="avatar" />
            <div>
              <p className="bg-whitePirelly py-2 px-4 rounded-full rounded-bl-none font-medium mb-4">
                hi how can i help you ?
              </p>
              <span className="text-sm font-medium text-gray-500">8:20 PM</span>
            </div>
          </animated.div>
          <animated.div
            ref={ref}
            style={{
              top: inInView ? "29em" : "38em",
              transition: "1s ease-in-out",
            }}
            className="absolute left-10 flex gap-5">
            <img className="rounded-full w-8 h-8" src={avatar2} alt="avatar" />
            <div>
              <p className="bg-whitePirelly py-2 px-4 rounded-full rounded-bl-none font-medium mb-4">
                sure
              </p>
              <span className="text-sm font-medium text-gray-500">8:20 PM</span>
            </div>
          </animated.div>
          <animated.div
            ref={ref}
            style={{
              top: inInView ? "10em" : "38em",
              transition: "1.5s ease-in-out",
            }}
            className="absolute right-10 flex gap-5">
            <div className="w-fit">
              <p className="bg-bluePirelly py-2 px-4 rounded-full rounded-br-none font-medium mb-4 text-white">
                hey pirelly
              </p>
              <span className="text-sm absolute right-14 font-medium text-gray-500">
                8:20 PM
              </span>
            </div>
            <img className="rounded-full w-8 h-8" src={avatar2} alt="avatar" />
          </animated.div>
          <animated.div
            ref={ref}
            style={{
              top: inInView ? "21em" : "38em",
              transition: "1s ease-in-out",
            }}
            className="absolute -right-20 flex gap-5">
            <div className="w-fit">
              <p className="bg-bluePirelly text-white py-2 px-4 rounded-full rounded-br-none font-medium mb-4">
                can you show me best suv car in 2022 ?
              </p>
              <span className="text-sm absolute right-14 font-medium text-gray-500">
                8:20 PM
              </span>
            </div>
            <img className="rounded-full w-8 h-8" src={avatar2} alt="avatar" />
          </animated.div>
        </div>
      </div>
    </section>
  );
}
