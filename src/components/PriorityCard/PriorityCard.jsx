import { Paper, Text, Title } from "@mantine/core";
import styles from "./priorityCard.module.css";

function PriorityCard() {
  return (
    <Paper shadow="xs" p="xl" className={styles.about}>
      <Title order={2}>Focus on the Wildly Important.</Title>
      <Text>
        The more you try to do, the less you actually accomplish. Jony Ives who
        designed the iPhone remarked: One of the things Steve [Jobs] would say
        [to me] because he was worried I wasn’t focused — he would say, “How
        many things have you said no to?” I would tell him I said no to this.
        And I said no to that. But he knew I wasn’t interested in doing those
        things. There was no sacrifice in saying no [to those things]. What
        focus means is saying no to something that with every bone in your body
        you think is a phenomenal idea, you wake up thinking about it, but you
        say no to it because you are focusing on something else.
      </Text>
    </Paper>
  );
}

export default PriorityCard;
