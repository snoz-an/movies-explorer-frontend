import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies() {
    
    return(
        <>
            <section>
                <Header loggedIn/>
                <SearchForm/>

                <MoviesCardList/>
                <div className="movies__button-more-container">
                    <button type="button" className="movies__button-more">Ещё</button>
                </div>
                <Footer />
            </section>
        </> 
    ) 
}

export default Movies