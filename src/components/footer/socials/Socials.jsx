import Instagram from "./socials img/instagram (1) 1.png"
import Facebook from "./socials img/facebook (1) 1.png"
import Twitter from "./socials img/twitter (1) 1.png"
import styles from './Socials.module.sass'

const Socials = () => {
    return ( <div className={styles.socials__main}>
        <img src={Instagram}/>
        <img src={Facebook}/>
        <img src={Twitter}/>
    </div> );
}
 
export default Socials;