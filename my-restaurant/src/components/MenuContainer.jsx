import "./MenuContainer.css";
import MenuItems from "./MenuItems";

export default function MenuContainer({ foodData, onSelect }) {
  return (
    <div className="menu-container">
      <header className="header">
        <h3> رستوران من شعبه تهران</h3>
      </header>
      <main className="main">
        {foodData.map((food) => (
          <MenuItems
            key={food.name}
            foodName={food.name}
            foodPrice={food.price}
            foodImage={food.img}
            foodCount={food.count}
            onSelect={onSelect}
          />
        ))}
      </main>
    </div>
  );
}
