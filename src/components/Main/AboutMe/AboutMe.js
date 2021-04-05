import Photo from "../../../images/photo.jpg"

function AboutMe() {
  
    return(
        <section className="about-me">
            <h3 className="about__title">Студент</h3>
            <div class="about__me">
                <div className="about__me-text">
                    <h3 className="about__name">Андрей</h3>
                    <p className="about__activity">Фронтенд-разработчик, 21 год</p>
                    <p className="about__life">Я родился и живу в Воркуте, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="about__social-media">
                        <li><a href="https://ru-ru.facebook.com/" target="blank" className="about__social-media-item">Facebook</a></li>
                        <li><a href="https://github.com/snoz-an" target="blank" className="about__social-media-item">Github</a></li>
                    </ul>
                </div>
                <img src={Photo} alt="моё фото" className="about__me-photo"/>
            </div>
     
        </section>
       

    ) 
}

//export default AboutMe
export default AboutMe;