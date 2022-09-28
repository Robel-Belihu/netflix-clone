import React from "react";
import Banner from "../Banner";
import "./HomePage.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomePage() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Docmentaries" fetchUrl={requests.fetchDocmentaries} />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        </div>
    );
}

export default HomePage