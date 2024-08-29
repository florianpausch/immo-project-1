import React from "react";
import { Link } from "react-router-dom";
import { communityImg,integretyImg,  innovationImg } from "../assets/icons";

const UnsereWerte = () => {
  return (
    <section className="pb-10 font-palanquin bg-background flex flex-col items-center text-white relative">
      <hr className="w-[90vw]" />
      <h1 className="md:text-2xl text-center font-cinzel font-bold text-xl mt-20 mb-10">
        Unsere Werte
      </h1>
      <div className="bg-gray-300 text-black p-6 rounded-lg shadow-lg max-w-4xl relative mx-5 text-xs md:text-base text-center max-sm:font-semibold">
        {/* Link zurück zur Hauptseite */}
        <Link
          to="/"
          className="absolute top-3 right-3 text-black text-2xl font-bold"
        >
          &times;
        </Link>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <div className="flex flex-row justify-center items-center mb-10">
            <div>
              <img src={communityImg} alt="Community" width={200} />
            </div>
            <div className="ml-4">
              Wir schätzen die Bedeutung einer starken Gemeinschaft. Unser
              Engagement gilt dem Aufbau von Beziehungen und dem Schaffen eines
              nachhaltigen Mehrwerts für die Menschen und die Region, in der wir
              tätig sind.
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mb-10">
            <div>
              <img src={integretyImg} alt="Integrity" width={200} />
            </div>
            <div className="ml-4">
              Integrität ist das Fundament unseres Handelns. Wir arbeiten
              transparent, ehrlich und mit Respekt, um das Vertrauen unserer
              Kunden und Partner langfristig zu gewinnen und zu erhalten.
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mb-10">
            <div>
              <img src={innovationImg} alt="Innovation" width={200} />
            </div>
            <div className="ml-4">
              Innovation treibt uns an. Wir streben danach, fortschrittliche
              Lösungen zu entwickeln, die sowohl den aktuellen Anforderungen
              gerecht werden als auch zukünftigen Herausforderungen standhalten.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnsereWerte;
