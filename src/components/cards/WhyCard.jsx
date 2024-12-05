import { Paper, Text, Title } from "@mantine/core";
import styles from "./card.module.css";

function WhyCard() {
  return (
    <Paper shadow="xs" p="xl" className={`${styles.card} ${styles.why} `}>
      <Title order={2}>Why Deep Work is important?</Title>
      <Text>
        Deep work is necessary to wring every last drop of value out of your
        current intellectual capacity. We now know from decades of research in
        both psychology and neuroscience that the state of mental strain that
        accompanies deep work is also necessary to improve your abilities.
      </Text>
      <Text>
        We have an information economy that’s dependent on complex systems that
        change rapidly. To remain valuable in our economy, therefore, you must
        master the art of quickly learning complicated things. This task
        requires deep work.
      </Text>
      <Text>
        The ability to perform deep work is becoming increasingly rare at
        exactly the same time it is becoming increasingly valuable in our
        economy. As a consequence, the few who cultivate this skill, and then
        make it the core of their working life, will thrive.
      </Text>
    </Paper>
  );
}

export default WhyCard;
