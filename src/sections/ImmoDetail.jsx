import { useParams, useNavigate } from "react-router-dom";
import { immoCards } from "../constants";
import { useEffect, useRef } from "react";

const ImmoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const immoDetailRef = useRef(null); // Reference für den ImmoDetail-Container
  const immo = immoCards.find((card) => card.id === parseInt(id));

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

  return (
      <div ref={immoDetailRef} className="detail-container">
        <h1 className="w-[60vw] text-center">{immo.desc}</h1>
        <img src={immo.img} alt={`immo-${immo.id}`} width={200} className="rounded-xl my-5"/>
      <ul className="text-left inline-block">
        <li className="mb-2"><strong>Typ:</strong> {immo.type}</li>
        <li className="mb-2"><strong>Preis:</strong> {immo.price}</li>
        <li className="mb-2"><strong>Fläche:</strong> {immo.qm}</li>
        <li className="mb-2"><strong>Zimmer:</strong> {immo.rooms}</li>
        <li className="mb-2"><strong>Stadt:</strong> {immo.city}</li>
        <li className="mb-2"><strong>Straße:</strong> {immo.street}</li>
      </ul>
      

      <div className="flex flex-row justify-center mx-3 text-xs md:text-lg">
      <button onClick={() => navigate("/")} className="btn btn-hover mt-4">
        Zurück zur Übersicht
      </button>
      <button className="btn btn-hover ml-5">
        Besichtigungstermin Anfragen
      </button>
      </div>
    </div>
  );
};

export default ImmoDetail;
