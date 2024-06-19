import React, { useEffect, useState } from 'react'
import { initialData } from './Home';
import { useParams } from 'react-router-dom';

function View() {
    let {id} = useParams();
    let [selectedMovie, setSelectedMovie] = useState([]);
    let [show, setShow] = useState(false);

    useEffect(()=>{
        async function findMovie(){
            let list = [initialData.find((items)=>items.movieId==id)];
            console.log(list)
            setSelectedMovie(list);
            if(selectedMovie){
                setShow(true);
            }
        }
        findMovie()
    }, [id]);
  return (
    <div className='view-div'>
        <div className=''>
            {show ? 
            <div className='all-movies d-flex flex-row justify-content-center mt-4'>
                {selectedMovie.map((movie)=>(
                    <div className='movie-parent d-flex flex-lg-row flex-column justify-content-around' key={movie.movieId}>
                        <div className='left d-flex flex-column justify-content-center'>
                            <div className='imag-div'>
                                <img src={movie.poster} alt={movie.name} className='selected-img'/>
                                <div className='d-flex flex-wrap mt-3'>
                                    {movie.Genre.map((val)=>(
                                        <span className=' genre m-1'>{val}</span>
                                    ))}
                                </div>
                                <p className='text-white m-1'>Release: {movie.year}</p>
                                </div>
                                
                            </div>
                            <div className='right'>
                                <p className='h3 text-white title mb-4'>{movie.name}
                                    
                                </p>
                                <p className=' plot'>{movie.plot}</p>
                                <p className='plot1'>Director: {movie.Director}</p>
                                <p className='plot1'>Rating: {movie.rating}<i class="fa-regular fa-star star"></i></p>
                                <p className='plot3'>Actors</p>
                                <ul>
                                
                                <div className=''>
                                    {movie.actors.map((actor)=>(
                                        <li className='plot1'>{actor}</li>
                                    ))}
                                    </div>
                                    </ul>
                           </div>
                        </div>
                ))}
                </div>
                
            :<p className='text-white text-center'>Invalid movie ID</p>}
        </div>
    </div>
  )
}

export default View;