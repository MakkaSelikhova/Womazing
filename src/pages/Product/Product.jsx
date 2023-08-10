import { useEffect, useState } from "react";
import Headerline from "../../components/headerline/Headerline";
import styles from "./Product.module.sass";

const Product = ({ productId }) => {

  
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    fetch(
      `https://64b6a003df0839c97e15e431.mockapi.io/products?id=${productId}`
    ).then(
      (res) => res.json().then(
        (res) => setProduct(res[0])
        )
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <h2>{product.name}</h2>
        <div
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          src={product.imageUrl}
          alt={product.name}
          className={styles.product__img}
        ></div>
        <div>
          <div className={styles.product__pricee}>{product.price}</div>

          {product.size && product.size.length > 0 ? (
            <div>
              <div className={styles.product__title}>Выберите размер</div>
              {product.size.map((item) => (
                <div className={styles.product__size}>{item}</div>
              ))}
            </div>
          ) : (
            ""
          )}

          <div>
            <div className={styles.product__title}>Выберите цвет</div>
            {product.color
              ? product.color.map((item) => (
                  <div
                    style={{  backgroundColor: item  }}
                    className={styles.product__color}>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
