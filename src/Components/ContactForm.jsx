import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        agency: "",
        object: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        agency: "",
        object: "",
        message: "",
    })

    const [sended, setSended] = useState(false)

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegexIntl = /^\+?[0-9\s\-]{7,15}$/;



    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        let valid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Campo Nome obbligatorio"
            valid = false;
        }

        if (!formData.surname.trim()) {
            newErrors.surname = "Campo Cognome obbligatorio"
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Campo E-mail obbligatorio"
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Campo Messaggio obbligatorio"
            valid = false;
        }


        if (formData.name && !nameRegex.test(formData.name)) {
            setFormData(prev => ({...prev, name: ""}))
            newErrors.name = "Il campo Nome deve contenere solo lettere.";
            valid = false;
        }

        if (formData.surname && !nameRegex.test(formData.surname)) {
            setFormData(prev => ({...prev, surname: ""}))
            newErrors.surname = "Il campo Cognome deve contenere solo lettere.";
            valid = false;
        }

        if (formData.email && !emailRegex.test(formData.email)) {
            setFormData(prev => ({...prev, email: ""}))
            newErrors.email = "L'email deve essere valida (@ & .).";
            valid = false;
        }

        if (formData.phone && !phoneRegexIntl.test(formData.phone)) {
            setFormData(prev => ({...prev, phone: ""}))
            newErrors.phone = "Il numero inserito non ha un formato valido";
            valid = false;
        }

        setErrors(newErrors)

        if (!valid) return;

        try {
            const response = await fetch("https://formspree.io/f/xqagbzab", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSended(true);
                setFormData({ name: "", surname: "", email: "", phone: "", agency: "", object: "", message: "" });

                setTimeout(() => {
                    setSended(false);
                }, 5000);
            } else {
                alert("Errore nell'invio del messaggio. Riprova.");
            }
        } catch (error) {
            alert("Errore durante il tentativo di inviare il messaggio, riprova.");
        }

    }




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    }


    return (

        <section id="contact-form">
            <div className="container-contact-form">

                <div className="contact-form-info">
                <h2 className="title-profile">RESTIAMO IN CONTATTO</h2>
                <p className="description-about">Per rimanere in contatto con me, in questa sezione ho preparato un form da compilare per inviarmi un messaggio! <br />
                Hai un progetto in mente da condividere con me? Vorresti propormi qualcosa? Hai qualcosa da suggerirmi?  <br />
                Beh, sei nella sezione giusta! Compila i campi e riceverai presto una mia risposta!
                </p>
                </div>

                {!sended ? (
                    <form
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >
                       <div className="form-group">

                        <label className="label-form">
                            Nome: *
                        </label>

                            <input
                                type="text"
                                name="name"
                                placeholder={errors.name || "Inserisci il tuo nome"}
                                className={errors.name ? "input-form-error" : "input-form"}
                                value={formData.name}
                                onChange={handleChange}
                            />
                       </div>

                       <div className="form-group">


                        <label className="label-form">
                            Cognome: *
                        </label>
                            <input
                                type="text"
                                name="surname"
                                placeholder={errors.surname || "Inserisci il tuo cognome"}
                                className={errors.surname ? "input-form-error" : "input-form"}
                                value={formData.surname}
                                onChange={handleChange}
                            />
                       </div>

                       <div className="form-group">

                        <label className="label-form">
                            E-mail: *
                        </label>
                            <input
                                type="email"
                                name="email"
                                placeholder={errors.email || "Inserisci la tua email"}
                                className={errors.email ? "input-form-error" : "input-form"}
                                value={formData.email}
                                onChange={handleChange}
                            />
                       </div>

                       <div className="form-group">

                        <label className="label-form">
                            Telefono:
                        </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder={errors.phone || "Inserisci il tuo numero di telefono"}
                                className={errors.phone ? "input-form-error" : "input-form"}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                       </div>
                       

                       <div className="form-group">

                        <label className="label-form">
                            Azienda:
                        </label>
                            <input
                                type="text"
                                name="agency"
                                placeholder="Nome Azienda"
                                className="input-form"
                                value={formData.agency}
                                onChange={handleChange}
                            />
                       </div>


                       <div className="form-group">
                        <label className="label-form">
                            Oggetto:
                        </label>
                            <input
                                type="text"
                                name="object"
                                placeholder="Oggetto del messaggio"
                                className="input-form"
                                value={formData.object}
                                onChange={handleChange}
                            />

                       </div>


                       <div className="form-group form-group-full">
                        <label className="label-form">
                            Messaggio: *
                        </label>
                            <textarea
                                name="message"
                                placeholder={errors.message || "Digita qui il tuo messaggio..."}
                                className={errors.message ? "input-form-error" : "textarea-form"}
                                value={formData.message}
                                onChange={handleChange}
                            >
                            </textarea>
                       </div>

                        <button type="submit" className="btn-form">Invia Messaggio <span className="span-form"><FontAwesomeIcon icon={faPaperPlane} /></span></button>

                    </form>
                ) : (
                    <div className="container-thankyou-message">
                        <div className="container-thankyou-info">
                            <h3 className="title-thankyou">Grazie per avermi mandato un messaggio!</h3>
                            <p className="p-thankyou">Mi impegnerò per risponderti al più presto!</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}