import styles from './DropMenu.module.sass'
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
const DropMenu = ({setCatalog}) => {
  const [menuItem, setMenuItem] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://64b6a003df0839c97e15e431.mockapi.io/categories")
        .then((res) => res.json())
        .then((res) => setMenuItem(res));
  }, []);

  const updateData = (id) => {
    fetch(
        `https://64b6a003df0839c97e15e431.mockapi.io/products?categoryId=${id}`
    )
        .then((res) => res.json())
        .then((res) => setCatalog(res));

  };


  return (
    <div className={styles.dropMenu__main}>
      {menuItem.map(({ name, id }) => (
          <div
              className={styles.dropMenu__item}
              key={id}
              onClick={() => updateData(id)}
          >
            {name}
          </div>
      ))}
    </div>
  );
};

export default DropMenu;
