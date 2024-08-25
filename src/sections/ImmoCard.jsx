import { useState } from "react";
import { immoCards } from "../constants";


const ImmoCard = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  

  const showMoreCards = () => {
  
    setVisibleCount((prevCount) => prevCount + 4 )
  }


  return (
    <section id="properties" className="bg-background w-full pb-5">
      <div className="flex flex-col justify-center items-center  text-white">
        <div className="mt-20 font-cinzel md:text-3xl font-semibold">Alle verfügbaren Imoobilien in der Übersicht:</div>

        
      <div className="flex flex-row justify-center flex-wrap">
         {/*Dynamische ImmoCards, begrenzt auf die Anzahl `visibleCount` */}
         {immoCards.slice(0, visibleCount).map((card) => (
          <div key={card.id} className="border-4 mx-5 border-navbg rounded-3xl p-5 flex flex-col items-center justify-center mt-8 font-palanquin">
            <div>{card.type}</div>
            <hr className="h-1 bg-white  border-none w-full my-2"/>
            <div>
              <img src={card.img} alt={`immo-${card.id}`} width={200} className=" rounded-xl mt-4 h-[150px]" />
            </div>
            <div className="flex flex-col items-center">
              <div>{card.price}</div>
              <div>{card.qm}</div>
              <div>{card.city}</div>
              <div>{card.street}</div>
            </div>
          </div>
        ))}
      </div>


        {/* Button "Mehr anzeigen" */}
        {visibleCount < immoCards.length && (
          <button
            onClick={showMoreCards}
            className="btn btn-hover "  
          >Mehr anzeigen</button>
        )}
      </div>
      
    </section>
  )
}

export default ImmoCard