import React from 'react';
import { Card } from 'react-bootstrap';

export const CardProductComponent = ({product:{urlPhoto, title, description}, onOrder}) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center p-lg-5 p-md-3 p-sm-2 p-1">
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
}
