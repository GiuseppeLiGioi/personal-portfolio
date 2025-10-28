import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faDatabase,  
  faLock,   
  faCogs,      
  faCode       
} from "@fortawesome/free-solid-svg-icons";
import {  
  faHtml5,     
  faCss3Alt,  
  faJs,        
  faReact,    
  faBootstrap, 
  faNodeJs     
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
    return (
        <section id="about">
            <div className="container-profile">

                <h2 className="title-profile">PROFILO</h2>

                <div className="container-skills">
                    <p className="description-about"> La mia passione per l'informatica nasce circa sei anni fa, alle scuole superiori, quando decisi di frequentare ed impegnarmi per conseguire il diploma nel medesimo corso.<br /> 
                    Terminata la scuola, spinto dalla forte curiosità per la programmazione, ho deciso di iscrivermi a "Boolean" completando un corso intensivo di 600 ore che mi ha concesso di acquisire solide competenze su React, Node ed Express. <br /> 
                    Inoltre ho conseguito una specializzazione, prevista dallo stesso corso, in Frontend-React.Js 
                    </p>
                    <div className="container-all-about">

                    <div className="container-certificate">
                        <figure className="figure-certificate">
                            <img src="/certificato-webdev.png" alt="foto certificato" className="img-certificate" />
                        </figure>
                    </div>

                    <div className="container-all-stack">
                        <div className="container-front-stack">
                            <ul className="list-front-stack">
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faHtml5} /></span>HTML</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCss3Alt} /></span>CSS</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faJs} /></span>Javascript</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCode} /></span>TypeScript</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>React</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCode} /></span>Next.Js</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faBootstrap} /></span>Bootstrap</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCode} /></span>Axios</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>React-Router</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCode} /></span>ContextAPI</li>

                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>React.memo</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>UseMemo</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>UseCallback</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>Debounce</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>BrowserStorage</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>UseRef</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faReact} /></span>UseReducer</li>
                            </ul>
                        </div>

                        <div className="container-back-stack">
                            <ul className="list-back-stack">
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faNodeJs} /></span>Express.Js</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faDatabase} /></span>MYSQL-WorkBench</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCode} /></span>CRUD</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faLock} /></span>Jwt</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCogs} /></span>Brcypt</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faCogs} /></span>Validation Data</li>
                                <li className="li-stack"><span className="span-stack"><FontAwesomeIcon icon={faDatabase} /></span>Relazioni Entità</li>
                            </ul>
                        </div>
                    </div>
                </div>


                </div>
            </div>


        </section>
    )
}