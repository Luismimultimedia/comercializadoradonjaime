import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import photo1 from '../../assets/img/photo1.png';
import photo2 from '../../assets/img/photo2.png';

export const CarouselComponent = ({ onOrder }) => {
    const [carouselImg, setCarouselImg] = useState(
        [
            {
                path: photo1,
                name: 'photo1',
                id: 1
            },
            {
                path: photo2,
                name: 'photo2',
                id: 2
            }
        ]
    );

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel className="carousel-class" onSelect={handleSelect}>
                {
                    carouselImg.map(({ id, path, name }) => (
                        <Carousel.Item interval={8000} key={id}>
                            <img
                                className="d-block w-100"
                                src={path}
                                alt={name}
                            />
                            {   id === 1 &&
                                <div>
                                    <button className="btn-call-action" onClick={onOrder}>¡Haz tú pedido aquí!</button>
                                    <div className="title">
                                        <p className="title1">Más proteína,</p>
                                        <p className="title2">menos grasa.</p>
                                    </div>
                                </div>
                            }
                        </Carousel.Item>
                    ))
                }

            </Carousel>
        </div>
    )
}
