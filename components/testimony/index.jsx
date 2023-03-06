import React from "react";

function Testimony() {
  return (
    <div className="home-testimony py-5 container-fluid">
      <h3 className="text-center title-text">Testimoni</h3>
      <div className="row row-cols-5 g-4 justify-content-center mt-4">
        <div className="col home-testimony-col">
          <div className="card border-0 home-testimony-card">
            <div className="card-body">
              <p className="card-text home-testimony-text">
                Studionya bersih dan enak, pelayanan juga ramah dan enak diajak
                ngobrol buat konsultasi tema foto 🥰
              </p>
              <div className="row home-testimony-user align-items-center">
                <div className="col">
                  <img
                    src="/assets/testimony/testimony1.png"
                    alt=""
                    className="home-testimony-img rounded-circle"
                  />
                </div>
                <div className="col-auto home-testimony-name">
                  <h6 className="card-title home-testimony-name">
                    Agung Yamaguchi
                  </h6>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col home-testimony-col">
          <div className="card border-0 home-testimony-card">
            <div className="card-body">
              <p className="card-text home-testimony-text">
                Hasil fotonya bagus dan mememuaskan banget. Bintang 5
                pokoknya😍🤩
              </p>
              <div className="row home-testimony-user align-items-center">
                <div className="col">
                  <img
                    src="/assets/testimony/testimony2.jpg"
                    alt=""
                    className="home-testimony-img rounded-circle"
                  />
                </div>
                <div className="col-auto home-testimony-name">
                  <h6 className="card-title home-testimony-name">
                    Kyoto Zumaki
                  </h6>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col home-testimony-col">
          <div className="card border-0 home-testimony-card">
            <div className="card-body">
              <p className="card-text home-testimony-text">
                Good photo studio. I would like to come back again.
              </p>
              <div className="row home-testimony-user align-items-center">
                <div className="col">
                  <img
                    src="/assets/testimony/testimony3.jpg"
                    alt=""
                    className="home-testimony-img rounded-circle"
                  />
                </div>
                <div className="col-auto home-testimony-name">
                  <h6 className="card-title home-testimony-name">
                    Hari Hari Bersamamu
                  </h6>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col home-testimony-col">
          <div className="card border-0 home-testimony-card">
            <div className="card-body">
              <p className="card-text home-testimony-text">
                Good place to take photo
              </p>
              <div className="row home-testimony-user align-items-center">
                <div className="col">
                  <img
                    src="/assets/testimony/testimony4.jpg"
                    alt=""
                    className="home-testimony-img rounded-circle"
                  />
                </div>
                <div className="col-auto home-testimony-name">
                  <h6 className="card-title home-testimony-name">
                    Krisstina Ckrhakinov
                  </h6>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                  <i className="bi-star-fill" style={{ color: "yellow" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
