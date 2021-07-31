import Head from "next/head";

import { ExperienceBar } from "../components/ExperienceBar";

export default function Home() {
  return (
    <div className="container">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Colocando ExperienceBar dentro de um container para poder ajustar no CSS */}
      <ExperienceBar /> {/* Componente importado  */}
    </div>
  );
}
