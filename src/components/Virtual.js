import { faCheck, faCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import carPhoto from "../assets/ww (1).png";
import back from "../assets/backww.png";
import circle from "../assets/wwCircle.png";
import wheel from "../assets/Rectangle 271.png";
import { useInView, animated } from "@react-spring/web";

function Virtual() {
  const [ref, inInView] = useInView();

  return (
    <section className="h-[700px]">
      <div className="max-w-7xl mt-20 flex mx-auto">
        <div className="w-1/2 relative">
          <animated.div
            ref={ref}
            style={{
              left: inInView ? "0" : "-200px",
              transition: "1s ease-in-out",
            }}
            className="relative">
            <img className="relative -z-20" src={back} alt="background" />
            <img
              className="absolute top-56 left-[45px] -z-10"
              src={circle}
              alt="circlebackground"
            />
            <img
              className="absolute left-[75px] top-28 z-10"
              src={carPhoto}
              alt="carPhoto"
            />
            <FontAwesomeIcon
              className="rotate-45 absolute z-50 top-[230px] right-[235px] text-white bg-bluePirelly p-1 rounded-full"
              icon={faPlus}
            />
            <FontAwesomeIcon
              className="text-white absolute z-50 left-[150px] top-[185px] bg-bluePirelly p-1 rounded-full"
              icon={faPlus}
            />
            <div className="w-fit absolute top-[330px] left-[200px]">
              <FontAwesomeIcon
                className=" text-bluePirelly absolute  bg-bluePirelly p-2 rounded-full"
                icon={faCircle}
              />
              <span className="text-white absolute  left-1.5 top-2 text-xs">
                360
              </span>
            </div>
          </animated.div>
          <animated.div
            style={{
              left: inInView ? "380px" : "-200px",
              transition: ".8s ease-in-out",
            }}
            className="w-[220px] absolute right-6 -top-20 px-8 rounded-xl items-center py-3 bg-zinc-600">
            <div className="w-fit mx-auto">
              <img src={wheel} alt="carphoto" />
            </div>
            <h4 className="text-white my-2 font-semibold text-xs">
              Heated Steering Wheel
            </h4>
            <p className="text-[10px] text-white">
              Lörem ipsum fanöska tetrad: monar. Lod jåck douche ladigt.
            </p>
          </animated.div>
          <animated.div
            style={{
              opacity: inInView ? "1" : "0",
              width: inInView ? "288px" : "560px",
              transition: "2s ease-in-out",
            }}
            className="bg-bluePirelly -rotate-[50deg] absolute top-[129px] right-2 -z-10 h-[2px]"></animated.div>
        </div>
        <div className="w-1/2">
          <span className="text-bluePirelly font-medium text-xl">
            We made it simple
          </span>
          <h2 className="text-5xl font-bold my-6">Virtual Walkaround</h2>
          <p className="max-w-[500px]">
            Our advanced technology captures a complete 360-degree view of
            vehicles, allowing customers to virtually explore every angle and
            detail, enhancing their online browsing experience.
          </p>
          <p className="py-10 flex gap-5">
            <span>
              <FontAwesomeIcon
                className="text-bluePirelly pr-2"
                icon={faCheck}
              />
              remove background
            </span>
            <span>
              <FontAwesomeIcon
                className="text-bluePirelly pr-2"
                icon={faCheck}
              />
              advanced dashboard
            </span>
            <span>
              <FontAwesomeIcon
                className="text-bluePirelly pr-2"
                icon={faCheck}
              />
              diftrent iframe layout
            </span>
          </p>
          <button className="button ">See More</button>
        </div>
      </div>
    </section>
  );
}

export default Virtual;
