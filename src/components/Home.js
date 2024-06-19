import React, { useEffect, useRef, useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import Search from './Search'
import pizza from "../default/pizza.jpeg";
import nayakan from "../default/nayakan.jpeg";
import soodhuKavvum from "../default/Soodhu kavvum.jpeg";
import master from "../default/master.jpeg";
import anbeSivam from "../default/anbesivam.jpeg";
import inception from "../default/inception.jpeg";
import avator from "../default/avatar.jpeg";
import { useNavigate } from 'react-router-dom';
import Popular from './Popular';
export let initialData = [
    {
        name: "Pizza",
        poster: pizza,
        movieId: "pizza001",
        Genre: ["Horror", "Thriller"],
        Director: "Karthik Subbaraj",
        plot: "Pizza is a Tamil horror thriller about Michael, a pizza delivery boy, and his girlfriend Anu, who loves writing horror stories. Michael's life takes a terrifying turn when he delivers a pizza to a spooky bungalow and gets trapped inside, experiencing ghostly events. The plot twist reveals that these events were staged by Anu and friends to gather material for her novel. However, they realize the house is genuinely haunted, blurring the lines between their setup and actual supernatural occurrences. The movie ends with Michael and Anu surviving, but deeply disturbed by the real presence of the supernatural.",
        year: 2012,
        actors: ["Vijay Sethupathi", "Remya Nambeesan", "Aadukalam Naren", "Karunakaran", "Jayakumar", "Pooja Ramachandran"],
        rating: "8.0"
    },
    {
        name: "Nayakan",
        poster: nayakan,
        movieId: "nayakan002",
        Genre: ["Crime", "Drama"],
        Director: "Mani Ratnam",
        plot: "Nayakan follows the life of Velu Nayakan (Kamal Haasan), a common man who becomes a powerful underworld don in Mumbai. The film explores his transformation from an innocent young boy seeking revenge for his father's death to a feared and respected leader of the city's slums. The story is inspired by the real-life Mumbai don Varadarajan Mudaliar and portrays themes of justice, power, and the impact of violence on personal and family life.",
        year: 1987,
        actors: ["Kamal Haasan", "Sarbani Mukherjee", "Karthika", "Nizhalgal Ravi", "Janagaraj", "Delhi Ganesh"],
        rating: "8.8"
    },
    {
        name: "Soodhu kavvum",
        poster: soodhuKavvum,
        movieId: "soodhuKavvum003",
        Genre: ["Dark Comedy", "Crime Thriller"],
        Director: "Nalan Kumarasamy",
        plot: "Soodhu Kavvum revolves around Das (Vijay Sethupathi), a middle-aged man who starts a kidnapping business along with his friends. Their initially amateurish attempts lead to unexpected consequences and encounters with dangerous criminals, escalating into a chaotic and darkly humorous series of events.",
        year: 2012,
        actors: ["Vijay Sethupathi", "Sanchita Shetty", "Bobby Simha", "Ashok Selvan", "Ramesh Thilak"],
        rating: "8.5"
    },
    {
        name: "Master",
        poster: master,
        movieId: "master004",
        Genre: ["Action", "Thriller"],
        Director: "Lokesh Kanagaraj",
        plot: "Master follows the story of JD (Vijay), a heavy-drinking professor who takes up a teaching position at a juvenile school. He clashes with Bhavani (Vijay Sethupathi), a ruthless gangster who runs an illegal empire using the school's students. The film explores their confrontation, loyalty, and redemption.",
        year: 2021,
        actors: ["Vijay", "Vijay Sethupathi", "Malavika Mohanan", "Andrea Jeremiah", "Arjun Das"],
        rating: "8.0"
    },
    {
        name: "Anbe sivam",
        poster: anbeSivam,
        movieId: "anbe-sivam005",
        Genre: ["Comedy", "Drama"],
        Director: "Sundar C",
        plot: "Anbe Sivam tells the story of Nallasivam (Kamal Haasan), a physically handicapped man with a cheerful outlook on life, who forms an unlikely bond with Anbarasu (Madhavan), a pragmatic and materialistic young man. Their journey together challenges their contrasting beliefs and perspectives on life.",
        year: 2003,
        actors: ["Kamal Haasan", "Madhavan", "Kiripanidhi"],
        rating: "9.0"
    },
    {
        name: "Inception",
        poster: inception,
        movieId: "inception006",
        Genre: ["Science Fiction", "Action", "Thriller"],
        Director: " Christopher Nolan",
        plot: "Inception follows Dom Cobb (Leonardo DiCaprio), a skilled thief who specializes in stealing information by entering the subconscious of his targets through their dreams. Cobb is offered a chance to have his criminal history erased if he can successfully perform the difficult task of inception - planting an idea into someone's mind without them realizing it during a dream.",
        year: 2010,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe", "Cillian Murphy"],
        rating: "9.0"
    },
    {
        name: "Avatar",
        poster: avator,
        movieId: "avatar007",
        Genre: ["Science Fiction", "Action", "Adventure"],
        Director: "James Cameron",
        plot: "Avatar is set in the mid-22nd century on the fictional planet Pandora, where humans are mining a precious mineral called unobtanium. The story follows Jake Sully (Sam Worthington), a paralyzed former Marine who becomes part of the Avatar Program, which allows humans to remotely control genetically engineered Na'vi bodies to interact with the indigenous population. As Jake integrates into the Na'vi community, he faces a moral dilemma between his mission and protecting the planet's inhabitants.",
        year: 2009,
        actors:  ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang", "Michelle Rodriguez", "Giovanni Ribisi"],
        rating: "8.2"
    }
]

function Home({movies, movie, setMovie, searching, setSearching}) {
    let [search, setSearch] = useState("Search")
    let [show, setShow] = useState(true);
    let [searchdiv, setSearchDiv] = useState(false);
    let navigate = useNavigate();
    let [searchedMovie, setSearchedMovie] = useState([]);
    let searchResultsRef = useRef(null);
    // let [moviesList, setMoviesList] = useState([])
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
    useEffect(()=>{
        if(searching){
            setSearchedMovie(searching);
        }
    }, [searchedMovie])

   

    function scrollToSearchResults() {
        if (searchResultsRef.current) {
            searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // function handleSearchMovie(results) {
    //     // console.log("result", results)
    //     setSearchedMovie(results || []);
        
    // }

    function navigateToMovie(id, name){
        navigate(`/${name}/${id}`);
    }

    function navigateToSelectedMovie(id){
        navigate(`/selectedMovie/${id}`);
    }

    function navigateToSeearchedMovie(id){
        navigate(`/search-movie/${id}`);
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

    async function handleSubmit(e){
        e.preventDefault();
        if(movie.trim()){
            getMovie(movie)
        }
    }
    async function getMovie(movie) {
        setSearch("Searching..")
        try {
            let response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=ccb321ea`);
            
            // if (!response.ok) {
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }
            
            // let contentType = response.headers.get('content-type');
            // if (!contentType || !contentType.includes('application/json')) {
            //     throw new Error('Expected JSON response');
            // }
            
            let data = await response.json();
            if(data.Response){
                setSearchDiv(true);
                setSearching(data.Search)
                setSearchedMovie(data.Search)
                console.log(searching)
                console.log(searchedMovie)
                scrollToSearchResults()
            }   
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally{
            setSearch("Search")
        }
    }
    return (
        <div>
            <div className='search-div'>
                <form onSubmit={handleSubmit}>
                    <div className='search d-flex'>
                        <input type='text'
                        value={movie}
                        onChange={(e)=>setMovie(e.target.value)}
                        required
                        placeholder={text}
                        className='search-inp'
                        />
                        <div>
                        <button className='ms-1 bg-danger text-white btn' type='submit'>
                            {search}
                        </button>
                    </div>
                        
                    </div>
                </form>
            </div>
            

            
            {/* <Search 
            movie={movie}
            setMovie={setMovie}
            searchedMovie={searchedMovie}
            setSearchedMovie={setSearchedMovie}
            onSearch={handleSearchMovie}
            /> */}
           <div>
        {searchedMovie.length > 0 && (
          <div className='pt-3 bg-white mt-5'>
            <p className='text-dark fs-4 pop pb-4 ms-2'>Search result</p>
            <div className='initial-movies d-flex flex-wrap justify-content-center align-items-center flex-row'>
            {searchedMovie.map((movie)=>(
                            <div className='mov' key={movie.imdbID}  onClick={()=>navigateToSeearchedMovie(movie.imdbID)}>
                                <div onClick={()=>navigateToSelectedMovie(movie.imdbID)}>
                                    <img src={movie.Poster == "N/A" ? "https://as1.ftcdn.net/v2/jpg/04/75/03/16/1000_F_475031629_kwhewe0Su5S932K1Bzc1FKpTdaIQx6PV.jpg" :movie.Poster} alt={movie.Title}/>
                                    <div className='d-flex justify-content-around flex-wrap flex-column'>
                                    <p className='plot4'>{movie.Title}</p>
                                    <p>Year: {movie.Year}</p>
                                    </div>
                                    </div>
                                </div>
                        ))}
                        </div>
          </div>
        )}
      </div>
      <div id="carouselExampleAutoplaying" class="carousel slide cau" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        
                        <img src={initialData[0].poster} class="d-block w-50 my-img" alt="..."  onClick={()=>navigateToMovie(initialData[0].movieId, initialData[0].name)}/>
                        
                    </div>
                    <div class="carousel-item">
                        <img src={initialData[1].poster} class="d-block w-100 my-img" alt="..." onClick={()=>navigateToMovie(initialData[1].movieId, initialData[1].name)} />
                    </div>
                    <div class="carousel-item">
                        <img src={initialData[2].poster} class="d-block w-100 my-img" alt="..." onClick={()=>navigateToMovie(initialData[2].movieId, initialData[2].name)}/>
                    </div>
                    <div class="carousel-item">
                        <img src={initialData[3].poster} class="d-block w-100 my-img" alt="..."  onClick={()=>navigateToMovie(initialData[3].movieId, initialData[3].name)}/>
                    </div>
                    <div class="carousel-item">
                        <img src={initialData[4].poster} class="d-block w-100 my-img" alt="..." onClick={()=>navigateToMovie(initialData[4].movieId, initialData[4].name)}/>
                    </div>
                    <div class="carousel-item">
                        <img src={initialData[5].poster} class="d-block w-100 my-img" alt="..." onClick={()=>navigateToMovie(initialData[5].movieId, initialData[5].name)}/>
                    </div>
                    <div class="carousel-item">
                        <img src={initialData[6].poster} class="d-block w-100 my-img" alt="..." onClick={()=>navigateToMovie(initialData[6].movieId, initialData[6].name)}/>
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
            
            {show &&
            <div className='popular-movies pt-3 bg-white mt-5'>
                <div className='popular pt-5'>
                    <p className='text-dark fs-4 pop pb-4 ms-2'>Popular movies</p>
                    <div className='initial-movies d-flex flex-wrap justify-content-center align-items-center flex-row'>
                        {movies.map((movie)=>(
                            <div className='mov' key={movie.imdbID} >
                                <div onClick={()=>navigateToSelectedMovie(movie.imdbID)}>
                                    <img src={movie.Poster}/>
                                    <div className='d-flex justify-content-around flex-wrap flex-column'>
                                    <p className='plot4'>{movie.Title}</p>
                                    <p>Year: {movie.Year}</p>
                                    </div>
                                    </div>
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
            }
            
            
            
        </div>
    )
}

export default Home;


{/* <div class="carousel-item active">
      <img src={movies[0].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[1].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[4].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[5].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[6].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[3].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[8].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[2].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[9].Poster} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={movies[7].Poster} class="d-block w-100" alt="..."/>
    </div> */}