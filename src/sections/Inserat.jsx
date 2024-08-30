import React, { useState } from "react";
import InseratForm from "../components/InseratForm";
import ValueForm from "../components/ValueForm";
import { logo } from "../assets/img";

const Inserat = () => {
  const [value, setValue] = useState(null);

  return (
    <section
      id="listing"
      className="pb-10 font-cinzel bg-background flex flex-col items-center text-white relative"
    >
      <hr className="w-[90vw]" />
      <h1 className="md:text-3xl items-center text-center justify-center text-xl mt-20 mb-10">
        Sie wollen eine Immobilie verkaufen?
      </h1>
      <div className="flex flex-col items-center justify-center gap-y-5 px-10 md:px-24 mb-10">
        <div>
          <p className="text-center  text-[11px] md:text-[14px]">
            Bei Real Estate Casa helfen wir Ihnen,
            Ihre Immobilie zum besten Preis zu verkaufen. Unser erfahrenes Team
            steht Ihnen bei jedem Schritt des Verkaufsprozesses zur Seite – von der
            Bewertung bis zum Abschluss.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-shrink justify-center items-center">
          <img src={logo} alt="logo" width={250} />
          <div className="text-[14px] font-cinzel bg-zinc-600 p-10 rounded-xl">
            <p className="font-semibold underline mb-2">Wir bieten Ihnen:</p>
            <ul className="list-disc">
              <li className="mb-2"><strong>Marktwertermittlung:: </strong> Umfassende Bewertung Ihrer Immobilie mit optionalem Wertgutachten..</li>
              <li className="mb-2"><strong>Verkaufsunterlagen: </strong> Zusammenstellung aller benötigten Dokumente und Vorbereitung der Vermarktung, einschließlich Fotos und Exposé.</li>
              <li className="mb-2"><strong>Marketing: </strong>  Effektive Strategien zur Platzierung Ihrer Immobilie bei den richtigen Interessenten.</li>
              <li className="mb-2"><strong>Besichtigungen: </strong>Organisation und Durchführung von Besichtigungsterminen sowie Prüfung der Interessenten.</li>
              <li className="mb-2"><strong>Verkaufsprozess: </strong>Strukturierte Abwicklung, Verhandlungsführung und Sicherstellung des Zielpreises.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* ValueForm zum Schätzen des Wertes */}
      <p className="text-center mx-10 text-xs md:text-lg mb-5">Ganz unverbindlich den Wert Ihrer Immobilie schätzen lassen</p>
      <ValueForm setValue={setValue} value={value} />

      {/* InseratForm für die Erstellung eines Inserats */}
      <p className="mt-8 text-center mx-10 text-xs md:text-lg mb-5">Kontaktdaten und Eckdaten der Immobilie beschreiben:</p>
      <InseratForm />
    </section>
  );
};

export default Inserat;
