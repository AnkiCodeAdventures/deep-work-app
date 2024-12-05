import { Paper, Text, Title } from "@mantine/core";
import styles from "./card.module.css";

function RitualsCard() {
  return (
    <Paper shadow="xs" p="xl" className={`${styles.card} ${styles.rituals} `}>
      <Title order={2}>Deep Work Rituals</Title>
      <Text>
        <Text>
          To get in the habit of doing deep work, one may start some small
          rituals before starting. The rituals minimize the friction in this
          transition to depth, allowing you to go deep more easily and stay in
          the state longer. There’s no one correct deep work ritual. For
          example, the ritual might include wearing a particular sweater that
          signals &quot;work mode,&quot; or that you start with a nice cup of
          herbal tea, or play a specific kind of instrumental music in your
          earphones . An academic might begin by laying out research materials
          in a precise sequence. This consistency creates a pavlovian response,
          where the brain learns to slip into concentration mode through
          repeated practice.
        </Text>
      </Text>
    </Paper>
  );
}

export default RitualsCard;
