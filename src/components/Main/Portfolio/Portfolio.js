import Link from "../../../images/link.svg"

function Portfolio() {
  
    return(
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>

            <ul class="portfolio__links">


                <li class="portfolio__link-item">
                    <p class="portfolio__link">Статичный сайт</p>
                    <a href="https://snoz-an.github.io/how-to-learn/index.html" class="portfolio__link" target="blank">
                        <img className="portfolio__link-hover" src={Link} alt="ссылка"/>
                    </a>
                </li>
                <li class="portfolio__link-item">
                    <p class="portfolio__link">Адаптивный сайт</p>
                    <a href="https://snoz-an.github.io/russian-travel/" class="portfolio__link" target="blank">
                        <img className="portfolio__link-hover" src={Link} alt="ссылка"/>
                    </a>
                </li>
                <li class="portfolio__link-item">
                    <p class="portfolio__link">Одностраничное приложение</p>
                    <a href="https://snozz.students.nomoreparties.space" class="portfolio__link" target="blank">
                        <img className="portfolio__link-hover" src={Link} alt="ссылка"/>
                    </a>
                </li>
                
            </ul>

        </section>
       

    ) 
}

//export default Portfolio
export default Portfolio;