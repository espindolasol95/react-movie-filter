import React from 'react'

const MovieList = ({ movies }) => {
  return (
    <>
     {/*messaggio della lista vuota*/}
    {movies.length === 0 && <p className="text-muted">Nessun film trovato.</p>}
    {/* Lista dei film */}
      {movies.length > 0 && (
        <ul className="list-group">
          {movies.map((movie, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>{movie.title}</strong>
              <span className="badge bg-secondary">{movie.genre}</span>
            </li>
          ))}
        </ul>
      )}
      
    </>
  );
}

export default MovieList;
