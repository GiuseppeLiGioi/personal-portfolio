export default function About(){
    return(
        <section id="about" className="container-about">

        <div className="about-inner fade-in-up">
        <h2 className="title-about">About Me</h2>
        <p className="description-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum facilis, pariatur sapiente dicta non illo dignissimos consequuntur ullam nihil 
        voluptas iste reprehenderit quisquam, eaque fugiat cum beatae, a quam minima.
        </p>
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


        <div className="box-about">

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