import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
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
    return(
        <div className="container">
            <h1 className="text-center mb-4">MOVIES FILTER</h1>
            <div className="row mb-4">
                <div className="col-md-6">
                    <label className="form-label">Filtra per genere</label>
                    <select className="form-select"
                     value={selectedGenre}
                     onChange={(e) => setSelectedGenre(e.target.value)}
                   
                    >
                     <option value="Fantascienza">Fantascienza</option>
                     <option value="Thriller">Thriller</option>
                     <option value="Romantico">Romantico</option>
                     <option value="Azione">Azione</option>
                    </select>


                </div>
            </div>
        </div>
    )
  
}

export default App
