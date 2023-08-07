import { useEffect } from "react";
import { useState } from "react";
import styles from "./Filters.module.sass";

const Filters = ({ setCatalog }) => {
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://64b6a003df0839c97e15e431.mockapi.io/categories")
      .then((res) => res.json())
      .then((res) => setCatagories(res));
  }, []);

  const handleGetId = (id) => {
    if (id === "all") {
      fetch("https://64b6a003df0839c97e15e431.mockapi.io/products")
        .then((res) => res.json())
        .then((res) => setCatalog(res));
    } else {
      fetch(
        `https://64b6a003df0839c97e15e431.mockapi.io/products?categoryId=${id}`
      )
        .then((res) => res.json())
        .then((res) => setCatalog(res));
    }
  };
  return (
    <div className={styles.filter}>
      <div className={styles.filter__item} onClick={() => handleGetId("all")}>
        Все
      </div>
      {categories.map(({ name, id }) => (
        <div
          className={styles.filter__item}
          key={id}
          onClick={() => handleGetId(id)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Filters;
