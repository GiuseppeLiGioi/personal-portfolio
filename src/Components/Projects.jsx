import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faGithub, faHtml5, faJs, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faCircleCheck, faArrowUpRightFromSquare, faFile, faChartBar, faChartLine, faClock, faThumbtack } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
    return (

        <section id="projects">
            <div className="container-projects">
                <div className="container-top-projects">
                    <p className="top-bar-code"><span><FontAwesomeIcon icon={faCode} /></span> <strong>I miei progetti</strong></p>
                    <h2 className="title-projects"><span className="span-project-title"><FontAwesomeIcon icon={faThumbtack} /></span> Progetti Fissati <span className="span-project-title"><FontAwesomeIcon icon={faThumbtack} /></span></h2>
                    <p className="description-projects">In questa sezione troverai i miei migliori progetti, una breve descrizione di ognuno e le tecnolgie utilizzate per il loro sviluppo. </p>
                </div>

                <div className="container-cards-project">

                <div className="container-single-project">

                    <div className="container-info-project">
                        <h3 className="title-single-project">PulseFit Website</h3>

                        <div className="container-semititle-state">
                            <h5 className="semi-title">Full-Stack</h5>
                            <p className="p-state"><span><FontAwesomeIcon icon={faCircleCheck} /></span> Completed</p>
                        </div>


                        <p className="description-single-project">
                            Piattaforma full-stack pensata per il fitness. <br />
                            Include autenticazione sicura, CRUD completo, supporto immagini, tracciamento dei progressi utente e simulazione di pagamenti con Stripe.
                        </p>
                    </div>

                    <div>
                        <ul className="list-stack-project">
                            <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> React</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faJs} /></span> Javascript</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faDatabase} /></span> MYSQL</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> React Router</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faCss} /></span> Responsive CSS</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faDatabase} /></span> CRUD</li>
                        </ul>
                    </div>

                    <div className="container-buttons-project">

                        <a href="https://github.com/GiuseppeLiGioi/gym-card" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                            <button className="btn-project-git"><span><FontAwesomeIcon icon={faGithub} /></span> Github</button>
                        </a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7384135953793236992/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                            <button className="btn-project-link"><span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> Post Linkedin</button>
                        </a>
                    </div>
                </div>


                <div className="container-single-project">

                    <div className="container-info-project">
                        <h3 className="title-single-project">Finance Dashboard</h3>

                        <div className="container-semititle-state">
                            <h5 className="semi-title">Frontend</h5>
                            <p className="p-state"><span><FontAwesomeIcon icon={faCircleCheck} /></span> Completed</p>
                        </div>


                        <p className="description-single-project">
                            Una sito web, responsive per monitorare il proprio saldo in maniera professionale. Include tracciamento grafico di entrate e uscite con filtraggio ed impostazioni personalizzate.
                        </p>
                    </div>

                    <div>
                        <ul className="list-stack-project">
                            <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> React</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faJs} /></span> Javascript</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faChartLine} /></span> Chart.js</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> React Router</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faCss} /></span> Responsive CSS</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faFile} /></span> PapaParse</li>
                        </ul>
                    </div>

                    <div className="container-buttons-project">

                        <a href="https://github.com/GiuseppeLiGioi/personal-finance-dashboard" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                            <button className="btn-project-git"><span><FontAwesomeIcon icon={faGithub} /></span> Github</button>
                        </a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7378005561554116608/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                            <button className="btn-project-link"><span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> Post Linkedin</button>
                        </a>
                    </div>
                </div>


                <div className="container-single-project">

                    <div className="container-info-project">
                        <h3 className="title-single-project">Kick Shop</h3>

                        <div className="container-semititle-state">
                            <h5 className="semi-title">Full-Stack</h5>
                            <p className="p-state"><span><FontAwesomeIcon icon={faCircleCheck} /></span> Completed</p>
                        </div>


                        <p className="description-single-project">
                            Un sito e-commerce realizzato in team durante la mia permanenza in "Boolean".<br />
                            Include HomePage dinamica con prodotti in evidenza, filtri e ordinamenti, pagine prodotto, wishlist e carrello personali, pagina di checkout ed email di conferma.
                        </p>
                    </div>

                    <div>
                        <ul className="list-stack-project">
                            <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> React</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faJs} /></span> Javascript</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faDatabase} /></span> MYSQL</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> React Router</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faCss} /></span> Responsive CSS</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faDatabase} /></span> CRUD</li>
                        </ul>
                    </div>

                    <div className="container-buttons-project">

                        <a href="https://github.com/GiuseppeLiGioi/kick-shop" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                            <button className="btn-project-git"><span><FontAwesomeIcon icon={faGithub} /></span> Github</button>
                        </a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7377960256645238784/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                            <button className="btn-project-link"><span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> Post Linkedin</button>
                        </a>

                    </div>
                </div>

                <div className="container-single-project">

                    <div className="container-info-project">
                        <h3 className="title-single-project">Campo Minato</h3>

                        <div className="container-semititle-state">
                            <h5 className="semi-title">Frontend</h5>
                            <p className="p-state" style={{ color: "orange" }}><span><FontAwesomeIcon icon={faClock} style={{ color: "orange" }} /></span> In progress</p>
                        </div>


                        <p className="description-single-project">
                            Un mini-gioco in Javascript, che riproduce il classico "Campo Minato". <br />
                            Presenta difficoltà selezionabili, sistema di punteggio e salvataggio del Best Time con memoria del browser.
                        </p>
                    </div>

                    <div>
                        <ul className="list-stack-project">
                            <li className="li-project"><span><FontAwesomeIcon icon={faJs} /></span> Javascript</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faHtml5} /></span>HTML</li>
                            <li className="li-project"><span><FontAwesomeIcon icon={faCss} /></span> CSS3</li>
                        </ul>
                    </div>

                    <div className="container-buttons-project">


                        <a href="https://github.com/GiuseppeLiGioi/campo-minato" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                            <button className="btn-project-git"><span><FontAwesomeIcon icon={faGithub} /></span> Github</button>
                        </a>

                    </div>
                </div>
                </div>




            </div>

        </section>

    )
}