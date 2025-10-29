import { useState } from "react"
export default function ContactForm(){
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

    
    setFormData({...formData, [name]: value})
    setErrors({...errors, [name]: ""})

    const requiredInput = ["name", "surname", "email", "message"]
    if(requiredInput.includes(name) && value.trim() === ""){
        setErrors((prev) => ({...prev, [name]: "Campo obbligatorio!"}))
        return;
    }

   if(name === "name" || name === "surname" ){
     if(!nameRegex.test(value)){
        setErrors((prev) => ({...prev, [name]: "Il campo deve contenere solo lettere"}))
     }
   }

    else if(name === "email" ){
     if(!emailRegex.test(value)){
        setErrors((prev) => ({...prev, [name]: "E-mail non valida, deve contenere @ e ."}))
     }
   }
  }


    return(
        
        <section id="contact-form">
           <div className="container-contact-form">
              <h2 className="title-profile">RESTIAMO IN CONTATTO</h2>

            {!sended ? (
            <form 
              action=""
              method="POST"
              onSubmit={() => setSended(true)}
              className="contact-form"
            >

            <label>
                Nome: *

                <input 
                type="text" 
                placeholder="Inserisci il tuo nome"
                className="input-form"
                value={name}
                onChange={handleChange}
                />
            </label>    

                


              </form>
            ): (
                <div>

                </div>
            )}
           </div>
        </section>
    )
}