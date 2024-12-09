import {
  ActionIcon,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import styles from "./navBar.module.css";
import { IconSun } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";

function NavBar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <div className={styles.navBar}>
      <Text className={styles.heading}>Deep Work Timer</Text>
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className={`${styles.icon} ${styles.light}`} stroke={1.5} />
        <IconMoon className={`${styles.icon} ${styles.dark}`} stroke={1.5} />
      </ActionIcon>
    </div>
  );
}

export default NavBar;
