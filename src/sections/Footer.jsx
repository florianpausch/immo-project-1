import React from "react";
import { facebookImg, instaImg, linkedinImg, xImg } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 font-cinzel">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo und Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Real Estate Casa GmbH</h2>
            <p className="text-gray-400">
              Ihr Partner für exklusive Immobilien
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row items-center md:gap-8">
            <a
              href="#properties"
              className="text-gray-400 hover:text-white mb-2 md:mb-0"
            >
              Immobilien finden
            </a>
            <a
              href="#listing"
              className="text-gray-400 hover:text-white mb-2 md:mb-0"
            >
              Inserat erstellen
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white mb-2 md:mb-0"
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white mb-2 md:mb-0"
            >
              Kontakt
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Kontaktinformationen */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              Wassertorstrasse 40, 88316 Isny im Allgäu
            </p>
            <p className="text-gray-400">Tel: +49 123 456789</p>
            <p className="text-gray-400">
              E-Mail:
              <a
                href="mailto:realestatecasa-kontakt@gmail.com"
                className="text-blue-400 hover:underline"
              >
                {" "}
                realestatecasa-kontakt@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src={facebookImg}
                alt="Facebook"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img
                src={xImg}
                alt="Twitter"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={instaImg}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={linkedinImg}
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Rechtliche Hinweise */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 ImmobilienMarkler GmbH. Alle Rechte vorbehalten.</p>
          <p>
            <a
              href="/Impressum.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Impressum
            </a>{" "}
            |
            <a
              href="/Datenschutz.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {" "}
              Datenschutz
            </a>{" "}
            |
            <a
              href="/AGB.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              AGB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
