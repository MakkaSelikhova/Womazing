import MenuLogoSvg from "../../../svg/Menu";
import styles from './Logo.module.sass'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
      <div className={styles.logo}>
        <Link to="/" className={styles.logo__link}>
          <MenuLogoSvg />
          <span className={styles.logo__text}>WOMAZING</span>
        </Link>
      </div>
    );
  };
  
  export default Logo;