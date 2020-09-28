import React from "react";
import Map from "../../../assets/img/map.png"

export const ContactComponent = () => {
  return (
    <div id="contactenos" className="col-12 d-flex flex-column justify-content-center">
      <h1 className="color-title text-center mt-lg-5 mt-md-3 mt-sm-2 mt-1">
        Nuestros Productos
      </h1>
      <div className="row row-eq-height p-lg-5 p-md-3 p-sm-2 p-1">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img className="img-fluid" src={Map} alt="Ubicación de comercializadora don jaime"></img>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-start">
            <p className="contact-info m-0">Cl. 52 Nte 4 Local 5 La Flora</p>
            <p className="contact-info m-0">305 4513737</p>
        </div>
      </div>
    </div>
  );
};
