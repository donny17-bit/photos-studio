import React from "react";
import Link from "next/link";

function Services() {
  const family = process.env.THUMBNAIL_FAMILY;
  const wedding = process.env.THUMBNAIL_WEDDING;
  const prewedding = process.env.THUMBNAIL_PREWEDDING;
  const engagement = process.env.THUMBNAIL_ENGAGEMENT;
  const new_born = process.env.THUMBNAIL_NEW_BORN;
  const group = process.env.THUMBNAIL_GROUP;
  const graduation = process.env.THUMBNAIL_GRADUATION;
  const maternity = process.env.THUMBNAIL_MATERNITY;

  return (
    <div className="home-services my-5 container">
      <h3 className="text-center title-text">Ghibli Studio</h3>
      <div className="row row-cols-4 g-3 mt-5 p-0 justify-content-center">
        <div className="col mb-2 home-service-col">
          <Link
            href="/galeri/family"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={family}
                className="card-img rounded-0 home-service-img"
                alt="family-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Family
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col mb-2 home-service-col">
          <Link
            href="/galeri/wedding"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={wedding}
                className="card-img rounded-0 home-service-img"
                alt="wedding-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Wedding
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col mb-2 home-service-col">
          <Link
            href="/galeri/prewedding"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={prewedding}
                className="card-img rounded-0 home-service-img"
                alt="prewedding-img "
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Prewedding
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col mb-2 home-service-col">
          <Link
            href="/galeri/engagement"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={engagement}
                alt="engagement-img"
                className="card-img rounded-0 home-service-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Engagement
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col mb-2 home-service-col">
          <Link
            href="/galeri/graduation"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={graduation}
                className="card-img rounded-0 home-service-img"
                alt="graduation-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Graduation
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col mb-2 home-service-col">
          <Link
            href="/galeri/maternity"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={maternity}
                className="card-img rounded-0 home-service-img"
                alt="maternity-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Maternity
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col mb-2 home-service-col">
          <Link
            href="/galeri/new-born"
            className="stretched-link home-card-title"
          >
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={new_born}
                className="card-img rounded-0 home-service-img"
                alt="new-born-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  New Born
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
        <div className="col mb-2 home-service-col">
          <Link href="/galeri/group" className="stretched-link home-card-title">
            <div className="card rounded-0 border-0 overlay-container">
              <img
                src={group}
                className="card-img rounded-0 home-service-img"
                alt="group-img"
              />
              <div className="card-body d-flex align-items-end justify-content-center">
                <h5
                  className="card-title home-service-title"
                  style={{ color: "black" }}
                >
                  Group
                </h5>
              </div>
              <div className="overlay-service"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
