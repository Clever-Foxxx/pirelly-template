import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper-custom.css";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import person1 from "../assets/person1.png";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Comments() {
  return (
    <section className="bg-whitePirelly py-20">
      <div className="h-[100vh]">
        <div className="text-center mt-[20vh]">
          <span className="font-medium text-lg text-bluePirelly">Comments</span>
          <h2 className="text-5xl my-5 font-medium">
            Listen To What Our Customers Say
          </h2>
        </div>
        <div className="w-full my-16  mx-auto overflow-hidden">
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation
            slidesPerView={2.5}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide className="p-14">
              <div className="shadowdef grid gap-8 relative w-[440px] h-[250px] rounded-[40px] shadow-2xl ShadowDef py-16 px-16">
                <FontAwesomeIcon
                  className="absolute text-4xl text-bluePirelly right-8 top-5"
                  icon={faQuoteLeft}
                />
                <p className="text-base font-semibold">
                  This is very powerful. I am very happy to join Pirelly.
                  Pirelly helped me a lot!
                </p>
                <div className="flex gap-5 items-center text-sm">
                  <img src={person1} alt="avatar" />
                  <div className="font-medium">
                    <h3>mike ross</h3>
                    <span className="text-slate-500">ceo birendly</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-14">
              <div className="shadowdef grid gap-8 relative w-[440px] h-[250px] rounded-[40px] shadow-2xl ShadowDef py-16 px-16">
                <FontAwesomeIcon
                  className="absolute text-4xl text-bluePirelly right-8 top-5"
                  icon={faQuoteLeft}
                />
                <p className="text-base font-semibold">
                  This is very powerful. I am very happy to join Pirelly.
                  Pirelly helped me a lot!
                </p>
                <div className="flex gap-5 items-center text-sm">
                  <img src={person1} alt="avatar" />
                  <div className="font-medium">
                    <h3>mike ross</h3>
                    <span className="text-slate-500">ceo birendly</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-14">
              <div className="shadowdef grid gap-8 relative w-[440px] h-[250px] rounded-[40px] shadow-2xl ShadowDef py-16 px-16">
                <FontAwesomeIcon
                  className="absolute text-4xl text-bluePirelly right-8 top-5"
                  icon={faQuoteLeft}
                />
                <p className="text-base font-semibold">
                  This is very powerful. I am very happy to join Pirelly.
                  Pirelly helped me a lot!
                </p>
                <div className="flex gap-5 items-center text-sm">
                  <img src={person1} alt="avatar" />
                  <div className="font-medium">
                    <h3>mike ross</h3>
                    <span className="text-slate-500">ceo birendly</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-14">
              <div className="shadowdef grid gap-8 relative w-[440px] h-[250px] rounded-[40px] shadow-2xl ShadowDef py-16 px-16">
                <FontAwesomeIcon
                  className="absolute text-4xl text-bluePirelly right-8 top-5"
                  icon={faQuoteLeft}
                />
                <p className="text-base font-semibold">
                  This is very powerful. I am very happy to join Pirelly.
                  Pirelly helped me a lot!
                </p>
                <div className="flex gap-5 items-center text-sm">
                  <img src={person1} alt="avatar" />
                  <div className="font-medium">
                    <h3>mike ross</h3>
                    <span className="text-slate-500">ceo birendly</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Comments;
