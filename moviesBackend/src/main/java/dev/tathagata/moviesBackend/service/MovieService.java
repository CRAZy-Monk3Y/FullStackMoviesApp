package dev.tathagata.moviesBackend.service;

import dev.tathagata.moviesBackend.entity.Movie;
import dev.tathagata.moviesBackend.repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    private MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> movieByImdbId(String id) {
        return movieRepository.findMovieByImdbId(id);
    }
}
