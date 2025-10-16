export default function Navbar(){
    return(
        <nav className="container-navbar">
            <ul className="list-link-navbar"> 
                <li className="link-navbar"><a href="#hero">Home</a></li>
                <li className="link-navbar"><a href="#about">About Me</a></li>
                <li className="link-navbar"><a href="#projects">Progetti</a></li>
                <li className="link-navbar"><a href="#platforms">Piattaforme</a></li>
                <li className="link-navbar"><a href="#contact">Contatti</a></li>
            </ul>
        </nav>
    )
}