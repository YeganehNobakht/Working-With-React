import "./menuItems.css";

export default function MenuItems({
  foodImage,
  foodName,
  foodPrice,
  foodCount,
  onSelect,
}) {
  return (
    <div className="item-container">
      <div className="item-img-info">
        <div className="item-img-container">
          <img src={foodImage} alt="food" />
        </div>
        <div className="item-food-info">
          <p className="item-food-title">{foodName}</p>
          <p className="item-food-price"> {foodPrice} تومان</p>
        </div>
      </div>

      <div className="item-food-wrapper">
        <div className="item-food-quantity">
          <p className="operator" onClick={onSelect}>
            +
          </p>
          <p>{foodCount ? foodCount : 0}</p>
          <p className="operator" onClick={onSelect}>
            -
          </p>
        </div>
        <p className="item-total-price">
          {foodPrice * foodCount ? foodPrice * foodCount : 0} تومان
        </p>
      </div>
    </div>
  );
}
