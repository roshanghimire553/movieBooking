import React, { useEffect, useState } from "react";
import api from "../api/apiCall";
import "./card.css";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const MovieList = () => {
  const [ListMovies, setMovies] = useState();

  const fetchMovies = async () => {
    try {
      const res = await api.get("/movies/find");
      if (res) {
        setMovies(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <section style={{ marginTop: "20px" }}>
        <div>
          <div className="container">
            <div className="text-center">
              <h2>Movies List</h2>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              {ListMovies?.map((item) => (
                <div key={item._id} className="col mb-3">
                  <div className="card h-100">
                    <img
                      src={item.photo.url}
                      className="card-img-top"
                      alt="Movie Poster"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        Description: {item.description}
                      </p>
                      <p className="card-text">Genre: {item.genre}</p>
                      <Link
                        to={`/movieInfo/${item._id}`}
                        className="btn btn-success"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
