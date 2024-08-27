import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navi from "./sections/Navi";
import Hero from "./sections/Hero";
import ImmoCard from "./sections/ImmoCard";
import ImmoDetail from "./sections/ImmoDetail";
import Inserat from "./sections/Inserat";

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
    </main>
  </Router>
);

export default App;
