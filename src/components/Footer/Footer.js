function Footer() {
  
    return(
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <p className="footer__year">&#169; 2021</p>
                    <nav>
                        <ul className="footer__links">
                            <li>
                                <a href="https://praktikum.yandex.ru/profile/web/" className="footer__link" target="blank">Яндекс.Практикум</a>
                            </li>
                            <li>
                                <a href="https://github.com/snoz-an" className="footer__link" target="blank">Github</a>
                            </li>
                            <li>
                                <a href="https://ru-ru.facebook.com/" className="footer__link" target="blank">Facebook</a>
                            </li>
                        </ul>
            </nav>
            </div>
        </footer>
       

    ) 
}

export default Footer
