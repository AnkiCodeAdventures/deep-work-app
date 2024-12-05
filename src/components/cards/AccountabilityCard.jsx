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
        When it comes to deep work, consider the use of collaboration when
        appropriate, as you can push each other toward deeper levels of depth,
        and therefore toward the generation of more and more valuable output as
        compared to working alone. At the same time, don’t lionize this quest
        for interaction and positive randomness to the point where it crowds out
        the unbroken concentration ultimately required to wring something
        useful.
      </Text>
    </Paper>
  );
}

export default AccountabilityCard;
