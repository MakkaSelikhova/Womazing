import { Link } from "react-router-dom";
import styles from "./Path.module.sass";
const Path = () => {
  const pathItems = [
    { text: "Главная", link: "/", id: 0 },
    { text: "Магазин", link: "store", id: 1 },
  ];
  return (
    <div className={styles.path__main}>
      {pathItems.map(({ text, link, id }) => (
        <div className={styles.path__itame} key={id}>
          <Link to={link}>{text}</Link>
        </div>
      ))}
    </div>
  );
};

export default Path;
