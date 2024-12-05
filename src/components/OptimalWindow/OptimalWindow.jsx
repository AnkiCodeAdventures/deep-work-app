import { Paper, Text, Title } from "@mantine/core";
import styles from "./optimalWindow.module.css";

function OptimalWindow() {
  return (
    <Paper shadow="xs" p="xl" className={styles.about}>
      <Title order={2}>Optimal Deep Work Window</Title>
      <Text>
        One should aim a maximum of 3-4 hours of deep work every weekday. In a
        study cataloging the practice habits of a group of elite violin players
        found that they average around three and a half hours per day in a state
        of deliberate practice, usually separated into two distinct periods. The
        implication of these results is that your capacity for deep work in a
        given day is limited. If you’re careful about your schedule, you should
        hit your daily deep work capacity during your workday. By evening,
        you’re beyond the point where you can continue to effectively work
        deeply. Any work you do fit into the night, therefore, won’t be the type
        of high-value activities that really advance your career; your efforts
        will instead likely be confined to low-value shallow tasks (executed at
        a slow, low-energy pace).
      </Text>
    </Paper>
  );
}

export default OptimalWindow;
