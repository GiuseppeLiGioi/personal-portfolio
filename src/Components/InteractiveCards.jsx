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
    const [fallbackActive, setFallbackActive] = useState(false)

    const [nasaError, setNasaError] = useState("")
    const [nasaVisible, setNasaVisible] = useState(false)
    const [nasaData, setNasaData] = useState({
        title: "",
        description: "",
        url: ""
    })


    const [phrase, setPhrase] = useState("")
    const [progress, setProgress] = useState(0)


    const myArray = [
        "Full-Stack per me vuol dire: non smettere mai di imparare sia lato front sia lato back! 👨🏼‍💻",
        "Mi adatto facilmente al contesto lavorativo, adoro affrontare nuove sfide e relazionarmi con nuove persone! 👨🏼‍💻",
        "Ho vent'anni: questo non mi spaventa e non mi demoralizza, anzi, accresce ancora di più la mia curiosità e la mia voglia di imparare! 👨🏼‍💻",
        "Sarà la continua evoluzione ed innovazione di questo settore, ma sono sempre super stimolato ed affascinato da ogni tecnologia nuova che implemento! 👨🏼‍💻",
        "Non vedo l'ora di sentirmi piccolo al fianco di persone professioniste, da cui avrò l'onore di poter apprendere cose nuove ed accrescere le mie competenze! 👨🏼‍💻"
    ]

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const nasaKey = import.meta.env.VITE_NASA_API_KEY;


    async function getWeatherByCity(city) {
        try {

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`)
            const data = await res.json()

            if (data && data.main && data.weather) {
                setLocality({
                    city: data.name,
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    weatherMain: data.weather[0].main
                });
            }

            setVisible(true);
            setError("");
        } catch (error) {
            console.error(error)
            setError("Impossibile mostrare il meteo per la destinazione scelta")
            setVisible(false)
        }
    }

    async function getWeather() {
        try {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const fetchWeather = async () => {
                            const lat = position.coords.latitude;
                            const long = position.coords.longitude;

                            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=it`)
                            const data = await res.json()

                            console.log(data)

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
                        setError("Impossibile ottenere la tua posizione automaticamente")
                        setFallbackActive(true)
                    }
                )
            } else {
                setFallbackActive(true)
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
        if (!visible) return { background: "rgba(71, 99, 223, 0.15)", color: "#333" };

        switch (locality.weatherMain) {
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


    //FUNZIONI PER NASA CARD

    async function getNasaData() {
        try {
            const res = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${nasaKey}`)

            if (!res.ok) {
                throw new Error(`Errore API NASA: ${res.status}`);
            }
            const data = await res.json()


            const first = data[0]
            const dateOnly = first.date.split(" ")[0];
            const [year, month, day] = dateOnly.split("-");
            const url = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${first.image}.png`;

            setNasaData({
                title: first.caption,
                url: url,
                date: dateOnly
            })

        } catch (error) {
            console.error(error)
            setNasaError("Servizio NASA non disponibile al momento, riprova più tardi.")
            setNasaVisible(false)
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
                                <img src={iconUrl} alt="foto meteo" className="img-weather" />
                            </figure>

                        </div>
                    )}

                    {/* INPUT MANUALE (FALLBACK) PER SELEZIONARE CITTà */}
                    {fallbackActive && (
                        <div className="container-weather-fallback">
                            <input
                                type="text"
                                className="input-weather"
                                placeholder="Inserisci città"
                                value={inputLocality}
                                onChange={(e) => setInputLocality(e.target.value)}
                            />
                            <button
                                className="btn-interactive"
                                onClick={() => getWeatherByCity(inputLocality)}
                            >
                                Mostra Meteo
                            </button>
                        </div>
                    )}

                    {!fallbackActive && (

                        <button className="btn-interactive" onClick={() => getWeather()}>Mostra Meteo</button>
                    )}



                </div>
            </div>

            <div className="container-card-interactive">
                <h3 className="title-card-interactive">
                    🚀 NASA EPIC - Immagine del giorno
                </h3>

                {nasaError && <p className="weather-error">{nasaError}</p>}

                {nasaVisible && (
                    <div className="container-weather-info">
                        <h4 className="info-weather-title">{nasaData.title}</h4>
                        <p className="info-weather-p">{nasaData.date}</p>

                        <figure className="figure-nasa">
                            <img src={nasaData.url} alt={nasaData.title} className="img-nasa" />
                        </figure>
                    </div>
                )}

                <button className="btn-interactive" onClick={() => getNasaData()}>
                    Mostra Immagine NASA
                </button>
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