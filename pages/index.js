import React, { useEffect } from "react";
import Layout from "../components/layout";
import Carousel from "react-bootstrap/Carousel";
import Services from "../components/services";
import Testimony from "../components/testimony";
import Link from "next/link";
import Faq from "react-faq-component";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const banner = JSON.parse(process.env.BANNER);
  const video = JSON.parse(process.env.VIDEO);

  const config = {
    animate: true,
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };

  const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
    ],
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="home-logo justify-content-center d-flex pb-5">
          <Image src="/assets/logo/logo.png" width={500} height={266} />
        </div>
        <div>
          <Carousel
            slide={false}
            indicators={true}
            prevIcon=""
            nextIcon=""
            interval={5000}
          >
            <Carousel.Item>
              <img
                src={banner[0]}
                className="home-img d-block"
                alt="Studio Jenggala"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={banner[1]}
                className="d-block home-img"
                alt="Studio Jenggala"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={banner[2]}
                className="d-block home-img"
                alt="Studio Jenggala"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <Services />
        <div className="home-why py-5">
          <div className="row justify-content-center d-flex text-center mx-0">
            <div className="col-auto px-5">
              <p className="title-text my-0">Kenapa Pilih Ghibli Studio</p>
            </div>
          </div>
          <div className="container">
            <div className="row row-cols-4 g-3 mx-0 mt-5 justify-content-start">
              <div className="col-md home-why-col">
                <div className="card text-center border-0 home-why-card">
                  <div className="card-body px-2">
                    <img
                      src="/assets/fast-time.png"
                      className="home-why-icon"
                      alt="fast-time"
                    />
                    <h5 className="card-title home-why-title mt-2">
                      Fast Response
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md home-why-col">
                <div className="card text-center border-0 home-why-card">
                  <div className="card-body px-2">
                    <img
                      src="/assets/photographer.png"
                      className="home-why-icon"
                      alt="expert-team"
                    />
                    <h5 className="card-title home-why-title mt-2">
                      Expert Team
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md home-why-col">
                <div className="card text-center border-0 home-why-card">
                  <div className="card-body px-2">
                    <img
                      src="/assets/thumbs-up.png"
                      className="home-why-icon"
                      alt="greate-service"
                    />
                    <h5 className="card-title home-why-title mt-2">
                      Great Service
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md home-why-col">
                <div className="card text-center border-0 home-why-card">
                  <div className="card-body px-2">
                    <img
                      src="/assets/studio.png"
                      className="home-why-icon"
                      alt="studio"
                    />
                    <h5 className="card-title home-why-title mt-2">
                      Profesional Studio
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md home-why-col">
                <div className="card text-center border-0 home-why-card">
                  <div className="card-body px-2">
                    <img
                      src="/assets/stars.png"
                      className="home-why-icon"
                      alt="great-quality"
                    />
                    <h5 className="card-title home-why-title mt-2">
                      Greate Quality
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-cinematic py-5">
          <h3 className="text-center title-text">Video Cinematic</h3>
          <div className="container mt-5">
            <div className="row row-cols-3 justify-content-center d-flex">
              <div className="col-auto">
                <iframe
                  src={video[0]}
                  className="w-100"
                  height="200"
                  allow="autoplay"
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="col-auto">
                <iframe
                  src={video[1]}
                  frameBorder="0"
                  height="200"
                  className="w-100"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <Testimony />
        {/* <div className="my-5 container">
          <h3 className="text-center title-text">FAQ</h3>
          <div className="home-faq justify-content-center d-flex pt-3">
            <Faq
              data={data}
              config={config}
              styles={{
                rowTitleColor: "black",
                rowTitleTextSize: "15px",
                rowContentColor: "rgb(122, 120, 120)",
                rowContentTextSize: "13px",
              }}
            />
          </div>
        </div>
         */}
        <Link href="/kontak">
          <button
            type="button"
            className="btn btn-success floating-btn sticky-bottom position-fixed"
          >
            Hubungi Kami
          </button>
        </Link>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title={"Janggala Studio"}>{page}</Layout>;
};
