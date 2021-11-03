import {useState} from "react";
import RPS from "../components/RPS";
import './rockpaperscissor-game.css'

const RockPaperScissorsGame = () => {
    const [title, setTitle] = useState('Lancez le dé pour jouer !')
    const [p1, setP1] = useState('rock')
    const [p2, setP2] = useState('paper')

    const game = () => {
        const r1 = Math.floor(Math.random() * 3) + 1
        const r2 = Math.floor(Math.random() * 3) + 1

        r1 === 1 ? setP1("rock") : r1 === 2 ? setP1('paper') : setP1('scissors')
        r2 === 1 ? setP2("rock") : r2 === 2 ? setP2('paper') : setP2('scissors')

        if (r1 === 1 && r2 === 2) {
            setTitle('Le joueur 2 a gagné !')
        } else if (r1 === 1 && r2 === 3) {
            setTitle('Le joueur 1 a gagné !')
        } else if (r1 === 3 && r2 === 2) {
            setTitle('Le joueur 1 a gagné !')
        } else if (r1 === 1 && r2 === 1) {
            setTitle('Egalité !')
        } else if (r2 === 1 && r1 === 2) {
            setTitle('Le joueur 1 a gagné !')
        } else if (r2 === 1 && r1 === 3) {
            setTitle('Le joueur 2 a gagné !')
        }  else if (r2 === 3 && r1 === 2) {
            setTitle('Le joueur 1 a gagné !')
        } else if (r2 === 2 && r1 === 2) {
            setTitle('Egalité !')
        } else if (r2 === 3 && r1 === 3) {
            setTitle('Egalité !')
        }
    }
    return (
        <section className={"rps-game"}>
            <h2>Rock Paper Scissors Game</h2>
            <h3>{title}</h3>
            <div className={"rps__container"}>
                <RPS player={"1"} image={p1} />
                <RPS player={"2"} image={p2} />
            </div>
            <button onClick={game}>Lancer les dés</button>
        </section>
    )
}

export default RockPaperScissorsGame