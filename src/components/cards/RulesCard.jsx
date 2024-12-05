import { Paper, Text, Title } from "@mantine/core";
import styles from "./card.module.css";

function RulesCard() {
  return (
    <Paper shadow="xs" p="xl" className={`${styles.card} ${styles.rules} `}>
      <Title order={2}>How to do deep work?</Title>
      <Title order={3}></Title>
      <Text>
        For your work to be considered deep work, it must be focused work of not
        less than one hour. A typical session would be of 1.5 hrs, with ideally
        no breaks or distraction. Flow state is achieved around 20-25 mins into
        the session. It is a byproduct of deep work session and not the primary
        objective.
      </Text>
      <Text>
        Before beginning, the goal must be precisely defined - typically a
        single measureable task that contributes to a larger project. During the
        deep work session there should be no distraction of any sort. No
        glancing at the smartphone or checking email.
      </Text>
    </Paper>
  );
}

export default RulesCard;
