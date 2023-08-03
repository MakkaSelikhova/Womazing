import styles from "./Headerline.module.sass"
const Headerline = ({text}) => {
  return (
    <div>
      <h1 className={styles.headerline__title}>
       {text}
      </h1>
    </div>
  );
};

export default Headerline;
