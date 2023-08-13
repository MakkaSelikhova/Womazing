import ShoppingBagSvg from "../../../svg/ShoppingBag";
import styles from './ShoppingBag.module.sass'
import {Link} from "react-router-dom";

const ShoppingBag = () => {
    return (<Link  to="ShoppingBag" className={styles.shoppingBag}><ShoppingBagSvg/></Link>);
}

export default ShoppingBag;