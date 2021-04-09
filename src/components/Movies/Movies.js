import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies(props) {

    return(
        <>
            <section>
                <Header loggedIn/>
                {/* <SearchForm onSubmit = {props.onSubmit} onHandleInputChange = {props.onHandleInputChange} onChange={props.onChange} value={props.value}/> */}
                <SearchForm onSubmit = {props.onSubmit} />
                <MoviesCardList movies={props.movies}/>
                <div className="movies__button-more-container">
                    <button type="button" className="movies__button-more">Ещё</button>
                </div>
                <Footer />
            </section>
        </> 
    ) 
}

export default Movies