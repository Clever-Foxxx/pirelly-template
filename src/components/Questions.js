import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Questions() {
  const [item1, setItem1] = useState(true);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);

  return (
    <section>
      <div className="max-w-7xl pt-[20px] mx-auto">
        <div className="text-center pt-24">
          <span className="font-medium text-lg text-bluePirelly">faq..</span>
          <h2 className="text-5xl h-[100px] my-5 font-medium">
            Frequently Asked Questions
          </h2>
        </div>
        <div
          style={{
            height: item1 ? "210px" : "88PX",
            boxShadow: item1 ? "" : "none",
          }}
          className="w-[955px] overflow-hidden mx-auto p-10 shadowDef transition-all my-5 duration-200">
          <div className="flex h-[70px] relative text-bluePirelly">
            <h3 className="font-semibold flex-1">
              What will we get by purchasing this service?
            </h3>
            <div
              onClick={() => setItem1((current) => !current)}
              className=" cursor-pointer text-end">
              <FontAwesomeIcon
                className="absolute right-0"
                size="lg"
                icon={faMinus}
              />
              <FontAwesomeIcon
                style={{ rotate: item1 ? "90deg" : "0deg" }}
                className="absolute right-0 transition-all duration-200"
                size="lg"
                icon={faMinus}
              />
            </div>
          </div>
          <p className="font-medium mx-auto w-[871px]">
            By receiving this service from Pirelly, you will receive an
            application license to create and edit projects and a professional
            dashboard to manage projects.
          </p>
        </div>
        <div
          style={{
            height: item2 ? "210px" : "88PX",
            boxShadow: item2 ? "" : "none",
            borderBlock: item2 ? "none" : "2px solid #07a4fc21",
          }}
          className="w-[955px] overflow-hidden mx-auto p-10 shadowDef transition-all my-5 duration-200">
          <div className="flex h-[70px] relative text-bluePirelly">
            <h3 className="font-semibold flex-1">
              What will we get by purchasing this service?
            </h3>
            <div
              onClick={() => setItem2((current) => !current)}
              className=" cursor-pointer text-end">
              <FontAwesomeIcon
                className="absolute right-0"
                size="lg"
                icon={faMinus}
              />
              <FontAwesomeIcon
                style={{ rotate: item2 ? "90deg" : "0deg" }}
                className="absolute right-0 transition-all duration-200"
                size="lg"
                icon={faMinus}
              />
            </div>
          </div>
          <p className="font-medium mx-auto w-[871px]">
            By receiving this service from Pirelly, you will receive an
            application license to create and edit projects and a professional
            dashboard to manage projects.
          </p>
        </div>
        <div
          style={{
            height: item3 ? "210px" : "88PX",
            boxShadow: item3 ? "" : "none",
            borderBottom: item3 ? "none" : "2px solid #07a4fc21",
          }}
          className="w-[955px] overflow-hidden mx-auto p-10 shadowDef transition-all my-5 duration-200">
          <div className="flex h-[70px] relative text-bluePirelly">
            <h3 className="font-semibold flex-1">
              What will we get by purchasing this service?
            </h3>
            <div
              onClick={() => setItem3((current) => !current)}
              className=" cursor-pointer text-end">
              <FontAwesomeIcon
                className="absolute right-0"
                size="lg"
                icon={faMinus}
              />
              <FontAwesomeIcon
                style={{ rotate: item3 ? "90deg" : "0deg" }}
                className="absolute right-0 transition-all duration-200"
                size="lg"
                icon={faMinus}
              />
            </div>
          </div>
          <p className="font-medium mx-auto w-[871px]">
            By receiving this service from Pirelly, you will receive an
            application license to create and edit projects and a professional
            dashboard to manage projects.
          </p>
        </div>
        <div
          style={{
            height: item4 ? "210px" : "88PX",
            boxShadow: item4 ? "" : "none",
          }}
          className="w-[955px] overflow-hidden mx-auto p-10 shadowDef transition-all my-5 duration-200">
          <div className="flex h-[70px] relative text-bluePirelly">
            <h3 className="font-semibold flex-1">
              What will we get by purchasing this service?
            </h3>
            <div
              onClick={() => setItem4((current) => !current)}
              className=" cursor-pointer text-end">
              <FontAwesomeIcon
                className="absolute right-0"
                size="lg"
                icon={faMinus}
              />
              <FontAwesomeIcon
                style={{ rotate: item4 ? "90deg" : "0deg" }}
                className="absolute right-0 transition-all duration-200"
                size="lg"
                icon={faMinus}
              />
            </div>
          </div>
          <p className="font-medium mx-auto w-[871px]">
            By receiving this service from Pirelly, you will receive an
            application license to create and edit projects and a professional
            dashboard to manage projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Questions;
