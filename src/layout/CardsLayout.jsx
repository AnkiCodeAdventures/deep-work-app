import { Grid } from "@mantine/core";
import AboutCard from "../components/cards/AboutCard";
import AccountabilityCard from "../components/cards/AccountabilityCard";
import AttentionResidue from "../components/cards/AttentionResidue";
import FocusCard from "../components/cards/FocusCard";
import OptimalWindow from "../components/cards/OptimalWindow";
import PriorityCard from "../components/cards/PriorityCard";
import PsychologyCard from "../components/cards/PsychologyCard";
import RitualsCard from "../components/cards/RitualsCard";
import RulesCard from "../components/cards/RulesCard";
import ShutdownRitual from "../components/cards/ShutdownRitual";
import WhyCard from "../components/cards/WhyCard";
import styles from "./cardsLayout.module.css";

function CardsLayout() {
  return (
    <div className={styles.cardsContainer}>
      <Grid columns={20} gutter="20px">
        <Grid.Col span={{ sm: "8", base: "20" }}>
          <AboutCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "12", base: "20" }}>
          <WhyCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "11", base: "20" }}>
          <PsychologyCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "9", base: "20" }}>
          <AttentionResidue />
        </Grid.Col>
        <Grid.Col span={{ sm: "9", base: "20" }}>
          <RulesCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "11", base: "20" }}>
          <RitualsCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "7", base: "20" }}>
          <FocusCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "13", base: "20" }}>
          <PriorityCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "11", base: "20" }}>
          <AccountabilityCard />
        </Grid.Col>
        <Grid.Col span={{ sm: "9", base: "20" }}>
          <OptimalWindow />
        </Grid.Col>
        <Grid.Col span={{ sm: "20", base: "20" }}>
          <ShutdownRitual />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default CardsLayout;
