import Headerline from "../../components/headerline/Headerline";
import styles from './Contacts.module.sass'
import Path from '../../components/path/Path'
import BrandHeaderline from "../../components/brand/BrandHeaderline";
import Form from "./form/Form";

const Contacts = () => {
    return ( <div className={styles.container}>
        <Headerline text="Контакты"/>
        <Path/>
        <div className={styles.contacts}></div>
        <BrandHeaderline text="Напишите нам" />
        <Form/>
    </div> );
}
 
export default Contacts;