import downArrow from "../images/icon-arrow-down.svg"

export default function Hero(){
    return(
        <main className="hero-comp">
            <h1 className="brand-tag">We are creatives</h1>
            <img className="hero-icon" src={downArrow} alt="down-arrow" />
        </main>
    )
}