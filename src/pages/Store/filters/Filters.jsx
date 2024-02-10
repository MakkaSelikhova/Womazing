import { useEffect } from "react";
import { useState } from "react";
import styles from "./Filters.module.sass";
import { useNavigate } from "react-router-dom";

const Filters = ({ setCatalog }) => {
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://64b6a003df0839c97e15e431.mockapi.io/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  const updateData = (id) => {
    fetch(
      `https://64b6a003df0839c97e15e431.mockapi.io/products?categoryId=${id}`
    )
      .then((res) => res.json())
      .then((res) => setCatalog(res));
  };

  const handleGetId = (id) => {
    if (id === "all") {
      fetch("https://64b6a003df0839c97e15e431.mockapi.io/products")
        .then((res) => res.json())
        .then((res) => setCatalog(res));
      setActiveId("all");
      navigate("");
    } else {
      updateData(id);
      setActiveId(id);
      navigate(`?id=${id}`);
    }
  };

  return (
    <div className={styles.filter}>
      <div
        className={`${styles.filter__item} ${
          activeId === "all" ? styles.active : ""
        }`}
        onClick={() => handleGetId("all")}
      >
        Все
      </div>
      {categories.map(({ name, id }) => (
        <div
          className={`${styles.filter__item} ${
            activeId === id ? styles.active : ""
          }`}
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
