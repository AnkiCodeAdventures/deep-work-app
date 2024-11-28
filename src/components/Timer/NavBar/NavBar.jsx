import { Text } from "@mantine/core";
import styles from "./navBar.module.css";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <Text className={styles.heading}>Deep Work Timer</Text>
    </div>
  );
}

export default NavBar;
