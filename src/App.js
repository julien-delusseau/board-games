import {Fragment, useState} from "react";
import './App.css';
import DicesGame from "./games/DicesGame";
import RockPaperScissorsGame from "./games/RockPaperScissorsGame";

const App = () => {
    const [game, setGame] = useState()
    return (
        <Fragment>
            <h1>Board Games</h1>
            <main>
                {
                    game === 'dice' ? <DicesGame/> : game === 'rps' ? <RockPaperScissorsGame/> : (
                        <section className={"choose"}>
                            <h2>Choisissez votre jeu:</h2>
                            <button onClick={() => setGame('dice')}>Jeu du dé</button>
                            <button onClick={() => setGame('rps')}>Pierre Feuille Ciseaux</button>
                        </section>
                    )
                }
            </main>
            <footer>
                <p onClick={() => setGame(null)}>Retour</p>
            </footer>
        </Fragment>
    )
}

export default App;
