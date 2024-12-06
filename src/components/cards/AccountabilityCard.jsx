import { Paper, Text, Title } from "@mantine/core";
import styles from "./card.module.css";

function AccountabilityCard() {
  return (
    <Paper
      shadow="xs"
      p="xl"
      className={`${styles.card} ${styles.accountability} `}
    >
      <Title order={2}>Don’t Work Alone </Title>
      <Text>
        When it comes to deep work, consider the{" "}
        <span className={styles.highlight}>
          use of collaboration when appropriate
        </span>
        , as you can push each other toward{" "}
        <span className={styles.highlight}>deeper levels of depth</span>, and
        therefore toward the generation of more and more valuable output as
        compared to working alone. At the same time, don’t lionize this quest
        for interaction and positive randomness to the point where it crowds out
        the unbroken concentration ultimately required to wring something
        useful.
      </Text>
    </Paper>
  );
}

export default AccountabilityCard;
