import { Paper, Text, Title } from "@mantine/core";
import styles from "./attentionResidue.module.css";

function AttentionResidue() {
  return (
    <Paper p="xl" shadow="xs" className={styles.attentionResidue}>
      <Title order={2}>Why Is It So Hard to Do My Work?</Title>
      <Text>
        In a 2009 paper, titled, intriguingly, “Why Is It So Hard to Do My
        Work?,” Sophie Leroy introduced an effect she called{" "}
        <span className={styles.word}>attention residue.</span>
      </Text>
      <Text>
        Attention residue reflects the persistence of cognitive activity about a
        Task A even though one stopped working on Task A and currently performs
        a Task B. Linear processing such as evaluative, reflective, or problem
        solving thoughts about one task that occur while working on another task
        may also be considered attention residue. In addition, maintaining
        multiple goals on one’s mind at the same time creates cognitive load.
      </Text>
      <Text>
        The way around this problem is to have fewer cognitively demanding
        goals. And to be present with a task for an extented period to attain a
        level of satisfaction. When switching between tasks, there should be a
        clear transition between Task A to Task B, by taking a minute to note
        down what has been done and what&apos;s left to do next.
      </Text>
      <a
        target="_blank"
        href="https://www.uwb.edu/business/faculty/sophie-leroy/attention-residue"
        className={styles.customButton}
      >
        Know more
      </a>
    </Paper>
  );
}

export default AttentionResidue;
