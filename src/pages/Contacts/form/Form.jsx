import styles from "./Form.module.sass"

const Form = () => {
  return (
    <div className={styles.main}>
      <form action="">
        <div className={styles.form}>
          <input className={styles.form__input} type="text" name="name" placeholder="Имя"/>
          <input className={styles.form__input} type="text" name="E-mail" placeholder="E-mail"/>
          <input className={styles.form__input} type="text" name="Телефон" placeholder="Телефон"/>
          <textarea className={styles.form__message}  name="text" placeholder="Сообщение"></textarea>
          {/* <input className={styles.form__message}  name="text" placeholder="Сообщение"/> */}
          <button className={styles.form__send} >Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
