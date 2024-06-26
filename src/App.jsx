import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import { fetchAllMenu } from "./Services/api";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getMenu = async () => {
      const menuData = await fetchAllMenu();

      setMenu(menuData);
    };

    getMenu();
  }, []);

  function handleCartOpen() {
    setIsCartOpen((prevState) => !prevState);
  }

  const handleCart = (cartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cartItem.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          { ...cartItem, quantity: 1, itemRate: +cartItem.itemRate },
          ...prevCart,
        ];
      }
    });
  };

  return (
    <Router>
      <div>
        <NavBar handleCart={handleCartOpen} />
        {isCartOpen ? (
          <Cart datas={cart} />
        ) : (
          <Menu handleCart={handleCart} menu={menu} />
        )}
      </div>
    </Router>
  );
}

export default App;
