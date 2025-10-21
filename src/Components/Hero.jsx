export default function Hero(){
    return(
        <section id="hero">

        <div className="container-hero fade-in-up">
            <div className="container-img-hero">
               <img src="/logo-portfolio.png" alt="Foto Personale"/>
            </div>

            <div className="hero-divider"></div>

            <div className="container-hero-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates nihil nemo quod facere quasi repellat nostrum dolore sint quam? Quidem aspernatur libero dolore pariatur ipsum quos enim tempora! Laboriosam, eum!
                </p>

                <a className="btn-hero" href="#projects">
                   Scopri i miei Progetti
                </a>
            </div>
        </div>
        </section>
    )
}