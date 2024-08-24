import { realEstateImg } from "../assets/img";

const Hero = () => {
  return (
    <section
      id="hero"
      className="xl:padding-1 wide:padding-r padding-b h-[92vh] bg-background text-tc"
     >
      <div className="flex flex-col justify-center items-center p-10">
        <img src={realEstateImg} alt="House-1" width={700} height={700} className=" rounded-xl "/>
        <p>Der Traum vom  <span className="font-bold">Eigenheim</span> - Mache ihn zur Realität</p>
      	<a href="#properties">
          <button className="btn btn-hover">Finde <strong>dein</strong> neues Zuhause</button>
        </a>
        
      </div>
     </section>
  )}


  export default Hero