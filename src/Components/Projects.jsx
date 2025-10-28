import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
    return (

         <section id="projects">

        <div className="container-projects-page">
            <h2 className="title-about">I MIEI PROGETTI</h2>

            <div className="container-projects">

                <div className="container-single-project">
                    <div className="project-top">
                        <img className="img-certificate" src="/pulsefit-foto.jpg" alt="foto pulsefit" />
                    </div>

                    <div className="project-bottom">
                        <h4><strong>PULSEFIT</strong></h4>
                        <p>
                            Una web app full-stack pensata per il fitness. Permette di creare ed interagire con schede, esercizi e progressi in modo semplice e intuitivo.<br />
                            Include autenticazione sicura, CRUD completo per schede ed esercizi, supporto immagini, tracciamento dei progressi e simulazione di pagamenti con Stripe.
                        </p>
                        <a href="https://github.com/GiuseppeLiGioi/gym-card" target="_blank" rel="noopener noreferrer" className="a-projects">
                            <span><FontAwesomeIcon icon={faGithub} /></span> Apri su GitHub
                        </a>
                    </div>
                </div>


                <div className="container-single-project">
                    <div className="project-top">
                        <img src="/finance-foto.jpg" alt="foto finance" />
                    </div>

                    <div className="project-bottom">
                        <h4><strong>FINANCE-DASHBOARD</strong></h4>
                        <p>
                            Una web app, lato Frontend, responsive per monitorare il proprio saldo in maniera professionale. Include tracciamento grafico di entrate e uscite con la possbilità di filtrarle per nome, tipo e intervallo di date. <br/>
                            Inoltre potrai personalizzare le impostazioni, tema chiaro/scuro, multilingua e supporto per l’esportazione e l’importazione dei dati in formato CSV.
                        </p>
                        <a href="https://github.com/GiuseppeLiGioi/personal-finance-dashboard" target="_blank" rel="noopener noreferrer" className="a-projects">
                           <span><FontAwesomeIcon icon={faGithub} /></span> Apri su GitHub
                        </a>
                    </div>
                </div>



                
                <div className="container-single-project">
                    <div className="project-top">
                        <img src="/kick-foto.jpg" alt="foto kick" />
                    </div>

                    <div className="project-bottom">
                        <h4><strong>KICK-SHOP</strong></h4>
                        <p>
                           Un progetto full-stack realizzato in team durante la mia permanenza in "Boolean". <br />
                           Presenta un e-commerce di articoli sportivi: include HomePage dinamica con prodotti in evidenza, ricerca avanzata con filtri e ordinamenti, pagine prodotto complete con doppia visualizzazione, wishlist e carrello personali, checkout con validazione in tempo reale ed email di conferma con layout HTML.
                        </p>
                        <a href="https://github.com/GiuseppeLiGioi/kick-shop" target="_blank" rel="noopener noreferrer" className="a-projects">
                            <span><FontAwesomeIcon icon={faGithub} /></span> Apri su GitHub
                        </a>
                    </div>
                </div>


                
                <div className="container-single-project">
                    <div className="project-top">
                        <img src="/minato-foto.jpg" alt="foto minato" />
                    </div>

                    <div className="project-bottom">
                        <h4><strong>CAMPO MINATO</strong></h4>
                        <p>
                            Una web app in Javascript, che riproduce il classico "Campo Minato", con difficoltà selezionabili e sistema di punteggio integrato. <br />
                            Implementata anche una funzione di Best Time, grazie alla memoria del browser, che salva i tempi migliori per ogni difficoltà, mostrando così nell'interfaccia utente il tempo da battere.
                        </p>
                        <a href="https://github.com/GiuseppeLiGioi/campo-minato" target="_blank" rel="noopener noreferrer" className="a-projects">
                            <span><FontAwesomeIcon icon={faGithub} /></span> Apri su GitHub
                        </a>
                    </div>
                </div>


            </div>

        </div>
        </section>

    )
}