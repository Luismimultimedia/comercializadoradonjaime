import React from 'react';
import { Card } from 'react-bootstrap';

export const CardRecepeComponent = ({recepe:{urlPhoto, title, description}, onReadMore}) => {
    return (
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center pt-lg-5 pt-md-3 pt-sm-2 pt-1 pb-lg-5 pb-md-3 pb-sm-2 pb-1 pr-2 pl-2">
        <Card className="border-card">
            <Card.Img variant="top" src={urlPhoto} className="p-5" />
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text className="text-left">{description}</Card.Text>
                <div className="d-flex justify-content-end">
                    <p className="read-more" onClick={onReadMore}>...Leer más</p>
                </div>
            </Card.Body>
        </Card>
    </div>
    )
}
