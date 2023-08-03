import Arrow from "../../../../svg/Arrow";
import styles from './Btn.module.sass'
import { Link } from 'react-router-dom';

const Btn = () => {
  return (
    <div className={styles.btn__main}>
      <div className={styles.btn__bg}>
        <Arrow/>
      </div>
      <Link to="/store" className={styles.btn}>
        <span className={styles.btn__text}>Открыть магазин</span>
      </Link>
    </div>
  );
};

export default Btn;
