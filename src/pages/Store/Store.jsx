import styles from "./Store.module.sass"
import Headerline from "../../components/headerline/Headerline";
import Catalog from "./catalog/Catalog";

const Store = () => {
    return ( <div className={styles.container}>
        <Headerline text="Магазин"/>
        <Catalog/>
    </div> );
}
 
export default Store;