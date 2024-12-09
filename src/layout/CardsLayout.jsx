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
      <AboutCard />
      <WhyCard />
      <PsychologyCard />
      <AttentionResidue />
      <RulesCard />
      <RitualsCard />
      <FocusCard />
      <PriorityCard />
      <AccountabilityCard />
      <OptimalWindow />
      <ShutdownRitual />
    </div>
  );
}

export default CardsLayout;
