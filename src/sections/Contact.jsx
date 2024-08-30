import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section bg-background text-white py-12 px-6 font-cinzel"
    >
      <hr className="w-[90vw]" />
      <h2 className="md:text-2xl text-center font-bold text-xl mt-20 mb-10">
        Kontaktieren Sie Uns
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:gap-12">
        {/* Kontaktinformationen */}
        <div className="lg:flex-1 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold text-center mb-4">Unsere Kontaktdaten</h3>
          <p className="mb-4">
            <strong>Adresse:</strong>
            <br />
            Wassertorstrasse 40,
            <br />
            88316 Isny im Allgäu
          </p>
          <p className="mb-4">
            <strong>Telefon:</strong>
            <br />
            +49 123 456789
          </p>
          <p className="mb-4">
            <strong>E-Mail:</strong>
            <br />
            <a
              href="mailto:realestatecasa-kontakt@gmail.com"
              className="text-blue-400 hover:underline"
            >
              realestatecasa-kontakt@gmail.com
            </a>
          </p>
          <p className="mb-4">
            <strong>Öffnungszeiten:</strong>
            <br />
            Montag - Freitag: 09:00 - 18:00
            <br />
            Samstag: 10:00 - 14:00
          </p>
        </div>

        {/* Karte */}
        <div className="lg:flex-1">
          <h3 className="text-lg font-semibold text-center mb-4">Unser Standort</h3>
          <div className="relative h-64  mb-4">
            <iframe
              title="Karten-Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.519328352597!2d10.03851227528658!3d47.6937541819565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b8333be35ae15%3A0xd71a2a82c384b444!2sWassertorstra%C3%9Fe%2040%2C%2088316%20Isny%20im%20Allg%C3%A4u!5e0!3m2!1sde!2sde!4v1725002758367!5m2!1sde!2sde"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
