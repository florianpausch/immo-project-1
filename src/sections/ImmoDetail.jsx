import { useParams, useNavigate } from "react-router-dom";
import { immoCards } from "../constants";
import { useEffect, useRef, useState } from "react";

const ImmoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const immoDetailRef = useRef(null); // Reference für den ImmoDetail-Container
  const immo = immoCards.find((card) => card.id === parseInt(id));

  //Zustand füt das aktuelle Bild
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (immoDetailRef.current) {
      // Scrollt zu dem ImmoDetail-Container, wenn die Seite geladen wird
      immoDetailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  if (!immo) {
    return <div>Immobilie nicht gefunden</div>;
  }

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div ref={immoDetailRef} className="detail-container">
      {/* Schließ-Button oben rechts */}
      <button
        onClick={() => navigate("/")}
        className="close-button"
        aria-label="Schließen"
      >
        &times;
      </button>
      <h1 className="w-[60vw] text-center">{immo.desc}</h1>

      {/* Slider */}
      <div className="flex flex-row justify-centeralign-center mx-2 relative">
        <button
          className="text-4xl mr-5"
          onClick={() =>
            handleImageChange(
              (currentImageIndex - 1 + immo.imgSlider.length) %
                immo.imgSlider.length
            )
          }
          aria-label="Vorheriges Bild"
        >
          &lt;
        </button>

        <img
          src={immo.imgSlider[currentImageIndex]}
          alt={`immo-${immo.id}`}
          className="rounded-xl my-5 object-cover w-[250px] h-[180px]  md:w-[600px] md:h-[400px]"
        />

        <button
          className="text-4xl ml-5"
          onClick={() =>
            handleImageChange((currentImageIndex + 1) % immo.imgSlider.length)
          }
          aria-label="Nächstes Bild"
        >
          &gt;
        </button>
      </div>

      {/*<img src={immo.img} alt={`immo-${immo.id}`} width={200} className="rounded-xl my-5"/>*/}

      <ul className="text-left inline-block">
        <li className="mb-2">
          <strong>Typ:</strong> {immo.type}
        </li>
        <li className="mb-2">
          <strong>Preis:</strong> {immo.price}
        </li>
        <li className="mb-2">
          <strong>Fläche:</strong> {immo.qm}
        </li>
        <li className="mb-2">
          <strong>Zimmer:</strong> {immo.rooms}
        </li>
        <li className="mb-2">
          <strong>Stadt:</strong> {immo.city}
        </li>
        <li className="mb-2">
          <strong>Straße:</strong> {immo.street}
        </li>
      </ul>

      <div className="flex flex-row justify-center mx-3 text-xs md:text-lg">
        <button className="btn btn-hover ml-5">
          Besichtigungstermin Anfragen
        </button>
      </div>
    </div>
  );
};

export default ImmoDetail;
