import { Paper, Text, Title } from "@mantine/core";
import styles from "./card.module.css";

function FocusCard() {
  return (
    <Paper shadow="xs" p="xl" className={`${styles.card} ${styles.focus} `}>
      <Title order={2}>Focus Over Distraction</Title>
      <Text>
        Don’t Take Breaks from Distraction. Instead Take Breaks from Focus. Many
        assume that they can switch between a state of distraction and one of
        concentration as needed but this assumption is optimistic: Once you’re
        wired for distraction, you crave it. Instead of scheduling the
        occasional break from distraction so you can focus, you should instead
        schedule the occasional break from focus to give in to distraction.
        Schedule in advance when you’ll use the Internet, and then avoid it
        altogether outside these times. For example, if you’ve scheduled your
        next Internet block thirty minutes from the current moment, and you’re
        beginning to feel bored and crave distraction, the next thirty minutes
        of resistance become a session of{" "}
        <span className={styles.highlight}>concentration calisthenics</span>.
      </Text>
    </Paper>
  );
}

export default FocusCard;
