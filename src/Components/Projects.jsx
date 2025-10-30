import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faGithub, faJs, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faCircleCheck, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
    return (

        <section id="projects">
           <div className="container-projects">
            <div className="container-top-projects">
                <p className="top-bar-code"><span><FontAwesomeIcon icon={faCode} /></span> I miei Progetti</p>
               <h2 className="title-projects">Progetti Fissati</h2>
               <p className="description-projects">In questa sezione troverai i miei migliori progetti, una breve descrizione di ognuno e le tecnolgie utilizzate per il loro sviluppo. </p>
            </div>

            <div className="container-single-project">
                  
                <div className="container-info-project">
                     <h3 className="title-single-project">PulseFit Website</h3>

                     <div className="container-semititle-state">
                        <h5 className="semi-title">Full-Stack</h5>
                        <p className="p-state"><span><FontAwesomeIcon icon={faCircleCheck} /></span> Completed</p>
                     </div>


                     <p className="description-single-project">
                        Una web app full-stack pensata per il fitness. Include autenticazione sicura, CRUD completo, supporto immagini, tracciamento dei progressi utente e simulazione di pagamenti con Stripe.
                    </p>
                </div>

                <div>
                    <ul className="list-stack-project">
                         <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> React</li>
                         <li className="li-project"><span><FontAwesomeIcon icon={faJs} /></span> Javascript</li>
                         <li className="li-project"><span><FontAwesomeIcon icon={faDatabase} /></span> MYSQL</li>
                         <li className="li-project"><span><FontAwesomeIcon icon={faReact} /></span> ContextAPI</li>
                         <li className="li-project"><span><FontAwesomeIcon icon={faCss} /></span> Responsive CSS</li>
                         <li className="li-project"><span><FontAwesomeIcon icon={faDatabase} /></span> CRUD</li>
                    </ul>
                </div>
                  
                  <div className="container-buttons-project">

                <button className="btn-project-git"><span><FontAwesomeIcon icon={faGithub} /></span> Github</button>
                <button className="btn-project-link"><span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span> Post Linkedin</button>
                  </div>
            </div>


               <div className="container-single-project">

               </div>
               <div className="container-single-project">

               </div>
               <div className="container-single-project">

               </div>
           </div>
          
        </section>

    )
}