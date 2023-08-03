import Phone from "./phone/Phone";
import ShoppingBag from "./shoppingBag/ShoppingBag";
import Logo from "./logo/Logo"
import Menu from "./menu/Menu";
import styles from './Nav.module.sass'
import PhoneSvg from './../../svg/Phone'

const Nav = () => {
    return (  <div className={styles.nav}>
        <Logo/>
        <Menu/>
        <div className={styles.phone}><PhoneSvg/>
        <Phone/></div>
        
        <ShoppingBag/>
    </div>);
}
 
export default Nav;