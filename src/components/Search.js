import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
// import logo from "../images/logo.jpg"; // Uncomment if needed

function Search({movie, setMovie, searchedMovie, setSearchedMovie, onSearch}) {
    let navigate = useNavigate();
    let [search, setSearch] = useState("Search");

    

    async function handleSubmit(e) {
        e.preventDefault();
        if (movie.trim()) {
            getMovie(movie);
        }
    }
    async function getMovie(movie) {
        setSearch("Searching..")
        try {
            let response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=ccb321ea`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            let contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Expected JSON response');
            }
            
            let data = await response.json();
            onSearch(data.Search || []);
            // setSearchedMovie(data.Search)
            
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally{
            setSearch("Search")
        }
    }
    const [text] = useTypewriter({
        words: [
            'Search favorite movies....',
            'Find movies..',
            'Discover new films',
            'Browse top-rated movies',
            'Explore genres'
        ],
        loop: 0,
        onLoopDone: () => console.log(`Typewriter loop completed after 3 runs.`)
    });

    return (
        <div className='search-div'>
            <form onSubmit={handleSubmit}>
                <div className='search d-flex'>
                    {/* <img src={logo} className='img'/> */}
                    <input
                        type='text'
                        placeholder={text}
                        className='search-inp'
                        required
                        value={movie}
                        onChange={(e) => {
                            setMovie(e.target.value);
                            if (e.target.value.trim() === '') {
                                onSearch([]);
                            }
                        }}
                    />

                    <div>
                        <button className='ms-1 bg-danger text-white btn' type='submit'>
                            {search}
                        </button>
                    </div>
                </div>
            </form>
           
        </div>
    );
}

export default Search;
