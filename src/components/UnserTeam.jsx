import React from "react";
import { Link } from "react-router-dom";
import { teamJpeg } from "../assets/img";

const UnserTeam = () => {
  return (
    <section className="pb-10 font-palanquin bg-background flex flex-col items-center text-white relative">
      <hr className="w-[90vw]" />
      <h1 className="md:text-2xl  font-cinzel text-center font-bold text-xl mt-20 mb-10">
        Unser Team
      </h1>
      <div className="bg-gray-200 text-black p-6 rounded-lg shadow-lg max-w-4xl relative mx-5 text-xs md:text-base text-center">
        {/* Link zurück zur Hauptseite */}
        <Link
          to="/" replace
          className="absolute top-3 right-3 text-black text-3xl font-bold"
        >
          &times;
        </Link>
        <div className="flex flex-col justify-center items-center">
          <img
            src={teamJpeg}
            alt="Unser Team"
            className="w-full max-w-[1000px] h-auto p-5 rounded-[30px]"
          />
          <div className="mt-4 mb-6">
            Unser Erfolg basiert auf einem engagierten Team, das durch Vielfalt
            und Fachkompetenz besticht. Jedes Teammitglied bringt einzigartige
            Fähigkeiten ein, die zusammen eine starke Einheit bilden.
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap md:gap-x-5 text-sm md:text-base">
            <p className="md:hidden">Von links nach rechts:</p>
            <div className="flex-1 min-w-[150px]">
              <strong>Amina Diallo</strong> – Geschäftsführerin
              <br />
              Über 20 Jahre Erfahrung und Engagement für exzellenten
              Kundenservice.
            </div>
            <div className="flex-1 min-w-[150px]">
              <strong>Rafael Costa</strong> – Leiter Vertrieb
              <br />
              Über 15 Jahre Erfahrung im Vertrieb und umfassendes Wissen über
              den Immobilienmarkt.
            </div>
            <div className="flex-1 min-w-[150px]">
              <strong>Laura Schmidt</strong> – Immobilienberaterin
              <br />
              Expertise in der Immobilienwirtschaft und ein feines Gespür für
              Details.
            </div>
            <div className="flex-1 min-w-[150px]">
              <strong>Paul Fischer</strong> – Marketingmanagerr
              <br />
              Kreativ und erfahren in digitalem Marketing und Markenpräsenz.
            </div>
            <div className="flex-1 min-w-[150px]">
              <strong>Jonas Weber</strong> – Kundenbetreuer
              <br />
              Spezialist für Kundenservice mit Empathie und Engagement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnserTeam;
