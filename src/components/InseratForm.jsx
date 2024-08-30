import React, { useState } from "react";

const InseratForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    geburtstag: '',
    email: '',
    telefon: '',
    beschreibung: '',
    adresse: '',
    typ: '',
    bilder: [],
  });
  const [formShown, setFormShown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      bilder: [...e.target.files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = { ...formData };
    formDataToSend.bilder = formData.bilder.map(file => file.name);

    console.log("Gesammelte Formulardaten:", formDataToSend);
    // Hier kann auch eine Funktion zum Absenden der Daten an einen Server hinzugefügt werden.
  };

  return (
    <div className="flex flex-col items-center w-full">
      {!formShown ? (
        <button
          onClick={() => setFormShown(true)}
          className="btn btn-hover mb-4"
        >
          Formular ausfüllen
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-[#2a313c] text-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-3xl">
          {/* Neue Felder */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="geburtstag" className="block text-sm font-semibold mb-2">Geburtstag:</label>
            <input
              id="geburtstag"
              type="date"
              name="geburtstag"
              value={formData.geburtstag}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">E-Mail-Adresse:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ihre E-Mail-Adresse"
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefon" className="block text-sm font-semibold mb-2">Telefonnummer:</label>
            <input
              id="telefon"
              type="tel"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              placeholder="Ihre Telefonnummer"
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
            />
          </div>
          {/* Bestehende Felder */}
          <div className="mb-4">
            <label htmlFor="beschreibung" className="block text-sm font-semibold mb-2">Beschreibung:</label>
            <textarea
              id="beschreibung"
              name="beschreibung"
              value={formData.beschreibung}
              onChange={handleChange}
              placeholder="Geben Sie eine ausführliche Beschreibung der Immobilie ein..."
              required
              className="w-full h-16 p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adresse" className="block text-sm font-semibold mb-2">Adresse:</label>
            <input
              id="adresse"
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              placeholder="Straße, Stadt, PLZ"
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="typ" className="block text-sm font-semibold mb-2">Art des Objektes:</label>
            <select
              id="typ"
              name="typ"
              value={formData.typ}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-100 text-black"
            >
              <option value="">Bitte wählen</option>
              <option value="HausVerkaufen">Haus Verkaufen</option>
              <option value="WohnungVerkaufen">Wohnung Verkaufen</option>
              <option value="HausVermieten">Haus Vermieten</option>
              <option value="WohnungVermieten">Wohnung Vermieten</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="bilder" className="block text-sm font-semibold mb-2">Bilder:</label>
            <input
              id="bilder"
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full"
            />
          </div>
          <button type="submit" className="w-full btn btn-hover">
            Inserat erstellen
          </button>
        </form>
      )}
    </div>
  );
};

export default InseratForm;