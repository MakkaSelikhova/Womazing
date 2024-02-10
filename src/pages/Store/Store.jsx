import styles from "./Store.module.sass";
import Headerline from "../../components/headerline/Headerline";
import Catalog from "./catalog/Catalog";
import Path from "../../components/path/Path";
import Filters from "./filters/Filters";
import React, { useState, useEffect } from "react";
import qs from "qs";

const Store = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    if (window.location.search) {
      const parse = qs.parse(window.location.search.substring(1));
      updateData(+parse.id);
    } else {
      fetch("https://64b6a003df0839c97e15e431.mockapi.io/products")
        .then((res) => res.json())
        .then((data) => setCatalog(data));
    }
  }, []);
  const updateData = (id) => {
    fetch(
      `https://64b6a003df0839c97e15e431.mockapi.io/products?categoryId=${id}`
    )
      .then((res) => res.json())
      .then((res) => setCatalog(res));
  };
  return (
    <div className="container">
      <div className={styles.store__main}>
        <Headerline text="Магазин" />
        <Path />
        <Filters setCatalog={setCatalog} />
        <Catalog catalog={catalog}  />
      </div>
    </div>
  );
};

export default Store;
