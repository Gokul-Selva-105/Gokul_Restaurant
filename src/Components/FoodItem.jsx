import "../Css/FoodItem.css";
const FoodItem = ({ id, itemName, itemImage, itemRate,idprp }) => {
  function sendCart() {
    idprp({id,itemName,itemImage,itemRate})
  }
  return (
    <div className="food-item">
      {itemImage && (
        <img src={itemImage} alt={itemName} className="food-item-image" />
      )}
      <div className="food-item-details">
        <h3>{itemName}</h3>
        <p>KWD {parseFloat(itemRate).toFixed(2)}</p>
        <button onClick={sendCart}>Add to Cart</button>
      </div>
    </div>
  );
};
export default FoodItem;

