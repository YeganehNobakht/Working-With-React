import Image from "./assets/react-core-concepts.png";
import compontentImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

function Header() {
  return (
    <header>
      <img src={Image} alt="style" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        gonna build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              // title={CORE_CONCEPTS[0].title}
              // description={CORE_CONCEPTS[0].description}
              // image={CORE_CONCEPTS[0].image}
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept
              // title={CORE_CONCEPTS[1].title}
              // description={CORE_CONCEPTS[1].description}
              // image={CORE_CONCEPTS[1].image}
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
              // title={CORE_CONCEPTS[2].title}
              // description={CORE_CONCEPTS[2].description}
              // image={CORE_CONCEPTS[2].image}
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
              // title={CORE_CONCEPTS[3].title}
              // description={CORE_CONCEPTS[3].description}
              // image={CORE_CONCEPTS[3].image}
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <h2>Time to get started...</h2>
      </main>
    </div>
  );
}

export default App;
