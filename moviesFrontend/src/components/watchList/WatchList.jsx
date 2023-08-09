import React from "react";
import { Button, Card } from "react-bootstrap";

const WatchList = ({ watchList, setWatchList }) => {
    const handleMovieAdding =() => {
        
    }
    
  return (
    <div>
      <div>
        <Button variant="outline-info" className="me-2" onClick={() => handleMovieAdding}>
          Add new Movie
        </Button>
      </div>
      <div>
        {watchList.map((movie) => (
          <Card style={{ width: "18rem" }} key={movie.imdbId}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
