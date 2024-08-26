import { bgVideo2 } from "../assets/videos";
import { useEffect, useRef } from 'react';


const Hero = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Fehlerbehandlung, z.B. Fehler protokollieren oder stattdessen ein Bild anzeigen
        console.log('Video konnte nicht abgespielt werden:', error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full">
       <video  
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={bgVideo2} 
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        />
       
       <div className="relative z-10 flex flex-col items-center justify-center font-cinzel h-full text-center text-white">
          <h1 className="md:text-4xl font-bold">Regionale Immobilien</h1>
          <p>Wir öffnen Türen zu deiner Heimat</p>
          <a href="#properties"><button className="btn btn-hover">Finde <strong>dein</strong> neues Zuhause</button></a>
       </div>
      
       
     </section>
  )
}


  export default Hero;