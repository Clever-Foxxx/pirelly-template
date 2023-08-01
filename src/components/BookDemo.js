import { useState } from "react";

export const BookDemo = () => {
  const [condition, setCondition] = useState(false);
  return (
    <section className="Circle">
      <div
        style={{
          paddingTop: condition ? "50px" : "220px",
          transition: "all ease-in-out 1.4s",
        }}
        className="max-w-7xl text-center text-white py-16 mx-auto h-[100vh]">
        <span className="font-medium text-lg">lets get started..</span>
        <h2 className="text-5xl my-5 font-medium">
          join us for upgrade your job
        </h2>
        <div className="max-w-xl pt-16 mx-auto">
          <div
            className="overflow-hidden"
            style={{
              height: condition ? "300px" : "0",
              opacity: condition ? 1 : 0,
              transition: "all ease-in-out 1.4s",
            }}>
            <form className="grid gap-10">
              <div className="flex gap-16 ">
                <input
                  className="py-3 flex-1 px-5 rounded-lg"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="py-3 flex-1 px-5 rounded-lg"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <input
                className="py-3 px-5 rounded-lg"
                type="email"
                placeholder="Email Address"
              />
              <div className="flex gap-16">
                <input
                  className="flex-1 py-3 px-5 rounded-lg"
                  type="number"
                  placeholder="Phone Number"
                />
                <input
                  className="flex-1 py-3 px-5 rounded-lg"
                  type="text"
                  placeholder="Dealer Website"
                />
              </div>
            </form>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCondition((current) => !current);
            }}
            className="bg-white transition-all duration-300 w-fit text-bluePirelly mx-auto font-semibold rounded-lg py-3 px-10">
            {condition ? "Submit" : "Book Demo"}
          </button>
        </div>
      </div>
    </section>
  );
};
