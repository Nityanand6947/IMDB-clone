import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import Home from "../Pages/Home/home";
import Movie from "../Pages/Home/Moviedetails/movie";
import MovieList from "./Movielist/movielist";


function App() {
    return (
      <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
      </div>
    );
  }
  
  export default App;
  