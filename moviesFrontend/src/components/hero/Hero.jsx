import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Hero.css";
import { Paper } from "@mui/material";
import { FaPlayCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <>
      <div className="movie-carousel-container">
        <Carousel animation="slide" swipe duration={1000}>
          {movies?.map((movie, index) => {
            return (
              <Paper key={index}>
                <div className="movie-card-container">
                  <div
                    className="movie-card"
                    style={{ "--img": `url(${movie.backdrops[0]})` }}
                  >
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt="Movie Poster" />
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                      <div className="movie-buttons-container">
                        <Link
                          to={`/Trailer/${movie.trailerLink.substring(
                            movie.trailerLink.length - 11
                          )}`}
                        >
                          <div className="play-button-icon-container">
                            <FaPlayCircle className="play-button-icon" />
                          </div>
                        </Link>

                        <div className="movie-review-button-container">
                          <Button
                            variant="info"
                            onClick={() => reviews(movie.imdbId)}
                          >
                            Reviews
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
        </Carousel>
      </div>
      <div className="grid">
        {movies.map((movie) => (
          <Card
            style={{ width: "20rem" }}
            key={movie.imdbId}
            className="grid-item"
          >
            <Card.Img variant="top" src={movie.poster} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {movie.title}
              </Card.Title>
              <Button variant="success">Add To Watchlist</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Hero;
