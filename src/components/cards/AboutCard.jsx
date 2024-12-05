import { Paper, Text, Title } from "@mantine/core";
import styles from "./card.module.css";

function AboutCard() {
  return (
    <Paper shadow="xs" p="xl" className={`${styles.card} ${styles.about} `}>
      <Title order={2}>What is Deep Work?</Title>
      <Text className={styles.italic}>
        Professional activities performed in a state of distraction-free
        concentration that push your cognitive capabilities to their limit.
        These efforts create new value, improve your skill, and are hard to
        replicate.
      </Text>
      <Text>
        When Carl Jung wanted to revolutionize the field of psychiatry, he built
        a retreat in the woods. Jung’s{" "}
        <span className={styles.highlight}>Bollingen Tower</span> became a place
        where he could maintain his ability to think deeply and then apply the
        skill to produce work of such stunning originality that it changed the
        world. We too can build our own personal Bollingen Towers:
        <span className={styles.highlight}> A deep life is a good life.</span>
      </Text>
    </Paper>
  );
}

export default AboutCard;
