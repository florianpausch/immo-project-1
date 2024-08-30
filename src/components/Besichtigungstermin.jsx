import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Styles für den Kalender
import { format } from "date-fns";

const Besichtigungstermin = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier können Sie die Daten an den Server senden oder andere Aktionen ausführen
    console.log("Besichtigungstermin Anfrage:", {
      date: format(date, "yyyy-MM-dd"),
      time,
      name,
      email,
      phone,
    });
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#2a313c] mt-5 text-white p-6 rounded-lg text-center shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl mb-4">Besichtigungstermin Anfragen</h2>

      {/* Kalender */}
      <div className="mb-4 flex flex-col justify-center items-center">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="react-calendar"
        />
        <p className="text-center mt-2 text-sm">
          Ausgewähltes Datum: {format(date, "dd.MM.yyyy")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-semibold mb-2">
            Zeit:
          </label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ihr Name"
            required
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            E-Mail-Adresse:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ihre E-Mail-Adresse"
            required
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Telefonnummer:
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ihre Telefonnummer"
            required
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
          />
        </div>
        <button type="submit" className="w-full btn btn-hover">
          Termin Anfragen
        </button>
      </form>

      {formSubmitted && (
        <div className="mt-4 text-center text-green-400">
          <p>Ihre Anfrage wurde erfolgreich gesendet!</p>
        </div>
      )}
    </div>
  );
};

export default Besichtigungstermin;
