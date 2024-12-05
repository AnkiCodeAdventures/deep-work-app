import { Paper, Text, Title } from "@mantine/core";
import styles from "./card.module.css";

function PsychologyCard() {
  return (
    <Paper shadow="xs" p="xl" className={`${styles.card} ${styles.psychology}`}>
      <Title order={2}>Why Deep Work works?</Title>
      <Text>
        This understanding is important because it provides a neurological
        foundation for why deliberate practice works. By focusing intensely on a
        specific skill, you’re forcing the specific relevant circuit to fire,
        again and again, in isolation. This repetitive use of a specific circuit
        triggers cells called oligodendrocytes to begin wrapping layers of
        myelin around the neurons in the circuits—effectively cementing the
        skill.
      </Text>
      <Text>
        The reason, therefore, why it’s important to focus intensely on the task
        at hand while avoiding distraction is because this is the only way to
        isolate the relevant neural circuit enough to trigger useful
        myelination. By contrast, if you’re trying to learn a complex new skill
        (say, SQL database management) in a state of low concentration (perhaps
        you also have your Facebook feed open), you’re firing too many circuits
        simultaneously and haphazardly to isolate the group of neurons you
        actually want to strengthen.
      </Text>
    </Paper>
  );
}

export default PsychologyCard;
