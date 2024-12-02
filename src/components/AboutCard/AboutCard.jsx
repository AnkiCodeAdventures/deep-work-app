import { Paper, Text, Title } from "@mantine/core";
import styles from "./aboutCard.module.css";

function AboutCard() {
  return (
    <Paper shadow="xs" p="xl" className={styles.about}>
      <Title order={2}>What is deep work?</Title>
      <Text className={styles.stanza1}>
        Professional activities performed in a state of distraction-free
        concentration that push your cognitive capabilities to their limit.
        These efforts create new value, improve your skill, and are hard to
        replicate.
      </Text>
      <Text className={styles.stanza2}>
        When Carl Jung wanted to revolutionize the field of psychiatry, he built
        a retreat in the woods. Jung’s{" "}
        <span className={styles.word}>Bollingen Tower</span> became a place
        where he could maintain his ability to think deeply and then apply the
        skill to produce work of such stunning originality that it changed the
        world. We too can build our own personal Bollingen Towers:
        <span className={styles.word}> A deep life is a good life.</span>
      </Text>
    </Paper>
  );
}

export default AboutCard;
