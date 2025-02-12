import "./Card.css";

export default function Card({ totalPrice, serviceFee, discount }) {
  return (
    <div className="container">
      <div className="card-info">
        <p>:جمع کل سفارشات</p>
        <p>{totalPrice} تومان</p>
      </div>
      <div className="card-info">
        <p className="card-info-title">:حق سرویس</p>
        <p className="card-info-price">{serviceFee} تومان</p>
      </div>

      <div className="card-info">
        <p className="card-info-title">:تخفیف</p>
        <p className="card-info-price">{discount} تومان</p>
      </div>
      <div className="discount-wraper">
        <input className="discount" type="text" placeholder="کد تخفیف" />
        <div className="checkbox"></div>
      </div>

      <div className="card-info totla-payment">
        <p>مبلغ قابل پرداخت</p>
        <p>{totalPrice ? totalPrice + serviceFee - discount : 0} تومان</p>
      </div>

      <button>ثبت سفارش</button>
    </div>
  );
}
