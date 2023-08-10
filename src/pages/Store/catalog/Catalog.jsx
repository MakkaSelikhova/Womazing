import { Link } from "react-router-dom";
import styles from "./Catalog.module.sass";

const Catalog = ({catalog}) => {
  return (
    <div className={styles.store}>
      {catalog.map((item) => (
        <Link to={`/product/${item.id}`}>
          <div
            style={{ backgroundImage: `url(${item.imageUrl})` }}
            src={item.imageUrl}
            alt={item.name}
            className={styles.store__img}
          ></div>

          <h4 className={styles.store__text}>{item.name}</h4>
          <p className={styles.store__price}>{item.price } ₽</p>
        </Link>
      ))}
    </div>
  );
};

export default Catalog;
