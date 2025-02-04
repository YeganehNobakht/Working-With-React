import Card from "./components/Card";
import "./App.css";
import { FoodData } from "./foodData";
import MenuContainer from "./components/MenuContainer";

function App() {
  function onselectHandler() {
    console.log("select");

    console.log(FoodData);
  }

  onselectHandler();
  return (
    <div id="app" className="app">
      <Card />
      <MenuContainer foodData={FoodData} onSelect={() => onselectHandler()} />
    </div>
  );
}

export default App;
