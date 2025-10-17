import { useState } from "react"

export default function InteractiveCards() {
    const [casualNum, setCasualNum] = useState(0)
    const [numUser, setNumUser] = useState(0)
    const [feedback, setFeedback] = useState("")

    function handleGenerate() {
        const num = Math.floor(Math.random() * 101)
        setCasualNum(num)
    }

    function handleVerify(num) {
        const numGame = Math.floor(Math.random() * 51)
        
        if(num < numGame){
        setFeedback("⬆️ Troppo basso!")
        } 
        else if(num > numGame){
        setFeedback("⬇️ Troppo alto!")    
        }
        else{
        setFeedback(`🎉 Complimenti, numero indovinato! Il numero era: ${numGame}`)   
        }
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
                        value={numUser}
                        onChange={(e) => setNumUser(e.target.value)}
                    />
                    <button className="btn-interactive" onClick={() => handleVerify(numUser)}>Verifica</button>
                    <p>{feedback}</p>
                </div>
            </div>


            <div className="container-card-interactive">
                <div className="container-logic-1">

                </div>

                <div className="container-logic-2">

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