import { useEffect, useState } from "react";
import { Route, Routes, json } from "react-router-dom";
import api from "./api/axiosConfig";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Layout from "./components/Layout";
import Reviews from "./components/reviews/Reviews";
import { Trailer } from "./components/trailer/Trailer";
import Footer from "./components/footer/Footer";
import WatchList from "./components/watchList/WatchList";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies/");
      // console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
    getWatchListData();
  }, []);

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
      // console.log(singleMovie.reviewIds);
    } catch (error) {
      console.error(error);
    }
  };
  const getWatchListData = () => {
    if (localStorage.getItem("movieWatchList")) {
      let movieWatchList =
        JSON.parse(localStorage.getItem("movieWatchList")) || [];
      setWatchList(movieWatchList);
    } else {
      localStorage.setItem("movieWatchList", JSON.stringify([]));
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route
            path="/watchList"
            element={
              <WatchList watchList={watchList} setWatchList={setWatchList} />
            }
          ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
