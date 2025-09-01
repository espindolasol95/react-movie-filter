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
    
    return(
        <div className="container my-4 ">
            <h1 className="text-center mb-4">MOVIES FILTER</h1>
            <div className="row mb-4">
                <div className="col-md-6">
                    <label className="form-label">Filtra per genere</label>
                    <select className="form-select"

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
                    />
                </div>
                <form className="row g-3 mb-4">
                    <div className="col-md-5">
                        <input type="text" name="title" className="form-control" placeholder="Titolo" /> 
                    </div>
                     <div className="col-md-5">
                     <input type="text" name="genre" className="form-control" placeholder="Genere" />
                    </div>
                    <div className="col-md-2">
                    <button type="submit" className="btn btn-primary ">Aggiungi</button>    
                    </div>
                </form>
            </div>
        </div>
    )
  
}

export default App
