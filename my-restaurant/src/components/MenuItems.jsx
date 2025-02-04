import "./menuItems.css";

export default function MenuItems(
  foodImage,
  foodName,
  foodPrice,
  foodCount,
  onSelect
) {
  return (
    <div className="container">
      <div className="img-info">
        <div className="img-container">
          <img src={foodImage} alt="food" />
        </div>
        <div className="food-info">
          <p className="food-title">{foodName}</p>
          <p className="food-price"> {foodPrice} تومان</p>

          <div className="food-quantity">
            <p className="operator" onClick={onSelect}>
              +
            </p>
            <p>{foodCount}</p>
            <p className="operator" onClick={onSelect}>
              -
            </p>
          </div>
        </div>
      </div>
      <p className="total-price">{foodPrice * foodCount} تومان</p>
    </div>
  );
}
