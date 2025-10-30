import { useState } from "react"


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="container-navbar">

            
            <div className="navbar-inner">
            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Apri menu"
            >
                ☰
            </button>

                <ul className={`list-link-navbar ${isOpen ? "open" : ""}`}>
                    <li className="link-navbar"><a href="#hero" onClick={() => setIsOpen(false)}>Intro</a></li>
                    <li className="link-navbar"><a href="#about" onClick={() => setIsOpen(false)}>Profilo</a></li>
                    <li className="link-navbar"><a href="#projects" onClick={() => setIsOpen(false)}>Progetti</a></li>
                    <li className="link-navbar"><a href="#contact-form" onClick={() => setIsOpen(false)}>Contattami</a></li>
                    <li className="link-navbar"><a href="#contact" onClick={() => setIsOpen(false)}>Recapiti</a></li>
                </ul>
            </div>
        </nav>
    )
}