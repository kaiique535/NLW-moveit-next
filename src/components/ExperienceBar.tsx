import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      {" "}
      {/* escificação para o renderizar no CSS */}
      <span>0 xp</span>
      {/* Valor minimo da experienceBar */}
      <div>
        <div style={{ width: "50%" }} />
        {/* Barra verde que está definida em 50% de progresso */}

        <span className={styles.currentExperience} style={{ left: "50%" }}>
          {" "}
          {/* /* escificação para o renderizar no CSS e também definindo o valor progresso da barra verde (300xp) */}
          300 xp
        </span>
      </div>
      <span>600</span>
      {/* Valor da maximo da experienceBar */}
    </header>
  );
}
