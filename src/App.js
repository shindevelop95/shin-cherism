import './App.css';
import React,{useState,useEffect} from 'react';
import {commerce} from './lib/commerce'; 
import { About,Feature,Footer,Landing,Nav,Products,Slides,Cart, Checkout } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SettingsApplicationsRounded } from '@material-ui/icons';

function App() {

  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  const handleUpdateCartQty = async(productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart);
  }

  const handleRemoveFromCart = async(productId) => {
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async() => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log("Show me the cart", cart)
  return (
    <div className="App">
      <Router>
      <Nav totalItems={cart.total_items}/>
        <Switch>
          <Route path="/product">
            <Products products={products} onAddToCart={handleAddToCart}/>
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
            <Checkout cart={cart}/>
          </Route>
          <Route path="/">
            <Landing />
            <Slides/>
            <About/>
            <Feature/>
            <Footer/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
