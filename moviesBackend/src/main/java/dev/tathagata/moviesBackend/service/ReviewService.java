package dev.tathagata.moviesBackend.service;

import dev.tathagata.moviesBackend.entity.Movie;
import dev.tathagata.moviesBackend.entity.Review;
import dev.tathagata.moviesBackend.repository.ReviewRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final MongoTemplate mongoTemplate;

    public ReviewService(ReviewRepository reviewRepository, MongoTemplate mongoTemplate) {
        this.reviewRepository = reviewRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public Review createReview(String reviewBody, String imdbId) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public boolean deleteAllReviews() {
        List<Review> reviews = getAllReviews();
        reviewRepository.deleteAll();

        return !reviews.isEmpty();
    }
}
