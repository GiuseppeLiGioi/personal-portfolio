import { useState } from "react"
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



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    }


    return (

        <section id="contact-form">
            <div className="container-contact-form">
                <h2 className="title-profile">RESTIAMO IN CONTATTO</h2>

                {!sended ? (
                    <form
                        action="https://formspree.io/f/xqagbzab"
                        method="POST"
                        onSubmit={(e) => {
                            e.preventDefault()
                            setSended(true)
                            e.target.submit()
                        }}
                        className="contact-form"
                    >

                        <label className="label-form">
                            Nome: *

                            <input
                                type="text"
                                name="name"
                                placeholder={errors.name || "Inserisci il tuo nome"}
                                className="input-form"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>


                        <label className="label-form">
                            Cognome: *

                            <input
                                type="text"
                                name="surname"
                                placeholder={errors.surname || "Inserisci il tuo cognome"}
                                className="input-form"
                                value={formData.surname}
                                onChange={handleChange}
                            />
                        </label>


                        <label className="label-form">
                            E-mail: *

                            <input
                                type="email"
                                name="email"
                                placeholder={errors.email || "Inserisci la tua email"}
                                className="input-form"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>


                        <label className="label-form">
                            Telefono:

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Inserisci il tuo numero di telefono"
                                className="input-form"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </label>



                        <label className="label-form">
                            Azienda:

                            <input
                                type="text"
                                name="agency"
                                placeholder="Nome Azienda"
                                className="input-form"
                                value={formData.agency}
                                onChange={handleChange}
                            />
                        </label>


                        <label className="label-form">
                            Oggetto:

                            <input
                                type="text"
                                name="object"
                                placeholder="Oggetto del messaggio"
                                className="input-form"
                                value={formData.object}
                                onChange={handleChange}
                            />
                        </label>


                        <label className="label-form">
                            Messaggio: *

                            <textarea
                                name="message"
                                placeholder={errors.message || "Digita qui il tuo messaggio..."}
                                className="textarea-form"
                                value={formData.message}
                                required
                                onChange={handleChange}
                            >
                            </textarea>
                        </label>



                        <button type="submit" className="btn-form">Invia</button>
                    </form>
                ) : (
                    <div className="container-thankyou-message">
                        <div className="container-thankyou-info">
                            <h3 className="title-thankyou">Grazie per il tuo messaggio!</h3>
                            <p className="p-thankyou">Ti contatterò al più presto!</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}