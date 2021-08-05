import { useEffect, useState } from "react";
import style from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    /* Declaração de uma estado de React(useState)- Com isso automaticamente sera importado uma biblioteca do react no inicio do codigo */
    const [time, setTime] = useState(0.1 * 60); /* Como a contagem sera um declinio de segundos, iniciaremos a contagem em segundos - nome= time e setTime vai modificar a contagem */
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutes = Math.floor(time / 60);/* Aqui voce tem o time calculado na linh acima para formar os minutos, Quando tiver um valor quebrado ultilizamos Math.floor para arredondar o valor para baixo.  */
    const seconds = time % 60;/* O numero de segundos é o 'resto' da divisão dos minutos, */


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); /* padStart está garantinho que mesmo que tenhamos abaixo de 10 teremos '2'Numeros (Exemplo '09' - E com o split vazio temos a separação dos numeros. Gerando os Minutos Left e Right)  */
    const [SecondLeft, SecondRight] = String(seconds).padStart(2, "0").split("");/* Mesma aplicação da linha acima mas agora em segundos */

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);


    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    {/* Agora dentro das Spans colocamos as variaveis left e Right de cada um dos parametros */}
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
                <button
                    disabled
                    className={style.countdownButton}
                >
                    Ciclo Finalizado...
                </button>
            ) :

                (<>{ /* <></>=div que não é exibida dentro do HTML */
                    isActive ? (<button
                        type="button"
                        className={`${style.countdownButton} ${style.countdownButtonIsActive}`}
                        onClick={resetCountdown}>
                        Abandonar Ciclo
                    </button>) : (<button
                        type="button"
                        className={style.countdownButton}
                        onClick={startCountdown}>
                        iniciar um Ciclo
                    </button>)
                }</>)
            }

        </div >
    );
}
