import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import { products } from "./product";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addItems = (product) => {
    setItems([...items, product]);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home products={products} addItems={addItems} items={items} />
          }
        />
        <Route
          path="/basket"
          element={<Basket items={items} setItems={setItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
