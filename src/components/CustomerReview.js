import { useInView, animated } from "@react-spring/web";
import React, { useState, useEffect } from "react";

const NumberCounter = ({ number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.ceil(number / 100); // Increase this value for faster counting
    const animationDuration = 1000; // Adjust the duration of the animation (in milliseconds)
    const interval = Math.max(animationDuration / (number / step), 1);

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        return newCount >= number ? number : newCount;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [number]);

  return <span>{count}K</span>;
};

const CustomerReview = () => {
  const [ref, InView] = useInView();
  return (
    <section className="customerBG h-[800px]">
      <animated.div
        ref={ref}
        className="max-w-7xl text-center pt-28 grid gap-10 text-white mx-auto">
        <h4 className="font-medium text-lg">customer review</h4>
        <h2 className="text-5xl font-medium">Consumer Behavior is Changing</h2>
        <div className="flex py-10 gap-32 justify-center">
          <div className="grid">
            <span className="font-bold text-8xl">
              {InView ? <NumberCounter number={28} /> : "0"}
            </span>
            <span className="font-medium text-lg">Total User</span>
          </div>
          <div className="grid">
            <span className="font-bold text-8xl">
              {InView ? <NumberCounter number={12} /> : "0"}
            </span>
            <span className="font-medium text-lg">Care Locations</span>
          </div>
          <div className="grid">
            <span className="font-bold text-8xl">
              {InView ? <NumberCounter number={68} /> : "0"}
            </span>
            <span className="font-medium text-lg">Virtual Care Solutions</span>
          </div>
        </div>
        <button className="bg-whitePirelly text-bluePirelly w-48 py-5 rounded-xl mx-auto relative top-32">
          Book A Demo
        </button>
      </animated.div>
    </section>
  );
};

export default CustomerReview;
