import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { MovieDetails } from "./layout/movieDetail";
import { MovieList } from "./layout/moviesList";

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/movieInfo/:id" Component={MovieDetails} />
          <Route exact path="/movieList" Component={MovieList} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
