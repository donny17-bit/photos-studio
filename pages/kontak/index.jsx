import React from "react";
import Layout from "../../components/layout/kontak";

export default function Kontak() {
  const whatsapp = () => {
    window.open(`https://wa.me/${process.env.WHATSAPP}`);
  };

  const instagramMain = () => {
    window.open("https://www.instagram.com/ghibli.movies/");
  };

  const instagramWedding = () => {
    window.open("https://twitter.com/GhibliUSA");
  };

  return (
    <>
      <div className="container-fluid justify-content-center align-items-center d-flex title-banner text-center">
        <h3 className="title-text">HUBUNGI KAMI</h3>
      </div>
      <div className="container py-2">
        <div className="row pt-4">
          <div className="col-md text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12961.393558006812!2d139.55675672552024!3d35.69304346009256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ee34e5038c2d%3A0x4de155903f849205!2sGhibli%20Museum!5e0!3m2!1sid!2sid!4v1678085299839!5m2!1sid!2sid"
              className="kontak-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col pt-4">
            <h6 className="kontak-title">Alamat Lengkap</h6>
            <p className="kontak-text">
              1 Chome-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013, Jepang
            </p>
            <h6 className="kontak-title pt-2">Whatsapp</h6>
            <button
              onClick={whatsapp}
              type="button"
              className="btn btn-success kontak-text w-100"
            >
              <i className="bi-whatsapp"></i> +{process.env.WHATSAPP}
            </button>
            <h6 className="kontak-title pt-4">Social Media</h6>
            <button
              onClick={instagramMain}
              type="button"
              className="btn btn-success kontak-text w-100"
            >
              <i className="bi-instagram"></i> @ghibli.movies
            </button>
            <button
              onClick={instagramWedding}
              type="button"
              className="btn btn-success kontak-text w-100 my-3"
            >
              <i className="bi-twitter"></i> @GhibliUSA
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Kontak.getLayout = function getLayout(page) {
  return <Layout title={"Kontak | Ghibli Studio"}>{page}</Layout>;
};
