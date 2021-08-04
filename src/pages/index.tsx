import Head from "next/head";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Colocando ExperienceBar dentro de um container para poder ajustar no CSS */}
      <head>
        <title>Inicio | Move.it </title>
      </head>
      <ExperienceBar /> {/* Componente importado  */}
      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
