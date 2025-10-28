import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";

export default function Hero(){
    return(
        <section id="hero">

        <div className="container-hero ">


            <div className="container-img-name">
            <div className="container-img-hero">
               <img src="/logo-portfolio.png" alt="Foto Personale"/>
            </div>

            <div className="container-profession-hero">
                <h2 className="name-user">Giuseppe Li Gioi</h2>
                <h4 className="name-profession"><strong>Jr. Full-Stack Web Developer</strong></h4>
            </div>

            </div>

            <div className="hero-divider"></div>

            <div className="container-hero-info">
                <p>Ciao! Sono Giuseppe Li Gioi, ho vent'anni e sono uno sviluppatore web Jr. full-stack. Sempre stimolato dal desiderio di concretizzare le mie <strong>IDE</strong>e attraverso il codice, creando siti web ed interfacce utente.<br />
                   Ogni giorno cerco di migliorarmi, imparando dai miei errori e sperimentando nuove tecnologie: questa è, secondo me, la chiave per crescere costantemente come sviluppatore.  
                </p>

                <a className="btn-hero" href="#projects">
                  Scopri i miei Progetti <FontAwesomeIcon  icon={faArrowDown}/> 
                </a>
            </div>
        </div>
        </section>
    )
}