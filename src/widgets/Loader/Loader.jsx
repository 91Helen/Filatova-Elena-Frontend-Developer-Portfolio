import { useTranslation } from "react-i18next";
import styles from './Loader.module.css';

export const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.cosmicOrb}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.loaderText}>{t("loader.loading")}</div>
    </div>
  );
};