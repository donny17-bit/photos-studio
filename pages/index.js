import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Carousel from "react-bootstrap/Carousel";
import Services from "../components/services";
import Testimony from "../components/testimony";
import Link from "next/link";
import Faq from "react-faq-component";

export default function Home() {
  const config = {
    animate: true,
    // arrowIcon: "V",
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
    <div className="container-fluid p-0">
      <div className="home-logo">
        {/* <Image
          src="/assets/logo.jpg"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        /> */}
        <h5 className="home-logo-text text-start p-3">
          JANGGALA <br /> STUDIO.co
        </h5>
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
              src="/assets/bg-1.jpg"
              className="home-img d-block"
              alt="Studio Jenggala"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/assets/bg-2.jpg"
              className="d-block home-img"
              alt="Studio Jenggala"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/assets/bg-3.jpg"
              className="d-block home-img"
              alt="Studio Jenggala"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Services />
      <div className="home-why py-5">
        <h3 className="text-center title-text" style={{ color: "black" }}>
          Kenapa Pilih Janggala Studio
        </h3>
        <div className="container">
          <div className="row row-cols-3 mx-0 mt-5 justify-content-center">
            <div className="col home-why-col">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/fast-time.png"
                    className="home-why-icon"
                    alt="fast-time"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Fast Response
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/photographer.png"
                    className="home-why-icon"
                    alt="expert-team"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Expert Team
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/thumbs-up.png"
                    className="home-why-icon"
                    alt="greate-service"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Great Service
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col mt-3">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/studio.png"
                    className="home-why-icon"
                    alt="studio"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Profesional Studio
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col home-why-col mt-3">
              <div className="card text-center border-0 home-why-card">
                <div className="card-body">
                  <img
                    src="/assets/stars.png"
                    className="home-why-icon"
                    alt="great-quality"
                  />
                  <h5 className="card-title home-why-title mt-2">
                    Greate Quality
                  </h5>
                  <p className="card-text mt-4 home-why-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
                src="https://www.youtube.com/embed/YmfUJpiJ1kM"
                frameBorder="0"
                height="200"
                className="w-100"
              ></iframe>
            </div>
            <div className="col-auto">
              <iframe
                src="https://www.youtube.com/embed/YmfUJpiJ1kM"
                frameBorder="0"
                height="200"
                className="w-100"
              ></iframe>
            </div>
            <div className="col-auto">
              <iframe
                src="https://www.youtube.com/embed/YmfUJpiJ1kM"
                frameBorder="0"
                height="200"
                className="w-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Testimony />
      <div className="my-5 container">
        <h3 className="text-center">FAQ</h3>
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
      <Link href="/kontak">
        <button
          type="button"
          className="btn btn-success floating-btn sticky-bottom position-fixed"
        >
          Hubungi Kami
        </button>
      </Link>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout title={"Janggala Studio"}>{page}</Layout>;
};
