import PhoneSvg from "../../../svg/Phone"
import styles from './Phone.module.sass'
import {Link} from "react-router-dom"

const Phone = () => {
    return (<Link to="Phone" className={styles.phone__number}>+7 (495) 823-54-12</Link>);
}

export default Phone;


