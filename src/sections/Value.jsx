import React, { useState } from "react";

const Listing = () => {
  const [squareMeters, setSquareMeters] = useState("");
  const [rooms, setRooms] = useState("");
  const [location, setLocation] = useState("");
  const [value, setValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const estimatedValue =
      parseFloat(squareMeters) * 2000 + parseFloat(rooms) * 1000;
    setValue(estimatedValue);
  };

  return (
    <section
      id="listing"
      className="h-[100vh] bg-background flex flex-col items-center text-white"
    >
      <hr className="w-[90vw] " />
      <h1>Immobilie verkaufen</h1>
      <form onSubmit={""} className="space-y-4">
        <div className="flex  items-center">
          <label
            htmlFor="squareMeters"
            className=" text-sm font-medium white mr-5 w-full"
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
          />
          <label
            htmlFor="squareMeters"
            className=" text-sm font-medium white mr-5 w-full"
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
          />
        </div>
      </form>
    </section>
  );
};

export default Listing;
