import { Routes, Route } from "react-router-dom";
import styles from "./App.module.sass";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Brand from "./pages/Brand/Brand"
import Contacts from "./pages/Contacts/Contacts";
import Product from "./pages/Product/Product";

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="store"element={<Store/>}/>
        <Route path="brand"element={<Brand/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="product/:productId" element={<Product/>}/>
      </Routes>

      <div className={styles.app__backgroundFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
