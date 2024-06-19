import React, { useEffect, useState } from 'react'

function Popular({movies, setMovies}) {
    
    let defaultList = [
        "The Shawshank Redemption",
        "The Godfather",
        "The Dark Knight",
        "Pulp Fiction",
        "The Lord of the Rings: The Return of the King",
        "Forrest Gump",
        "Inception",
        "Fight Club",
        "The Matrix",
        "The Empire Strikes Back",
        "The Lord of the Rings: The Fellowship of the Ring",
        "The Good, the Bad and the Ugly",
        "The Lord of the Rings: The Two Towers",
        "Star Wars",
        "Interstellar",
        "Parasite",
        "The Silence of the Lambs",
        "Saving Private Ryan",
        "Schindler's List",
        "Avengers: Endgame"
    ];;
    let apiKey = "ccb321ea";
    useEffect(() => {
        async function getMovies() {
            try {
                let request = defaultList.map(async (value) => {

                    let movie = await fetch(`https://www.omdbapi.com/?t=${value}&apikey=${apiKey}`)
                    if (!movie.ok) {
                        throw new Error(`HTTP error! Status: ${movie.status}`);
                    }
                    let data = await movie.json();
                    return data;



                })
                let results = await Promise.all(request);
                setMovies(results);
            }

            catch (error) {
                console.log(error);
            }
        }

        getMovies()
    }, [apiKey]);
  return (
    <div></div>
  )
}

export default Popular;