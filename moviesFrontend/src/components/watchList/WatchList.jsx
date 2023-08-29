import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./WatchList.css";
import { removeMovie } from "../../redux/watchListSlice";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const WatchList = () => {
  const moviesWatchList = useSelector((store) => store.moviesWatchList);
  const dispatch = useDispatch();

  if (moviesWatchList?.movies.length === 0) {
    return <h1>No Movies Found</h1>;
  }

  return (
    <div>
      <div className="watchlist__container">
        {moviesWatchList?.movies.map((movie) => (
          <Card style={{ width: "20rem" }} key={movie.imdbId}>
            <Card.Img variant="top" src={movie.poster} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              <div className="navigate">
                <Link
                  to={`/Trailer/${movie.trailerLink.substring(
                    movie.trailerLink.length - 11
                  )}`}
                >
                  <div className="play-button-icon-container">
                    <FaPlayCircle className="play-button-icon" />
                  </div>
                </Link>
                <Button
                  variant="success"
                  onClick={() => dispatch(removeMovie({ id: movie.imdbId }))}
                >
                  <AiFillDelete />
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
