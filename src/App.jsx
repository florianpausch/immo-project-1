import Navi from "./sections/Navi";
import Hero from "./sections/Hero";
import ImmoCard from "./sections/ImmoCard";

const App = () => (
  <main className="relative">
    < Navi />
    <section>
      <Hero />
    </section>
    <section>
      <ImmoCard />
    </section>
    <section className="padding">
      2
    </section>
    <section className="padding">
      3
    </section>
    <section className="padding">
      4
    </section>
  </main>
)

export default App;