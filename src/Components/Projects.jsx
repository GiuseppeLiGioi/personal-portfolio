import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
    return (

        <section id="projects">
           <div className="container-projects">
               <h2 className="title-projects">I MIEI PROGETTI</h2>
               <p className="description-projects"></p>

            <div className="container-single-project">
                  
                <div className="container-info-project">
                     <h3 className="title-single-project">TITOLO</h3>

                     <div className="container-semititle-state">
                        <h5 className="semi-title">Semi-title</h5>
                        <p className="p-state">Completed</p>
                     </div>


                     <p className="description-single-project">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum placeat iusto illum sapiente ab. 
                        Error doloribus perferendis nobis autem cupiditate ea dolores saepe? Porro natus quod asperiores quia, voluptatem quos.
                    </p>
                </div>

                <div className="container-stack-project">
                    <ul className="list-stack-project">
                         <li className="li-project"></li>
                         <li className="li-project"></li>
                         <li className="li-project"></li>
                         <li className="li-project"></li>
                         <li className="li-project"></li>
                    </ul>
                </div>

                <button className="btn-project"><span><FontAwesomeIcon icon={faGithub} /></span> Github</button>
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