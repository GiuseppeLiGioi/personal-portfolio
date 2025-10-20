import About from "../Components/About"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import InteractiveCards from "../Components/InteractiveCards"
import Projects from "../Components/Projects"
import ContactFooter from "../Components/ContactFooter"

export default function HomePage(){
    return(
       <>
     <Navbar />
     <Hero />
     <About />
     <Projects />
     <ContactFooter />
     
     
       
       </>
    )
}