import React, { useState } from 'react';
import InseratForm from '../components/InseratForm';
import ValueForm from '../components/ValueForm';

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
      {/* ValueForm zum Schätzen des Wertes */}
      <ValueForm setValue={setValue} value={value} />
      {/* InseratForm für die Erstellung eines Inserats */}
      <InseratForm />
    </section>
  );
};

export default Inserat;