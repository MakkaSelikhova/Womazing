import React, { useState, useEffect } from "react";
import styles from "./NewCollection.module.sass";
import Button from "./button/Button";
import Title from "../../../components/title/Title";

const NewCollection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://64b6a003df0839c97e15e431.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const firstThreeProducts = data.slice(0, 3);
        setData(firstThreeProducts);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Title text="Новая коллекция" />
      <div className={styles.newCollection}>
        {data.map((data) => (
          <div key={data.id}>
            <div style={{backgroundImage:`url(${data.imageUrl})`}}
              src={data.imageUrl}
              alt={data.name}
              className={styles.newCollection__img}></div>
            
            <h4 className={styles.newCollection__text}>{data.name}</h4>
            <p className={styles.newCollection__price}>{data.price}</p>
          </div>
        ))}
      </div>
      <div className={styles.newCollection__btn}>
        <Button />
      </div>
    </div>
  );
};

export default NewCollection;
