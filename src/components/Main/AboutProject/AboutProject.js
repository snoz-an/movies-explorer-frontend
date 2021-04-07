function AboutProject() {
  
    return(
        <section className="about">
            <h3 className="about__title">О проекте</h3>
            
            <div className="about__project">
                <div className="about__main-text">
                    <h3 className="about__brief">Дипломный проект включал 5 этапов</h3>
                    <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                   
                </div>
                <div className="about__main-text">
                    <h3 className="about__brief">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                   
                </div>

        
            </div>

            <div className="about__time-container">

                <div className="about__time-container-item">
                <p className="about__time_backend"> 1 неделя</p>
                <p className="about__backend">Back-end</p>
                </div>
                


                <div className="about__time-container-item">
                <p className="about__time_frontend"> 4 недели</p>
                <p className="about__frontend">Front-end</p>
                </div>

                
                </div>

     
        </section>
       

    ) 
}

export default AboutProject;