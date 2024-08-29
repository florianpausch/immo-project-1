import React from "react";
import { Link } from "react-router-dom";

const UnsereGeschichte = () => {
  return (
    <section className="pb-10 font-palanquin bg-background flex flex-col items-center text-white relative">
      <hr className="w-[90vw]" />
      <h1 className="md:text-2xl text-center font-cinzel font-bold text-xl mt-20 mb-10">
        Unsere Geschichte
      </h1>
      <div className="bg-gray-300 text-black p-6 rounded-lg shadow-lg max-w-4xl relative mx-5 text-xs md:text-base text-center max-sm:font-semibold">
        {/* Link zurück zur Hauptseite */}
        <Link
          to="/"
          className=" absolute top-1 right-2 text-black text-2xl font-bold"
        >
          &times;
        </Link>
        <p className="mb-5">
          Unser Unternehmen wurde 1987 von Johann Müller in Kempten im Allgäu
          gegründet. Mit einer tiefen Verbundenheit zur Region und dem Ziel, den
          Menschen im Allgäu ein verlässlicher Partner bei der
          Immobilienvermittlung zu sein, legte Herr Müller den Grundstein für
          unser heutiges Unternehmen.
        </p>
        <p className="mb-5">
          In den 1990er Jahren wuchsen wir stetig und erweiterten unser Angebot
          um die Vermittlung von Ferienimmobilien, die zunehmend gefragt waren.
          Durch kontinuierliche Weiterbildung und den Einsatz moderner
          Technologien konnten wir unsere Position im Markt weiter festigen.
        </p>
        <p>
          Heute, nach über 35 Jahren, zählen wir zu den führenden
          Immobilienmaklern im Allgäu. Unser engagiertes Team vereint Erfahrung
          und lokale Expertise, um unseren Kunden bestmöglichen Service zu
          bieten. Wir sind stolz darauf, den einzigartigen Charakter unserer
          Heimat zu bewahren und für unsere Kunden die besten Immobilienlösungen
          zu finden.
        </p>
      </div>
    </section>
  );
};

export default UnsereGeschichte;
