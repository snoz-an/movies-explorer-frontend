import React, {useState} from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import {useFormWithValidation} from '../Validation'


function Profile ({onSignOut, onUpdateUser}) {

    const {
        values,
        handleChange, 
        errors, 
        isValid, 
        resetForm
      } = useFormWithValidation();

    const [errorMessage, setErrorMessage] = useState('');
    
    const [isDisabled, setIsDisabled] = useState(false);


    const currentUser = React.useContext(CurrentUserContext);
    

      React.useEffect(() => {
          resetForm(currentUser);
      }, []);
  
    
   

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name: values.name,
          email: values.email
        });
    } 

     const checkInputs = () => currentUser.name !== values.name || currentUser.email !== values.email;


    return(
        <>
         <Header loggedIn/>
            <form className="profile"  onSubmit={handleSubmit}>   
                <h1 className="profile__greeting">Привет, {`${currentUser.name}`}!</h1>
                <div className="profile__input-container">
                    <p className="profile__input-name">Имя</p>
                    <label className="profile__input-label">
                    <input value={values.name || ""} required minLength="2" maxLength="40" type="text" name="name" placeholder="Введите имя" id="input-name" className="profile__input" onChange={handleChange}/>
                    <span className="profile__input-error">{errors.name || ''}</span>
                    </label>
                </div>
                <div className="profile__input-container">
                    <p className="profile__input-name">Почта</p>
                    <label className="profile__input-label">
                    <input  value={values.email || ""} pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" required minLength="2" maxLength="40" type="text" name="email" placeholder="Введите почту" id="input-name" className="profile__input" onChange={handleChange}/>
                    <span className="profile__input-error">{errors.email || ''}</span>
                    </label>
                </div>
                <button type="submit" className="profile__button profile__sumbit-button"  onSubmit={handleSubmit}   disabled={!isValid || !checkInputs() || isDisabled}>Редактировать</button>
                <button onClick={onSignOut} type="button" className="profile__button profile__exit-button">Выйти из аккаунта</button>
            </form>    
        </> 
    ) 

    // const {
    //     values,
    //     errors,
    //     isValidForm,
    //     handleInputChange,
    //     resetForm,
    //   } = useFormWithValidation();


    // const [name, setName ] = React.useState('');
    // const [email, setEmail ] = React.useState('');

   

    // function handleChangeName(e) {
    //     setName(e.target.value);
    // }

    // function handleChangeEmail(e) {
    //     setEmail(e.target.value);
    // }  

    // const currentUser = React.useContext(CurrentUserContext);
    
    // React.useEffect(() => {
    //     setName(currentUser.name);
    //     setEmail(currentUser.email);
    // }, []); 

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     onUpdateUser({
    //       name,
    //       email
    //     });
    // } 

    // const checkInputs = () =>
    // currentUser.name !== values.name || currentUser.email !== values.email;


    // return(
    //     <>
    //      <Header loggedIn/>
    //         <form className="profile"  onSubmit={handleSubmit}>   
    //             <h1 className="profile__greeting">Привет, {`${currentUser.name}`}!</h1>
    //             <div className="profile__input-container">
    //                 <p className="profile__input-name">Имя</p>
    //                 <input value={name || ""} required minLength="2" maxLength="40" type="text" name="name" placeholder="Введите имя" id="input-name" className="profile__input" onChange={handleChangeName}/>
    //             </div>
    //             <div className="profile__input-container">
    //                 <p className="profile__input-name">Почта</p>
    //                 <input  value={email || ""} required minLength="2" maxLength="40" type="text" name="name" placeholder="Введите почту" id="input-name" className="profile__input" onChange={handleChangeEmail}/>
    //             </div>
    //             <button type="submit" className="profile__button profile__sumbit-button"  onSubmit={handleSubmit}>Редактировать</button>
    //             <button onClick={onSignOut} type="button" className="profile__button profile__exit-button">Выйти из аккаунта</button>
    //         </form>    
    //     </> 
    // ) 
}

export default Profile;