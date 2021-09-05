import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import style from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); // padStart está garantinho que mesmo que tenhamos abaixo de 10 teremos '2'Numeros (Exemplo '09' - E com o split vazio temos a separação dos numeros. Gerando os Minutos Left e Right)  */
  const [SecondLeft, SecondRight] = String(seconds).padStart(2, "0").split(""); // Mesma aplicação da linha acima mas agora em segundos */

  return (
    <div>
      <div className={style.countdownContainer}>
        <div>
          {/*  Agora dentro das Spans colocamos as variaveis left e Right de cada um dos parametros */}
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{SecondLeft}</span>
          <span>{SecondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={style.countdownButton}>
          Ciclo Finalizado...
        </button>
      ) : (
        <>
          {
            // <></>=div que não é exibida dentro do HTML
            isActive ? (
              <button
                type="button"
                className={`${style.countdownButton} ${style.countdownButtonIsActive}`}
                onClick={resetCountdown}
              >
                Abandonar Ciclo
              </button>
            ) : (
              <button
                type="button"
                className={style.countdownButton}
                onClick={startCountdown}
              >
                iniciar um Ciclo
              </button>
            )
          }
        </>
      )}
    </div>
  );
}
