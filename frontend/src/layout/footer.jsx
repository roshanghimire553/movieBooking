import React from "react";

export const Footer = () => {
  return (
    <div>
      <section style={{ marginBottom: "-40px" }}>
        <footer className="text-center text-lg-start bg-dark text-white">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <span to="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span to="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </span>
              <span to="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </span>
              <span to="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </span>
              <span to="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </span>
              <span to="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </span>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Movies show
                  </h6>
                  <p>Here you can book tickets for the available movies</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Movies</h6>
                  <p>
                    <span to="#!" className="text-reset">
                      Hindi
                    </span>
                  </p>
                  <p>
                    <span to="#!" className="text-reset">
                      Nepali
                    </span>
                  </p>
                  <p>
                    <span to="#!" className="text-reset">
                      English
                    </span>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <span to="#!" className="text-reset">
                      Ratings
                    </span>
                  </p>
                  <p>
                    <span to="#!" className="text-reset">
                      Movie List
                    </span>
                  </p>

                  <p>
                    <span to="#!" className="text-reset">
                      Help
                    </span>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Kathmandu,Nepal
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    roshanghimire553@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> 9840284945
                  </p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </section>
    </div>
  );
};
