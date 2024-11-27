import { Text } from "@mantine/core";
import styles from "./renderTime.module.css";

function RenderTime({ hours, minutes, seconds, milliseconds }) {
  return (
    <div className={styles.displayTime}>
      <div className={styles.timeComponent}>{hours}</div>
      <div className={styles.colonBox}>
        <Text className={styles.colon}>:</Text>
      </div>
      <div className={styles.timeComponent}>{minutes}</div>
      <div className={styles.colonBox}>
        <Text className={styles.colon}>:</Text>
      </div>
      <div className={styles.timeComponent}>{seconds}</div>
      <div className={styles.colonBox}>
        <Text className={styles.colon}>:</Text>
      </div>
      <div className={`${styles.timeComponent} ${styles.millisecond}`}>
        {milliseconds}
      </div>
    </div>
  );
}

export default RenderTime;
