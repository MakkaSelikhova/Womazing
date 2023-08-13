import BrandHeaderline from "../../../../components/brand/BrandHeaderline";
import BrandText from "../../../../components/brandText/BrandText";
import LinkBrand from "../linkBrand/LinkBrand";
import styles from "./BandText.module.sass";
const BandText = () => {
  return (
    <div className={styles.band__main}>
      <BrandHeaderline text="Для каждой" />
      <BrandText
        text1="Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей."
        text2="Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки."
      />
      <LinkBrand />
    </div>
  );
};

export default BandText;
