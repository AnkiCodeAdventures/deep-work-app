import { Paper, Text, Title } from "@mantine/core";
import styles from "./rulesCard.module.css";

function RulesCard() {
  return (
    <Paper shadow="xs" p="xl" className={styles.rulesCard}>
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
      <Text>
        To get in the habit of doing deep work, one may start some small rituals
        before starting. The rituals minimize the friction in this transition to
        depth, allowing you to go deep more easily and stay in the state longer.
        There’s no one correct deep work ritual. For example, the ritual might
        include wearing a particular sweater that signals &quot;work mode,&quot;
        or that you start with a nice cup of herbal tea, or play a specific kind
        of instrumental music in your earphones . An academic might begin by
        laying out research materials in a precise sequence. This consistency
        creates a pavlovian response, where the brain learns to slip into
        concentration mode through repeated practice.
      </Text>
      <Text>
        Don’t Work Alone . When it comes to deep work, consider the use of
        collaboration when appropriate, as you can push each other toward deeper
        levels of depth, and therefore toward the generation of more and more
        valuable output as compared to working alone. At the same time, don’t
        lionize this quest for interaction and positive randomness to the point
        where it crowds out the unbroken concentration ultimately required to
        wring something useful.
      </Text>
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
      <Text>
        Focus on the Wildly Important. The more you try to do, the less you
        actually accomplish. Jony Ives who designed the iPhone remarked: One of
        the things Steve [Jobs] would say [to me] because he was worried I
        wasn’t focused — he would say, “How many things have you said no to?” I
        would tell him I said no to this. And I said no to that. But he knew I
        wasn’t interested in doing those things. There was no sacrifice in
        saying no [to those things]. What focus means is saying no to something
        that with every bone in your body you think is a phenomenal idea, you
        wake up thinking about it, but you say no to it because you are focusing
        on something else.
      </Text>
      <Text></Text>
      <Text>
        Clear shutdown ritual. At the end of the workday, completely disconnect
        from work - &quot;no after-dinner e-mail check, no mental replays of
        conversations. Shut down work thinking completely. Your mind must be
        left free to encounter{" "}
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
      <Text>
        Don’t Take Breaks from Distraction. Instead Take Breaks from Focus. Many
        assume that they can switch between a state of distraction and one of
        concentration as needed but this assumption is optimistic: Once you’re
        wired for distraction, you crave it.Instead of scheduling the occasional
        break from distraction so you can focus, you should instead schedule the
        occasional break from focus to give in to distraction. Schedule in
        advance when you’ll use the Internet, and then avoid it altogether
        outside these times.For example, if you’ve scheduled your next Internet
        block thirty minutes from the current moment, and you’re beginning to
        feel bored and crave distraction, the next thirty minutes of resistance
        become a session of concentration calisthenics.
      </Text>
    </Paper>
  );
}

export default RulesCard;
