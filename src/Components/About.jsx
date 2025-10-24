export default function About(){
    return(
        <section id="about" className="container-about fade-in-up">

        <div className="about-inner">
        <h2 className="title-about">PROFILO</h2>
        <div className="container-documents">

        <p className="description-about">
            La mia passione per l'informatica nasce circa sei anni fa, alle scuole superiori, quando decisi di frequentare ed impegnarmi per conseguire il diploma nel medesimo corso.<br/>
            Terminata la scuola, spinto dalla forte curiosità per la programmazione, ho deciso di iscrivermi a "Boolean" completando un corso intensivo di 600 ore che mi ha concesso di acquisire solide competenze su React, Node ed Express. <br />
            Inoltre ho conseguito una specializzazione, prevista dallo stesso corso, in Frontend-React.Js
        </p>

        <figure className="container-certificate">
            <img className="img-certificate" src="/certificato-webdev.png" alt="certificato web developer" />
        </figure>
        </div>
        </div>

        <div className="box-about fade-in-up">

        <div className="about-bottom-front">
            <h3 className="title-skills">Stack Tecnologico Frontend</h3>
            <span className= "span-skill">HTML</span>
            <span className= "span-skill">CSS</span>
            <span className= "span-skill">JavaScript</span>
            <span className= "span-skill">TypeScript</span>
            <span className= "span-skill">React</span>
            <span className= "span-skill">Next.js</span>
            <span className= "span-skill">Bootstrap</span>
            <span className= "span-skill">Axios / Fetch</span>
            <span className= "span-skill">React Router</span>
            <span className= "span-skill">ContextApi</span>
        </div>

        <div className="about-bottom-front-spec">
            <h3 className="title-skills">Hook ed argomenti avanzati Frontend</h3>
            <span className= "span-skill">React.memo</span>
            <span className= "span-skill">UseMemo</span>
            <span className= "span-skill">UseCallback</span>
            <span className= "span-skill">Debounce</span>
            <span className= "span-skill">Browser Storage</span>
            <span className= "span-skill">Input non controllati: useRef</span>
            <span className= "span-skill">useReducer</span>
        </div>
        </div>


        <div className="box-about fade-in-up">

        <div className="about-bottom-back">
            <h3 className="title-skills">Stack Tecnologico Backend</h3>
            <span className= "span-skill">Node.js</span>
            <span className= "span-skill">Express.js</span>
            <span className= "span-skill">MYSQL</span>
            <span className= "span-skill">MYSQLWorkBench</span>
        </div>

        <div className="about-bottom-back-spec">
            <h3 className="title-skills">Argomenti avanzati Backend</h3>
            <span className= "span-skill">CRUD data</span>
            <span className= "span-skill">JWT</span>
            <span className= "span-skill">Brcypt</span>
            <span className= "span-skill">Validation data</span>
            <span className= "span-skill">Relazioni tra Entità</span>
            <span className= "span-skill">Upload / Download img</span>
        </div>
        </div>


            

        </section>
    )
}