import React, { useState } from "react";

const ValueForm = ({ setValue, value }) => {
  const [squareMeters, setSquareMeters] = useState("");
  const [rooms, setRooms] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("gut");
  const [yearBuilt, setYearBuilt] = useState("");
  const [formShown, setFormShown] = useState(false);

  const handleEstimate = (e) => {
    e.preventDefault();

    let basePricePerSquareMeter = 2500;

    if (location === "Innenstadt") {
      basePricePerSquareMeter += 1000;
    } else if (location === "Vorstadt/Dorf") {
      basePricePerSquareMeter += 500;
    } else if (location === "Ländlich") {
      basePricePerSquareMeter -= 200;
    }

    if (condition === "exzellent") {
      basePricePerSquareMeter += 500;
    } else if (condition === "renovierungsbedürftig") {
      basePricePerSquareMeter -= 500;
    }

    const currentYear = new Date().getFullYear();
    const buildingAge = currentYear - parseInt(yearBuilt);

    if (buildingAge < 10) {
      basePricePerSquareMeter += 200;
    } else if (buildingAge < 20) {
      basePricePerSquareMeter += 100;
    } else if (buildingAge > 50) {
      basePricePerSquareMeter -= 300;
    }

    const estimatedValue =
      parseFloat(squareMeters) * basePricePerSquareMeter +
      parseFloat(rooms) * 10000;

    setValue(estimatedValue);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Formular wird nur angezeigt, wenn formShown true ist */}
      {!formShown ? (
        <button
          onClick={() => setFormShown(true)}
          className="btn btn-hover mb-4"
        >
          Wert schätzen
        </button>
      ) : (
        <form onSubmit={handleEstimate} className="space-y-4 w-full max-w-[90vw] md:max-w-md bg-[#2a313c] rounded-xl p-5">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-center items-center">
              <label
                htmlFor="squareMeters"
                className="text-sm font-medium white mr-5 w-full"
              >
                Quadratmeter in m²:
              </label>
              <input
                type="number"
                id="squareMeters"
                value={squareMeters}
                onChange={(e) => setSquareMeters(e.target.value)}
                className="mt-1 text-black block w-full pl-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                min={20}
                max={500}
                placeholder="150"
              />
            </div>
            <div className="flex flex-row items-center justify-center">
              <label
                htmlFor="rooms"
                className="text-sm font-medium white mr-5 w-full"
              >
                Anzahl der Räume
              </label>
              <input
                type="number"
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="mt-1 pl-3 text-black block w-full  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                min={1}
                max={15}
                placeholder="5"
              />
            </div>
            <div className="flex flex-row items-center justify-center">
              <label
                htmlFor="location"
                className="text-sm font-medium white mr-5 w-full"
              >
                Lage des Objekts:
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 text-black block w-full pl-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Innenstadt">Innenstadt</option>
                <option value="Vorstadt/Dorf">Vorstadt / Dorf</option>
                <option value="Ländlich">Ländlich</option>
              </select>
            </div>
            <div className="flex flex-row items-center justify-center">
              <label
                htmlFor="condition"
                className="text-sm font-medium white mr-5 w-full"
              >
                Zustand des Objekts:
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="mt-1 text-black block w-full pl-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="gut">Gut</option>
                <option value="exzellent">Exzellent</option>
                <option value="renovierungsbedürftig">
                  Renovierungsbedürftig
                </option>
              </select>
            </div>
            <div className="flex flex-row items-center justify-center">
              <label
                htmlFor="yearBuilt"
                className="text-sm font-medium white mr-5 w-full"
              >
                Baujahr
              </label>
              <input
                type="number"
                id="yearBuilt"
                value={yearBuilt}
                onChange={(e) => setYearBuilt(e.target.value)}
                className="mt-1 text-black block w-full pl-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                min={1950}
                max={2024}
                placeholder="2010"
              />
            </div>
            <button type="submit" className="btn btn-hover">
              Immobilienwert Schätzen
            </button>
          </div>
        </form>
      )}

      {value && (
        <div className="mt-6 text-center">
          <p className="text-xl mb-4">
            Geschätzter Immobilienwert:{" "}
            <span className="font-bold">
              {value.toLocaleString("de-DE")} €
            </span>
          </p>
          <p>
            Dieser Wert ist nur eine grobe Schätzung. Erfahren Sie mehr, indem
            Sie unser Team{" "}
            <a href="#contact" className="font-bold underline text-blue-100">
              Kontaktieren
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ValueForm;