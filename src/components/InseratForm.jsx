import { useState } from "react";


const InseratForm = () => {

  const [formData, setFormData] = useState({
    beschreibung: '',
    adresse: '',
    typ: '',
    bilder: [],
  });

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

    const formDataToSend = {};
    for (const [key, value] of Object.entries(formData)) {
        formDataToSend[key] = value;
    }
    formDataToSend.bilder = formData.bilder.map(file => file.name);

    console.log("Gesammelte Formulardaten:", formDataToSend);
  };
  return (
    <div className="flex justify-center w-full mt-20">
      <form onSubmit={handleSubmit} className="bg-[#2a313c] text-white p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-3xl">
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
            className=" w-full"
          />
        </div>
        <button type="submit" className="w-full btn btn-hover">
          Inserat erstellen
        </button>
      </form>
    </div>
  )
}

export default InseratForm