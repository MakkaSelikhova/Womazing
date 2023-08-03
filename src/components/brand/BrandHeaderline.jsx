import styles from "./BrandHeaderline.module.sass"
const BrandHeaderline = ({text}) => {
    return (  <h3 className={styles.text}>{text}</h3> );
}
 
export default BrandHeaderline;