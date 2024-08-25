import { useEffect, useState } from "react";
import { logo } from "../assets/img";
import { navLinks } from "../constants";

const Navi = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const shouldBeFixedElement = document.getElementById("should_be_fixed");
    if (shouldBeFixedElement) {
      setOffsetTop(shouldBeFixedElement.offsetTop);
      setHeight(shouldBeFixedElement.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop]);

  return (
    <section>
      <div className="md:h-[15vh] pb-2 bg-background flex justify-between items-center w-full">
        <p className="text-tc font-bold text-lg md:text-4xl ml-10 font-cinzel">
          Real Estate Casa
        </p>
        <img src={logo} alt="Logo" width={90} className="mr-10" />
      </div>

      {/* Spacer Element */}
      {isFixed && <div style={{ height }} />}

      <div
        id="should_be_fixed"
        className={`h-[10vh] bg-navbg flex justify-around font-cinzel text-[10px] md:text-[16px] font-semibold items-center shadow-md z-50 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 w-full" : ""
        }`}
      >
        {navLinks.map((item) => (
          <a
            href={item.href}
            className="relative inline-block group"
            key={item.href}
          >
            <span className="text-black transition-all duration-100 ease-in group-hover:text-background">
              {item.label}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-background transition-all duration-200 ease-in group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Navi;