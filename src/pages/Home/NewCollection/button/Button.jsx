import styles from './Button.module.sass'
import { Link } from 'react-router-dom';
const Button = () => {
    return ( < div >
        
        <Link to="/store" className={styles.btn}><span className={styles.btn__text}>Открыть магазин</span></Link></div>  );
}
 
export default Button;