import "./dices-game.css"
import Dice from "../components/Dice";
import {useState} from "react";

const DicesGame = () => {
    const [title, setTitle] = useState('Lancez le dé pour jouer !')
    const [p1, setP1] = useState(1)
    const [p2, setP2] = useState(2)

    const game = () => {
        const r1 = Math.floor(Math.random() * 6) + 1
        const r2 = Math.floor(Math.random() * 6) + 1

        r1 > r2 ? setTitle('Le joueur 1 a gagné !') : r1 < r2 ? setTitle('Le joueur 2 a gagné !') : setTitle('Egalité !')

        setP1(r1)
        setP2(r2)
    }
    return (
        <section className={"dice-game"}>
            <h2>Dices Game</h2>
            <h3>{title}</h3>
            <div className={"dices__container"}>
                <Dice player={"1"} image={p1} />
                <Dice player={"2"} image={p2} />
            </div>
            <button onClick={game}>Lancer les dés</button>
        </section>
    )
}

export default DicesGame