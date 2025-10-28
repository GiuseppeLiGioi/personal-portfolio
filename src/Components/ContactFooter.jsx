import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone, faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactFooter() {
    return (
        <section id="contact">

            <div className="container-footer">
                <h2 className="title-contact">RECAPITI E PIATTAFORME</h2>
                <p className="description-footer">
                    Per metterti in contatto con me o conoscere meglio il mio percorso, in questa sezione trovi la mia residenza, i miei recapiti, il mio CV scaricabile in PDF e i link alle mie piattaforme professionali.
                </p>

                <div className="container-contacts">

                    <div className="container-info">
                        <a className="a-contact" href="https://www.google.com/maps?q=Olbia,+Sardegna,+Italia" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHouse} />Olbia, Sardegna, Italia</a>
                        <a href="tel:+393403231407"><FontAwesomeIcon icon={faPhone} /><span className="span-contact">+39 3403231407</span></a>
                        <a href="mailto:giuseppe.li.gioi.job@gmail.com"><FontAwesomeIcon icon={faEnvelope} /><span className="span-contact">giuseppe.li.gioi.job@gmail.com</span></a>
                    </div>

                    <div className="container-platforms">

                        <div className="container-professional-platforms">

                        <a href="https://github.com/GiuseppeLiGioi" target="_blank" rel="noopener noreferrer" className="a-contact">
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>

                        <a href="https://www.linkedin.com/in/giuseppe-li-gioi-327b78378" target="_blank" rel="noopener noreferrer" className="a-contact">
                            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                        </a>
                        </div>


                        <div className="container-cv">
                            <a href="/Giuseppe_Li_Gioi_cv.pdf" download="Giuseppe_Li_Gioi_cv.pdf" target="_blank" rel="noopener noreferrer" className="a-contact">
                                <FontAwesomeIcon icon={faFilePdf} /> Scarica CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}