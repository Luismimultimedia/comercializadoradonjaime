import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import Muslo from '../../assets/img/muslo.png';
import Pechuga from '../../assets/img/pechuga.png';
import Contramuslo from '../../assets/img/contramuslo.png';
import Ala from '../../assets/img/ala.png';
import Pollo from '../../assets/img/pollo.png'

export const ProductComponent = ({onOrder}) => {
    const [products, setProducts] = useState(
        [
            {
                id: 1,
                title: 'Muslo',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: Muslo,
            },
            {
                id: 2,
                title: 'Pechuga',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: Pechuga,
            },
            {
                id: 3,
                title: 'Contramuslo',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: Contramuslo,
            },
            {
                id: 4,
                title: 'Alas',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: Ala,
            },
            {
                id: 5,
                title: 'Pernil',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: Ala,
            },
            {
                id: 6,
                title: 'Pollo Entero',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: Pollo,
            },
            {
                id: 7,
                title: 'Alas',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: Ala,
            }
        ]
    );

    return (
        <div className="col-12 d-flex flex-column justify-content-center">
            <h1 className="color-title text-center mt-lg-5 mt-md-3 mt-sm-2 mt-1 mb-lg-5 mb-md-3 mb-sm-2 mb-1"> Nuestros Productos </h1>
            <div className="row">
                <div className="col-12 card-deck d-flex">
                    {
                        products.map(
                            ({ id, title, description, urlPhoto }) => (
                                <div key={id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center p-lg-5 p-md-3 p-sm-2 p-1">
                                    <Card className="border-card">
                                        <Card.Img variant="top" src={urlPhoto} className="p-5" />
                                        <Card.Body>
                                            <Card.Title className="text-center">{title}</Card.Title>
                                            <Card.Text className="text-left">{description}</Card.Text>
                                            <div className="d-flex justify-content-center">
                                                <button className="btn-buy-product" onClick={onOrder}>Comprar</button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}
