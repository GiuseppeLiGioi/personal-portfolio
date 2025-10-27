import { useState } from "react"

export default function InteractiveCards() {
    const [locality, setLocality] = useState({
        city: "",
        temperature: 0,
        description: "",
        icon: "",
        weatherMain: ""
    })

    const [error, setError] = useState("")
    const [visible, setVisible] = useState(false)
    const [inputLocality, setInputLocality] = useState("")
    const [disabled, SetIsDisabled] = useState(false)


    const [phrase, setPhrase] = useState("")
    const [progress, setProgress] = useState(0)


    const myArray = [
        "Full-Stack per me vuol dire: non smettere mai di imparare sia lato front sia lato back! 👨🏼‍💻",
        "Mi adatto facilmente al contesto lavorativo, adoro affrontare nuove sfide e relazionarmi con nuove persone! 👨🏼‍💻",
        "Ho vent'anni: questo non mi spaventa e non mi demoralizza, anzi, accresce ancora di più la mia curiosità e la mia voglia di imparare! 👨🏼‍💻",
        "Sarà la continua evoluzione ed innovazione di questo settore, ma sono sempre super stimolato ed affascinato da ogni tecnologia nuova che implemento! 👨🏼‍💻",
        "Non vedo l'ora di sentirmi piccolo al fianco di persone professioniste, da cui avrò l'onore di poter apprendere cose nuove ed accrescere le mie competenze! 👨🏼‍💻"
    ]

    async function getWeather() {
        try {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const fetchWeather = async () => {
                            const lat = position.coords.latitude;
                            const long = position.coords.longitude;

                            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bdafb49216ef97c038c7aa933b9879a6&units=metric&lang=it`)
                            const data = await res.json()

                            setLocality({
                                city: data.name,
                                temperature: data.main.temp,
                                description: data.weather[0].description,
                                icon: data.weather[0].icon,
                                weatherMain: data.weather[0].main
                            })
                            setVisible(true)
                        }
                        fetchWeather()
                    },
                    (error) => {
                        setError("Impossibile ottenere la tua posizione")
                    }
                )
            } else {
                //input manuale
            }

        } catch (error) {
            console.error(error)
            setError("Non è stato possibile mostrare le informazioni meteo")
            setVisible(false)
        }
    }

    const temp = visible ? Math.round(locality.temperature) : null;
    const iconUrl = visible ? `https://openweathermap.org/img/wn/${locality.icon}@2x.png` : "";


const getWeatherStyle = () => {
    if(!visible) return { background: "rgba(71, 99, 223, 0.15)", color: "#333" };

    switch(locality.weatherMain) {
        case "Clear":
            return { background: "linear-gradient(to bottom, #a0e9ff, #56ccf2)", color: "#333" };
        case "Clouds":
            return { background: "linear-gradient(to bottom, #d0d4e5, #a0b3d8)", color: "#333" };
        case "Rain":
        case "Drizzle":
            return { background: "linear-gradient(to bottom, #4a90e2, #2f5aa6)", color: "#fff" };
        case "Snow":
            return { background: "linear-gradient(to bottom, #f0f9ff, #cce6ff)", color: "#333" };
        default:
            return { background: "rgba(71, 99, 223, 0.15)", color: "#333" };
    }
};



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
            <h2 className="title-interactive">INTERAGISCI E SCOPRI</h2>
            <p className="p-interactive">
                Per riportare qualcosa di concreto all'interno del mio portfolio, in questa sezione ho implementato delle piccole logiche interattive con Javascript che, ti consentiranno allo stesso tempo, di scoprire qualcosa in più su di me.
            </p>


            <div className="container-card-interactive">
                <div className="container-weather-card" style={getWeatherStyle()}>
                    <h3 className="title-card-interactive">🌤 Meteo Attuale</h3>

                    {error && <p className="weather-error">{error}</p>}

                    {visible && (
                        <div className="container-weather-info">
                            <h4 className="info-weather-title">{locality.city}</h4>
                            <h5 className="info-weather-semi-title">{temp}°C</h5>
                            <p className="info-weather-p">{locality.description}</p>

                            <figure className="figure-weather">
                            <img src={iconUrl} alt="foto meteo" className="img-weather"/>
                            </figure>

                        </div>
                    )}
                    
                    <button className="btn-interactive" onClick={() => getWeather()}>Mostra Meteo</button>
                </div>
            </div>

              {/*
            <div className={darkMode ? "container-card-interactive-dark" : "container-card-interactive"} style={{ backgroundColor: bgColor }}>
                <div className="container-logic-1">
                    <h3 className={darkMode ? "title-card-interactive-dark" : "title-card-interactive"}>🎨 Cambia il colore di sfondo o il tema della card! 🎨</h3>

                </div>
                <div className="container-button-interactive-css">
                    <button className="btn-interactive" onClick={() => handleColor()}>Cambia colore!</button>
                    <button className="btn-interactive" onClick={() => handleTheme()}>{darkMode ? "Tema chiaro" : "Tema scuro"}</button>
                </div>
            </div>
              
              */}


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