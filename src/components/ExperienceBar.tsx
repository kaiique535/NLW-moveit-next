import { useContext } from "react";
import styles from "../styles/components/ExperienceBar.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      {" "}
      {/* escificação para o renderizar no CSS */}
      <span> 0 xp</span>
      {/* Valor minimo da experienceBar */}
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        {/* Barra verde que está definida em 50% de progresso */}

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {" "}
          {/* /* escificação para o renderizar no CSS e também definindo o valor progresso da barra verde (300xp) */}
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel}xp</span>
      {/* Valor da maximo da experienceBar */}
    </header>
  );
}
