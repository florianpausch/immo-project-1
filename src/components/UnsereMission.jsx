import React from "react";
import { Link } from "react-router-dom";
import { localImg, solarImg, sustainImg } from "../assets/icons";

const UnsereMission = () => {
  return (
    <section className="pb-10 font-palanquin bg-background flex flex-col items-center text-white relative">
      <hr className="w-[90vw]" />
      <h1 className="md:text-2xl text-center font-cinzel font-bold text-xl mt-20 mb-10">
        Unsere Mission
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
              <img src={localImg} alt="local" width={300}/>
            </div>
            <div>
              Wir glauben an die Bedeutung regionaler Verbundenheit. Deshalb arbeiten
              wir eng mit lokalen Handwerkern, Bauunternehmen und Dienstleistern
              zusammen, um sicherzustellen, dass unsere Projekte nicht nur den
              höchsten Standards entsprechen, sondern auch die regionale Wirtschaft
              unterstützen.
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mb-10">
            <div>
              <img src={solarImg} alt="local" width={300}/>
            </div>
            <div>
              Unsere Immobilienprojekte sind darauf ausgerichtet, umweltfreundliche
              Technologien und nachhaltige Materialien zu integrieren. Wir fördern
              den Einsatz erneuerbarer Energien und achten auf eine energieeffiziente
              Bauweise, um den ökologischen Fußabdruck unserer Projekte zu minimieren.
              Darüber hinaus engagieren wir uns für die Erhaltung und Pflege der
              lokalen Landschaften und Naturressourcen.
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mb-10">
            <div>
              <img src={sustainImg} alt="local" width={300}/>
            </div>
            <div>
              Mit jedem Schritt, den wir unternehmen, verfolgen wir unser Ziel,
              einen positiven und nachhaltigen Einfluss auf unsere Region und die
              Umwelt auszuüben. Unsere Mission ist es, Immobilienlösungen zu
              bieten, die nicht nur den Bedürfnissen unserer Kunden entsprechen,
              sondern auch den Prinzipien der Nachhaltigkeit und Regionalität
              verpflichtet sind.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnsereMission;