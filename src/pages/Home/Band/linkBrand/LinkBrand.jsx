import { Link } from "react-router-dom";
import styles from "./LinkBrand.module.sass";

const LinkBrand = () => {
  return (
    <Link to="/brand" className={styles.link}>
      Подробнее о бренде
    </Link>
  );
};

export default LinkBrand;
