import { useState } from "react"

export default function InteractiveCards() {
    const [casualNum, setCasualNum] = useState(0)
    const [numUser, setNumUser] = useState(0)
    const [feedback, setFeedback] = useState("")
    const[numGame, setNumGame] = useState(Math.floor(Math.random() * 51))

    const [bgColor, setBgColor] = useState("")
    const [darkMode, setDarkMode] = useState(false)

    function handleGenerate() {
        const num = Math.floor(Math.random() * 101)
        setCasualNum(num)
    }

    function handleVerify(num) {
        
        if(num === numGame){
            setFeedback(`🎉 Complimenti, numero indovinato! Il numero era: ${numGame}`)  
        } 
        else if(num > numGame){
            setFeedback("⬇️ Troppo alto!")    
        }
        else{
        setFeedback("⬆️ Troppo basso!")
        }
    }

    

    function handleReset(){
        setNumUser("")
        setFeedback("")
        setNumGame(Math.floor(Math.random() * 51))
    }



     function handleColor() {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setBgColor(color)
    }

    function handleTheme(){
        setDarkMode(!darkMode)
    }


    


    return (
        <div className="container-interactive">


            <div className="container-card-interactive">
                <div className="container-logic-1">
                    <h3>Generatore Numero Casuale 0-100:</h3>
                    <button className="btn-interactive" onClick={() => handleGenerate()}>Genera!</button>
                    <p>{casualNum ? `Numero: ${casualNum}` : ""}</p>
                </div>

                <div className="container-logic-2">

                    <h3>Indovina il numero casuale 0-50!</h3>
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


            <div className={darkMode ? "container-card-interactive-dark" : "container-card-interactive"} style={{backgroundColor: bgColor}}>
                <div className="container-logic-css">
                    <h3>Cambia il colore di sfondo o il tema della card!</h3>

                    <div className="container-button-interactive-css">
                         <button className="btn-interactive" onClick={() => handleColor()}>Cambia colore!</button>
                         <button className="btn-interactive" onClick={() => handleTheme()}>{darkMode ? "Tema chiaro" : "Tema scuro"}</button>
                    </div>
                </div>
            </div>


            <div className="container-card-interactive">
                <div className="container-logic-1">

                </div>

                <div className="container-logic-2">

                </div>
            </div>


        </div>
    )
}