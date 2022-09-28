
import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(string, num) {
        return string?.length > num ? string.substr(0, num - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center",
        }}
        >
            <div className="banner__content">
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__description">
                    <h1>{truncate(`${movie?.overview}`, 150)}</h1>
                </div>
                <div className="banner--fadeBottom" />
            </div>
        </ header >
    )
}

export default Banner