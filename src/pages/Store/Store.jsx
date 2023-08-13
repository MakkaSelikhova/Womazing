import styles from "./Store.module.sass";
import Headerline from "../../components/headerline/Headerline";
import Catalog from "./catalog/Catalog";
import Path from "../../components/path/Path";
import Filters from "./filters/Filters";
import React, { useState, useEffect } from "react";

const Store = ({setProductId}) => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    fetch("https://64b6a003df0839c97e15e431.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setCatalog(data));
  }, []);
  return (
    <div className='container'>
      <div className={styles.store__main}>
        <Headerline text="Магазин" />
        <Path/>
        <Filters setCatalog={setCatalog}/>
        <Catalog  catalog={catalog} setProductId={setProductId}/>
      </div>
    </div>
  );
};

export default Store;
