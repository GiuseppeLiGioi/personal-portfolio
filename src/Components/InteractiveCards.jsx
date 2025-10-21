import { useState } from "react"

export default function InteractiveCards() {
    const [casualNum, setCasualNum] = useState(0)
    const [numUser, setNumUser] = useState(0)
    const [feedback, setFeedback] = useState("")
    const [numGame, setNumGame] = useState(Math.floor(Math.random() * 51))

    const [bgColor, setBgColor] = useState("")
    const [darkMode, setDarkMode] = useState(false)
    const [index, setIndex] = useState(0)
    const [phrase, setPhrase] = useState("")
    const [progress, setProgress] = useState(0)
    const [isDisabled, SetIsDisabled] = useState(false)


    const myArray = [
        "Full-Stack per me vuol dire: non smettere mai di imparare sia lato front sia lato back! 👨🏼‍💻",
        "Mi adatto facilmente al contesto lavorativo, adoro affrontare nuove sfide e relazionarmi con nuove persone! 👨🏼‍💻",
        "Ho vent'anni: questo non mi spaventa e non mi demoralizza, anzi, accresce ancora di più la mia curiosità e la mia voglia di imparare! 👨🏼‍💻",
        "Sarà la continua evoluzione ed innovazione di questo settore, ma sono sempre super stimolato ed affascinato da ogni tecnologia nuova che implemento! 👨🏼‍💻",
        "Non vedo l'ora di sentirmi piccolo al fianco di persone professioniste, da cui avrò l'onore di poter apprendere cose nuove ed accrescere le mie competenze! 👨🏼‍💻"
    ]

    function handleGenerate() {
        const num = Math.floor(Math.random() * 101)
        setCasualNum(num)
    }

    function handleVerify(num) {

        if (num === numGame) {
            setFeedback(`🎉 Complimenti, numero indovinato! Il numero era: ${numGame}`)
        }
        else if (num > numGame) {
            setFeedback("⬇️ Troppo alto!")
        }
        else {
            setFeedback("⬆️ Troppo basso!")
        }
    }



    function handleReset() {
        setNumUser("")
        setFeedback("")
        setNumGame(Math.floor(Math.random() * 51))
    }



    function handleColor() {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setBgColor(color)
    }

    function handleTheme() {
        if (!darkMode) {
            setBgColor("#1a1919");
        } else {
            setBgColor("#fff"); 
        }
        setDarkMode(!darkMode);
    }

    function handlePhrase() {
        if (index < myArray.length) {
            setPhrase(myArray[index])
            setProgress(progress + 20)
            setIndex(index + 1)
        } else {
            SetIsDisabled(true)
        }
    }


    function handleProgress() {
        if (progress < 100) {
            setProgress(progress + 20)
            handlePhrase()
        } else {
            setProgress(0)
            setIndex(0)
            setPhrase(null)
        }
    }






    return (
        <div className="container-interactive fade-in-up">
            <h2 className="title-interactive">TITOLO INTERACTIVE</h2>
            <p className="p-interactive">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iusto blanditiis, eligendi at pariatur minima error saepe voluptas possimus quaerat minus ad, assumenda velit eum ipsum deserunt explicabo, architecto iste libero.
            </p>


            <div className="container-card-interactive">
                <div className="container-logic-1">
                    <h3 className="title-card-interactive">🎲 Generatore Numero Casuale 0-100: 🎲</h3>
                    <button className="btn-interactive" onClick={() => handleGenerate()}>Genera!</button>
                    <p>{casualNum ? `Numero: ${casualNum}` : ""}</p>
                </div>

                <div className="container-logic-2">

                    <h3 className="title-card-interactive">🎲 Indovina il numero casuale 0-50! 🎲</h3>
                    <input
                        type="number"
                        placeholder="Digita il numero e scopri se è corretto"
                        className="input-interactive"
                        value={numUser}
                        onChange={(e) => setNumUser(e.target.value)}
                    />
                    <div className="container-button-interactive-css">
                        <button className="btn-interactive" onClick={() => handleVerify(Number(numUser))}>Verifica</button>
                        <button className="btn-interactive" onClick={() => handleReset()}>Reset Gioco</button>
                    </div>
                    <p>{feedback}</p>
                </div>
            </div>


            <div className={darkMode ? "container-card-interactive-dark" : "container-card-interactive"} style={{ backgroundColor: bgColor }}>
                <div className="container-logic-1">
                    <h3 className="title-card-interactive">🎨 Cambia il colore di sfondo o il tema della card! 🎨</h3>

                </div>
                <div className="container-button-interactive-css">
                    <button className="btn-interactive" onClick={() => handleColor()}>Cambia colore!</button>
                    <button className="btn-interactive" onClick={() => handleTheme()}>{darkMode ? "Tema chiaro" : "Tema scuro"}</button>
                </div>
            </div>


            <div className="container-card-interactive">
                <div className="container-logic-interactive-top">
                    <h3 className="title-card-interactive">👨🏼‍💻 Scopri qualcosa in più su di me 🚀</h3>
                </div>
                <div className="container-phrase">

                    <p className="phrase-p">{phrase}</p>
                </div>

                <div className="container-logic-interactive-bottom">

                    <p className="progress-p">{progress}%</p>
                    <div className="container-progressbar">
                        <div className="progressbar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <button className="btn-interactive" onClick={() => handleProgress()}>Scopri di più</button>
            </div>





        </div>
    )
}