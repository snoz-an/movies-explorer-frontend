function Profile () {
    
    return(
        <>
            <form className="profile">   
                <h1 className="profile__greeting">Привет, Андрей!</h1>
                <div className="profile__input-container">
                    <p className="profile__input-name">Имя</p>
                    <input required minLength="2" maxLength="40" type="text" name="name" placeholder="Введите имя" id="input-name" className="profile__input"/>
                </div>
                <div className="profile__input-container">
                    <p className="profile__input-name">Почта</p>
                    <input required minLength="2" maxLength="40" type="text" name="name" placeholder="Введите почту" id="input-name" className="profile__input"/>
                </div>
                <button type="submit" className="profile__button profile__sumbit-button">Редактировать</button>
                <button type="button" className="profile__button profile__exit-button">Выйти из аккаунта</button>
            </form>    
        </> 
    ) 
}

export default Profile;