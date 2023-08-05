package dev.tathagata.moviesBackend.controller;

import dev.tathagata.moviesBackend.entity.Movie;
import dev.tathagata.moviesBackend.entity.Review;
import dev.tathagata.moviesBackend.service.MovieService;
import dev.tathagata.moviesBackend.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin({"http://localhost:5173/", "http://192.168.29.237:5173"})
public class MyRestController {
    private MovieService movieService;
    private ReviewService reviewService;

    public MyRestController(MovieService movieService, ReviewService reviewService) {
        this.movieService = movieService;
        this.reviewService = reviewService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<List<Movie>>(movieService.allMovies(),
                HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movie>> getMovieByImdbId(@PathVariable("id") String id) {
        return new ResponseEntity<Optional<Movie>>(movieService.movieByImdbId(id),
                HttpStatus.OK);
    }

    @PostMapping("/reviews/")
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(reviewService.createReview(
                payload.get("reviewBody"), payload.get("imdbId")),
                HttpStatus.CREATED);
    }

    @DeleteMapping("/reviews/")
    public ResponseEntity<String> deleteAllReviews() {
        if (reviewService.deleteAllReviews()) {
            return new ResponseEntity<String>("Successfully deleted all reviews", HttpStatus.OK);
        }
        return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
    }
}

