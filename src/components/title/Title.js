import styles from './Title.module.sass'
const Title = ({text}) => {
   
    return <h2 className={styles.title }>{text}</h2>
   
}

export default Title;