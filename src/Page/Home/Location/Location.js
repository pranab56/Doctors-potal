import React from "react";
import svg1 from "../../../assets/icons/clock.svg";
import svg2 from "../../../assets/icons/marker.svg";
import svg3 from "../../../assets/icons/phone.svg";

const Location = () => {
  return (
    <nav className="lg:flex lg:gap-2 lg:justify-evenly sm:block mt-24 mb-24" data-aos="fade-right" >
      <section className="flex justify-evenly bg-teal-400 p-5 rounded-md w-auto ">
        <img width={60} src={svg1} alt="" />
        <div className="mt-4 ml-4 text-white">
          <h4>Opening Hours</h4>
          <p>this hospital all time people care</p>
        </div>
      </section>

      <section className="flex lg:mb-0 lg:mt-0 lg:justify-evenly bg-accent p-5 rounded-md w-auto sm:mb-10 sm:mt-10">
        <img className="mr-12" width={60} src={svg2} alt="" />

        <div className="mt-4 text-white">
          <h4>Visit our location</h4>
          <p>bera,pabna,bangladesh</p>
        </div>
      </section>

      <section className="flex justify-evenly bg-teal-400 p-5 rounded-md w-auto">
        <img className="mr-14" width={60} src={svg3} alt="" />
        <div className="mt-4 text-white">
          <h4>Contact Us Now</h4>
          <p>01759409785</p>
        </div>
      </section>
    </nav>
  );
};

export default Location;
