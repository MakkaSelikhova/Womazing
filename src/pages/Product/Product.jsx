import { useEffect, useState, useContext } from "react";
import Path from "../../components/path/Path";
import styles from "./Product.module.sass";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../App"


const Product = () => {
  const [product, setProduct] = useState([]);
  const navigate=useNavigate()
  const { productId } = useContext(ProductContext)
  useEffect(() => {
    fetch(
      `https://64b6a003df0839c97e15e431.mockapi.io/products?id=${productId}`
    ).then((res) => res.json().then((res) => setProduct(res[0])));
    navigate(`?id=${productId}`)
  },
   []);
 


  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <h2 className={styles.product__name}>{product.name}</h2>
        <Path />
        <div className={styles.product__main}>
          <div
            style={{ backgroundImage: `url(${product.imageUrl})` }}
            src={product.imageUrl}
            alt={product.name}
            className={styles.product__img}
          ></div>
          <div className={styles.product__description}>
            <div className={styles.product__price}>{product.price} ₽</div>

            {product.size && product.size.length > 0 ? (
              <div> 
                <h4 className={styles.product__text}>Выберите размер</h4>
                <div className={styles.product__sizeMain}>
                  {product.size.map((item, i) => (
                    <div className={styles.product__size} key={i}>{item}</div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}

            <div>
              <h4 className={styles.product__text}>Выберите цвет</h4>
              <div className={styles.product__colorMain}>
                {product.color
                  ? product.color.map((item, i) => (
                      <div
                        style={{ backgroundColor: item }}
                        key={i}
                        className={styles.product__color}
                      ></div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
