import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <div className="row m-0 justify-content-center d-flex">
            <div className="col-md-3 px-3 mb-3" style={{ color: "white" }}>
              <h3 className="footer-title">GHIBLI STUDIO</h3>
              <p className="footer-content mt-4">
                1 Chome-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013, Jepang
              </p>
            </div>
            <div className="col-md-3 px-3">
              <h3 style={{ color: "white" }} className="footer-title">
                MORE INFO
              </h3>
              <div className="row footer-content mt-4">
                <p className="border-0" style={{ color: "white" }}>
                  <i className="bi-twitter"></i> @GhibliUSA
                </p>
              </div>
              <div className="row footer-content">
                <p style={{ color: "white" }}>
                  <i className="bi-instagram"></i> @ghibli.movies
                </p>
              </div>
              <div className="row footer-whatsapp">
                <p style={{ color: "white" }}>
                  <i className="bi-whatsapp"></i> +{process.env.WHATSAPP}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
