import styles from "./Menu.module.sass";
import {Link} from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { text: "Главная", link: "/", id: 0 },
    { text: "Магазин", link: "store", id: 1 },
    { text: "О бренде", link: "brand", id: 2 },
    { text: "Контакты", link: "contacts", id: 3 },
  ];
  return (
    <div className={styles.menu__row}>
      <nav className={styles.menu__nav}>
        <ul>
          {menuItems.map(({ text, link, id }) => (
            <li className={styles.menu__navItame} key={id}>
              <Link to={link}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
