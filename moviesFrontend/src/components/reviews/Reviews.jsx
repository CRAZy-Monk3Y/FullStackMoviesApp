import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";

import React, { useEffect, useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/movies/reviews/", {
        reviewBody: rev.value,
        imdbId: movieId,
      });
      let reviewBody = response.data;
      // console.log(reviewBody);
      // const updatedReviews = [...reviews, { body: reviewBody }];

      setReviews((prevReviews) => [{ ...reviewBody }, ...prevReviews]);
      rev.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Image src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a review"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((review) => {
            return (
              <div key={review.id.timestamp}>
                <Row>
                  <Col>{review.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
