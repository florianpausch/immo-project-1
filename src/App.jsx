import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navi from "./sections/Navi";
import Hero from "./sections/Hero";
import ImmoCard from "./sections/ImmoCard";
import ImmoDetail from "./sections/ImmoDetail";
import Inserat from "./sections/Inserat";
import About from "./sections/About";
import UnsereGeschichte from './components/UnsereGeschichte';
import UnserTeam from "./components/UnserTeam";
import UnsereMission from "./components/UnsereMission";
import UnsereWerte from "./components/UnsereWerte";
import Kundenbewertungen from "./components/Kundenbewertungen";

const App = () => (
  <Router>
    <main className="relative">
      <Navi />
      <section>
        <Hero />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<ImmoCard />} />
          <Route path="/property/:id" element={<ImmoDetail />} />
        </Routes>
      </section>
      <section>
        <Inserat />
      </section>
      <section>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/unsere-geschichte" element={<UnsereGeschichte />} />
          <Route path="/unser-team" element={<UnserTeam />} />
          <Route path="/unsere-mission" element={<UnsereMission />} />
          <Route path="/unsere-werte" element={<UnsereWerte />} />
          <Route path="/Kundenbewertungen" element={<Kundenbewertungen />} />
        </Routes>
      </section>
    </main>
  </Router>
);

export default App;
