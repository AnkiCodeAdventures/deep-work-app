import { Paper, Text, Title } from "@mantine/core";
import styles from "./shutdownRitual.module.css";

function ShutdownRitual() {
  return (
    <Paper shadow="xs" p="xl">
      <Title order={2}>Shutdown Ritual</Title>
      <Text>
        At the end of the workday, completely disconnect from work - &quot;no
        after-dinner e-mail check, no mental replays of conversations. Shut down
        work thinking completely. Your mind must be left free to encounter{" "}
        <span className={styles.highlight}>
          buttercups, stink bugs, and stars.
        </span>{" "}
        Walking in nature, having a casual conversation with a friend, listening
        to music while making dinner, playing a game with your kids, going for a
        run can restore mental energy. Make a ritual that should ensure that
        every incomplete task has been reviewed and is captured in a place where
        it will be revisited when the time is right. When you’re done, have a
        set phrase you say that indicates completion like saying &quot;Shutdown
        Completed&quot;. It should take a week or two before the shutdown habit
        sticks—that is, until your mind trusts your ritual enough to actually
        begin to release work-related thoughts in the evening.
      </Text>
    </Paper>
  );
}

export default ShutdownRitual;
