import "../Css/Cart.css";
const Cart = ({ datas }) => {
  function bookNow() {
    if (totalPrice) {
      alert("Your Order as been Plased Success");
    }
    else{
      alert("Add Item To Plase Order")
    }
  }
  const totalPrice = datas.reduce((acc, data) => {
    return data.itemRate * data.quantity + acc;
  }, 0);

  return (
    <>
      <div className="outer">
        <h1>Total Order</h1>
        <div className="main">
          {datas.map((data, index) => {
            return (
              <div className="fx" key={index}>
                <img
                  src="https://via.assets.so/img.jpg?w=200&h=150&tc=#fffccc&bg=#cccccc"
                  alt=""
                />
                <div className="oned">
                  <h2>Item Name: {data.itemName}</h2>
                  <p>Iten quantity: {data.quantity}</p>
                </div>
                <p>Price : KWD {data.itemRate * data.quantity}</p>
              </div>
            );
          })}
          <p className="pr">Total Price: KWD {totalPrice}</p>

          <button className="ord" onClick={bookNow}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
