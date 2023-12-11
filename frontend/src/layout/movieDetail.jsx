import React, { useState, useEffect } from "react";
import api from "../api/apiCall";
import { useParams } from "react-router-dom";
import { Navbar } from "./navbar";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch movie data from your API
    const fetchMovieData = async () => {
      try {
        const response = await api.get(`/movies/find/${id}`); // Replace "your_movie_id" with the actual movie ID
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []); // Run this effect only once on component mount

  const [ticketQ, setTicketsQ] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(ticketQ);

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = async (e) => {
    e.preventDefault();
    try {
      let loginUser = localStorage.getItem("login");
      if (loginUser === "true") {
        const res = await api.post("/Booking/create", { ticketQ });
        if (res) {
          setTicketsQ("");
          toast.success(res.data.message);
        } else {
          toast.error(res.err.message);
        }
      } else {
        toast.error("User is not logged in. Cannot save the data.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <section style={{ marginTop: "20px" }}>
        <div className="container mt-4">
          {movieData ? (
            <div className="row">
              <div className="col-md-3">
                <div className="card my-1">
                  <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">{movieData.data.title}</p>
                  </div>
                </div>
                <div className="card my-1">
                  <div className="card-body">
                    <h5 className="card-title">Genre</h5>
                    <p className="card-text">{movieData.data.genre}</p>
                  </div>
                </div>
                <div className="card my-1">
                  <div className="card-body">
                    <h5 className="card-title">Tickets Price</h5>
                    <p className="card-text">Rs: {movieData.data.tickets}</p>
                  </div>
                </div>
                <div className="card my-1">
                  <div className="card-body">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{movieData.data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <img
                  src={movieData.data.photo.url}
                  alt={movieData.data.title}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-2">
                <h2>MovieShow</h2>
                {movieData.data.showtime.map((show) => (
                  <div key={show._id}>
                    <div className="card my-1">
                      {" "}
                      <div className="card-body">
                        <h5 className="card-title">Start time</h5>

                        <p className="card-text">{show.startAt}</p>
                      </div>
                    </div>
                    <div className="card my-1">
                      {" "}
                      <div className="card-body">
                        <h5 className="card-title">Start Date</h5>

                        <p className="card-text">{show.startDate}</p>
                      </div>
                    </div>
                    <div className="card my-1">
                      {" "}
                      <div className="card-body">
                        <h5 className="card-title">End Date</h5>

                        <p className="card-text ">{show.endDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <button className="btn btn-primary rounded btn-sm ">
                {" "}
                Book Now
              </button> */}
              <Button type="primary" onClick={showModal}>
                Book Now
              </Button>
              <Modal
                title="Booking Form"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                // onSubmit={saveData}
              >
                <label className="text-center md-3">Tickets</label>
                <input
                  style={{ margin: "10px" }}
                  type="text"
                  placeholder="Enter Quantity Tickets"
                  required
                  value={ticketQ}
                  onChange={(e) => setTicketsQ(e.target.value)}
                />
              </Modal>
            </div>
          ) : (
            <p>Loading movie data...</p>
          )}
        </div>
      </section>
    </>
  );
};
