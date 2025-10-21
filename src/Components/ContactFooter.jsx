import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactFooter() {
    return (
         <section id="contact">

        <div className="container-footer fade-in-up">
            <h2 className="title-contact">RECAPITI E PIATTAFORME</h2>
            <p className="description-footer">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Non perferendis odio dolorem consequatur molestiae error dicta itaque nisi, repellendus harum possimus sequi saepe. Modi ea iure optio soluta, animi dolor.
            </p>

            <div className="container-contacts">

                <div className="container-info">
                    <a className="a-contact" href="https://www.google.com/maps?q=Via+del+Cisto+42,+Olbia,+Sardegna,+Italia" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHouse} /> Via del cisto 42, Olbia, Sardegna, Italia</a>
                    <a href="tel:+393403231407"><FontAwesomeIcon icon={faPhone} /><span className="span-contact">+39 3403231407</span></a>
                    <a href="mailto:giuseppe.li.gioi.job@gmail.com"><FontAwesomeIcon icon={faEnvelope} /><span className="span-contact">giuseppe.li.gioi.job@gmail.com</span></a>
                </div>

                <div className="container-platforms">
                    <a href="https://github.com/GiuseppeLiGioi" target="_blank" rel="noopener noreferrer" className="a-contact">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/giuseppe-li-gioi-327b78378" target="_blank" rel="noopener noreferrer" className="a-contact">
                        <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                    </a>

                </div>
            </div>
        </div>
        </section>
    )
}