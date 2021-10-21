import "./App.css";
import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import {
  About,
  Feature,
  Footer,
  Landing,
  Nav,
  Products,
  Slides,
  Cart,
  Checkout,
  Blog,
} from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Nav totalItems={cart.total_items} />
          <div className="logoWrap">
            <Link to="/">
              <img className="logo" src="images/logo.png" alt="logo" />
            </Link>
          </div>
          <Switch>
            <Route path="/product">
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route path="/cart">
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route path="/checkout">
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Landing />
              <Slides />
              <About />
              <Feature />
            </Route>
          </Switch>
          <Footer name="contact" id="contact" />
        </Router>
      </div>
    </>
  );
}

export default App;
