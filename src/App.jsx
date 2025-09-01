import "bootstrap/dist/css/bootstrap.min.css";
import { useState,useEffect } from 'react'
import MovieList from "./assets/components/MovieList.jsx"
// Dati iniziali
const initialMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
    //stati
     const [movies, setMovies] = useState(initialMovies); //array e funzione per aggiornare la lista dei film
     const [filteredMovies, setFilteredMovies] = useState(initialMovies);//array di film filtrati  e funzione per aggiornare
     const [selectedGenre, setSelectedGenre] = useState("");//genere selezionato dall' utente
     const [searchTerm, setSearchTerm] = useState("");//testo digitato nella barra di ricerxca

     useEffect(()=>{
        const result = movies
        .filter ((movie)=> !selectedGenre || movie.genre === selectedGenre)//se genre e vuoto,passa tutto, altrimenti filtra

        .filter((movie) => !searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase()) // se searchterm e vuoto passa,altrimenti filtra   
     );
     setFilteredMovies(result);//aggiorna lo stato dei film filtrati

     },[movies, selectedGenre, searchTerm]);

     const handleAddMovie = (e) =>{
        e.preventDefault();
        const title = e.target.title.value.trim();
        const genre = e.target.genre.value.trim();
        title && genre && setMovies([...movies, { title, genre }]);
        e.target.reset();

     };


    return(
        <div className="container my-4 ">
            <h1 className="text-center mb-4">MOVIES FILTER</h1>
            <div className="row mb-4">
                <div className="col-md-6">
                    <label className="form-label">Filtra per genere</label>
                    <select className="form-select"
                     onChange={(e) => setSelectedGenre(e.target.value)}

                    >
                     <option value="Fantascienza">Fantascienza</option>
                     <option value="Thriller">Thriller</option>
                     <option value="Romantico">Romantico</option>
                     <option value="Azione">Azione</option>
                    </select>
                </div>
                <div className="col mb-5">
                    <label className="form-label">Cerca per titolo:</label>
                    <input type="text"
                    className="form-control"
                    placeholder="Scrivi un titolo"
                     value={searchTerm}   
                     onChange={(e) => setSearchTerm(e.target.value)} 

                    />
                </div>
                <form onSubmit={handleAddMovie} className="row g-3 mb-4">
                    <div className="col-md-5">
                        <input 
                        type="text" 
                        name="title" 
                        className="form-control" 
                        placeholder="Titolo" 
                       
                        /> 
                    </div>
                     <div className="col-md-5">
                     <input type="text" 
                     name="genre"
                      className="form-control"
                      placeholder="Genere" 
                      />
                    </div>
                    <div className="col-md-2">
                    <button type="submit" className="btn btn-primary ">Aggiungi</button>    
                    </div>
                </form>
                <MovieList movies={filteredMovies} />
            </div>
        </div>
    )
  
}

export default App
