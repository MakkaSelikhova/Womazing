import Logo from "../nav/logo/Logo";
import styles from "./Footer.module.sass";
import Menu from "../nav/menu/Menu";
import Phone from "../nav/phone/Phone";
import Rights from "./legacy/Legacy";
import DropMenu from "./dropMenu/DropMenu";
import Mail from "./mail/Mail"
import Socials from "./socials/Socials";

const Footer = ({setCatalog}) => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__main}>
        <div className={styles.footer__title}>
          <Logo />
          <Menu  />
          <Phone />
        </div>
        <div className={styles.footer__mail}><Mail/></div>
        <div className={styles.footer__row}>
          <div className={styles.footer__col1}><Rights /></div>
          <div className={styles.footer__col2}><DropMenu  setCatalog={setCatalog} /></div>
          <div className={styles.footer__col3}> <Socials/></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
