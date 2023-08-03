import Title from "../../../components/title/Title";
import styles from "./Band.module.sass";
import BandText from "./bandText/BandText";
import Img from "./img/Img";


const Band = () => {
  return (
    <div className={styles.container}>      
      <div className={styles.band__title}>
        <Title text="Команда мечты Womazing" />
      </div>
      <div className={styles.band__main}>
        <Img/>
        <BandText/>
        
              
      </div>
    
    </div>
  );
};

export default Band;
