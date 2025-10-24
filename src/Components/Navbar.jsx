export default function Navbar(){
    return(
        <nav className="container-navbar fade-in-up">
            <div className="navbar-inner">
            <ul className="list-link-navbar"> 
                <li className="link-navbar"><a href="#hero">Intestazione</a></li>
                <li className="link-navbar"><a href="#about">Profilo</a></li>
                <li className="link-navbar"><a href="#projects">Progetti</a></li>
                <li className="link-navbar"><a href="#contact">Contatti</a></li>
            </ul>
            </div>
        </nav>
    )
}