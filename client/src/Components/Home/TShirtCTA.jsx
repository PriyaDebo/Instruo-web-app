import React from "react";
import tshirt from "../../assets/tshirt.png";

const TShirtCTA = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row py-32 gap-20 bg-base-200 px-8">
      <div className="lg:w-1/3 mx-4 flex justify-center">
        <div className="p-8 border-8 -skew-x-6 -skew-y-3 border-primary w-72 h-72 lg:w-96 lg:h-96 shadow-xl hover:brightness-110 transition-all duration-300">
          <img
            className="relative inset -top-24 w-72 h-72 lg:w-80 lg:h-96 hover:shadow-3xl hover:-translate-y-4 transition-all duration-300 hover:scale-105 brightness-100"
            src={tshirt}
          />
        </div>
      </div>
      <div className="w-full px-4 flex flex-col justify-center items-center lg:items-start">
        <h2 className="text-5xl font-extrabold text-center lg:text-start">
          Get our official merchandise
        </h2>
        <p className="mt-8 text-center lg:text-start">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          placeat? Dolorem repellendus aspernatur, veritatis eligendi qui magni
          blanditiis vero pariatur doloribus impedit optio laudantium soluta,
          reprehenderit error temporibus. Consectetur, optio. Laudantium,
          accusamus dolor. Iusto esse, ex in soluta perferendis hic nisi
          necessitatibus? Animi optio sint neque vel fugiat similique placeat.
          Odio sunt consequuntur explicabo quibusdam fuga sequi cumque, dolor
          voluptatum?
        </p>
        <a
          href="https://forms.gle/afzw2MY6JKPF9gp36"
          target="__blank"
          className="btn btn-primary btn-wide rounded-full mb-4 mt-10 tracking-wide"
        >
          Get your t-shirt now
        </a>
      </div>
    </div>
  );
};

export default TShirtCTA;