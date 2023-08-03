import { useEffect, useState } from "react";
import styles from "./Image.module.sass";
const Image = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch("https://64b6bcbadf0839c97e160d53.mockapi.io/header")
      .then((res) => res.json())
      .then((res) => {
        setImg(res);
      });
  }, []);

  return (
    <div className={styles.img}>
      <div
        className={styles.img__main}
        style={{
          backgroundImage: `url(${
            img.find((item) => item.isMainImg === true)?.imgUrl
          })`,
        }}
      ></div>

      <div
        className={styles.img__two}
        style={{
          backgroundImage: `url(${img.find((item) => item.id === "2")?.imgUrl})`,
        }}
      ></div>

      <div
        className={styles.img__three}
        style={{
          backgroundImage: `url(${img.find((item) => item.id === "3")?.imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Image;
