import React from 'react';
import imgIntroduction from '../../assets/img/imgIntroduction.jpg';

export const IntroductionComponent = () => {
    return (
        <div className="row">
            <div className="col-12 bg-lightGrey">
                <div className="row d-flex flex-column justify-content-center">
                    <h1 className="color-title text-center mt-lg-5 mt-md-3 mt-sm-2 mt-1"> Comercializadora Don Jaime </h1>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center p-lg-5 p-md-3 p-sm-2 p-1">
                        <img
                            className="img-fluid"
                            height="100!important"
                            src={imgIntroduction}
                            alt="foto pollo"
                        />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center p-lg-5 p-md-3 p-sm-2 p-4">
                        <p className="m-0 p-introduction">
                            "Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
