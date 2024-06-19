import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function SearchedPage({searching}) {
    let {id} = useParams();
    console.log(id)
    let [selectedMovie, setSelectedMovie] = useState(null);
    let [show, setShow] = useState(true);
    useEffect(()=>{
        async function findMovie(){
            let list = searching.find((items)=>items.imdbID==id);;
            setSelectedMovie(list);
            console.log(list);
            // setShow(!list);
        }
        findMovie()
    }, [id, searching]);
  return (
    <div className='view-div'>
        
      <div>
        {show ? (
          selectedMovie ? (
            <div className='all-movies d-flex flex-row justify-content-center mt-4'>
                
              <div className='movie-parent d-flex flex-lg-row flex-column justify-content-around' key={selectedMovie.imdbID}>
                
                <div className='left d-flex flex-column justify-content-center'>
                  <div className='imag-div'>
                    <img src={selectedMovie.Poster} className='selected-img' alt={selectedMovie.Title}/>
                    <p className='plot1'>Genre: {selectedMovie.Genre}</p>
                    <p className='text-white m-1'>Release: {selectedMovie.Year}</p>
                  </div>
                </div>
                <div className='right'>
                  <p className='h3 text-white title mb-4'>{selectedMovie.Title}</p>
                  <p className='plot'>{selectedMovie.Plot ? selectedMovie.Plot:"NA"}</p>
                  <p className='plot1'>Director: {selectedMovie.Director ? selectedMovie.Director:"NA"}</p>
                  <p className='plot1'>
                    Rating:
                    {Array.isArray(selectedMovie.Ratings) ? (
                      selectedMovie.Ratings.map((rate, index) => (
                        <p key={index}>{rate.Source}: {rate.Value}<i className="fa-regular fa-star star"></i></p>
                      ))
                    ) : (
                      <p>NA</p>
                    )}
                  </p>
                  <p className='plot3'>Actors</p>
                  <div className=''>
                    <p className='plot1 fs-5'>{selectedMovie.Actors ?selectedMovie.Actors :"NA"}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div><p className='text-white text-center'></p></div>
          )
        ) : (
          <div><p className='text-white text-center'>Invalid movie ID</p></div>
        )}
      </div>
    </div>
  )
}

export default SearchedPage;