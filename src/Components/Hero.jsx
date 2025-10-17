export default function Hero(){
    return(
        <div className="container-hero">
            <div className="container-img-hero">
               <img src="/logo-portfolio.png" alt="Foto Personale"/>
            </div>

            <div className="hero-divider"></div>

            <div className="container-hero-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates nihil nemo quod facere quasi repellat nostrum dolore sint quam? Quidem aspernatur libero dolore pariatur ipsum quos enim tempora! Laboriosam, eum!
                </p>

                <button className="btn-hero">
                   Scopri i miei Progetti
                </button>
            </div>
        </div>
    )
}