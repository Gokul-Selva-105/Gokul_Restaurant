import FoodItem from "./FoodItem";
import "../Css/Menu.css";
const Menu = ({ handleCart, menu }) => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menu.map((item) => (
          <FoodItem
            key={item.SrNo}
            id={item.SrNo}
            itemName={item.ItemName}
            itemImage={
              "https://via.assets.so/img.jpg?w=200&h=150&tc=#fffccc&bg=#cccccc"
            }
            itemRate={item.Rate}
            idprp={handleCart}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;
