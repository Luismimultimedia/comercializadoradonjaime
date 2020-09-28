import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

import PolloSudado from '../../assets/img/pollo-sudado.png';
import PolloNaranja from '../../assets/img/pollo-naranja.png';

export const RecepiComponent = () => {

    const History = useHistory();

    const [recepies, setRecepies] = useState(
        [
            {
                id: 1,
                title: 'Pollo Sudado',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: PolloSudado,
            },
            {
                id: 2,
                title: 'Pollo a la Naranja',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
                urlPhoto: PolloNaranja,
            }
        ]
    );

    const onReadMore = () => {
        History.push("/Products");
    }

    return (
        <div>
            <div className="col-12 d-flex flex-column justify-content-center bg-lightGrey">
                <h1 className="color-title text-center mt-lg-5 mt-md-3 mt-sm-2 mt-1 mb-lg-5 mb-md-3 mb-sm-2 mb-1"> Recetas </h1>
                <div className="row">
                    <div className="col-12 card-deck d-flex">
                        {
                            recepies.map(({id, title, description, urlPhoto}) => (
                                <div key={id} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center p-lg-5 p-md-3 p-sm-2 p-1">
                                    <Card className="border-card">
                                        <Card.Img variant="top" src={urlPhoto} className="p-5" />
                                        <Card.Body>
                                            <Card.Title className="text-center">{title}</Card.Title>
                                            <Card.Text className="text-left">{description}</Card.Text>
                                            <div className="d-flex justify-content-end">
                                                <Link onClick={onReadMore}>...Leer más</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
