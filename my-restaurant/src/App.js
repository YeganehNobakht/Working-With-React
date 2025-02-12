import Card from "./components/Card";
import "./App.css";
import { FoodData } from "./foodData";
import MenuContainer from "./components/MenuContainer";
import { useState } from "react";

function App() {
  let foods;
  let setFoods;
  [foods, setFoods] = useState(FoodData.map((food) => ({ ...food, count: 0 })));

  function onselectHandler(foodName, action) {
    if (foodName) {
      let newFood = foods.map((f) => {
        if (f.name === foodName) {
          if (action === "increment") f.count++;
          else if (f.count !== 0) f.count--;
          else f.count = 0;
        }
        return f;
      });
      setFoods(newFood);
      console.log(newFood);
    }
  }

  onselectHandler();
  return (
    <div id="app" className="app">
      <Card />
      <MenuContainer foodData={foods} onSelect={onselectHandler} />
    </div>
  );
}

export default App;
