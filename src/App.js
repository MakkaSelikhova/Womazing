import { Routes, Route } from "react-router-dom";
import styles from "./App.module.sass";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Brand from "./pages/Brand/Brand";
import Contacts from "./pages/Contacts/Contacts";
import Product from "./pages/Product/Product";
import React, { useState, createContext } from "react";

export const ProductContext = React.createContext();

const App = () => {
  const [productId, setProductId] = useState(0);
  return (
    <div>
      <ProductContext.Provider value={{productId,  setProductId}}>
        <div className={styles.container}>
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store  />} />
          <Route path="brand" element={<Brand />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="product" element={<Product />} />
        </Routes>

        <div className={styles.app__backgroundFooter}>
          <Footer />
        </div>
      </ProductContext.Provider>
    </div>
  );
};

export default App;
