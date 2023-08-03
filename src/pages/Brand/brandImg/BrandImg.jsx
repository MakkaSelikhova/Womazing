import styles from "./BrandImg.module.sass"
const BrandImg = ({backgroundImage}) => {
    return ( <div className={styles.img}
    style={{backgroundImage}}></div> );
}
 
export default BrandImg;