import styles from './DropMenu.module.sass'
const DropMenu = () => {
  const dropItems = [
    { text: "Рубашки", link: "Shirt", id: 1 },
    { text: "Жакеты", link: "Jacket", id: 2 },
    { text: "Юбки", link: "Skirt", id: 3 },
    { text: "Платки", link: "Handkerchief", id: 4 },
  ];
  return (
    <div className={styles.dropMenu__main}>
      <ul>
        {dropItems.map(({ text, link, id }) => (
          <li className={styles.drop__item} key={id}>
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;
