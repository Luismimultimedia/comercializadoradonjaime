import React, { useState } from 'react';
import { CarouselComponent } from '../../components/Home/CarouselComponent'

export const HomeScreen = () => {

    const [whatsappContact, setWhatsappContact] = useState({
        cellphone: '3054513737',
        message: 'Este mensaje fue enviado desde comercializadora don jaime'
    })

    const openWhatsapp = () => {
        return window.open(
            `https://api.whatsapp.com/send?phone=+${whatsappContact.cellphone}&text=%20${whatsappContact.message}`,
            '_blank'
        );
    };

    return (
        <div>
            <CarouselComponent onOrder={openWhatsapp} />
        </div>
    )
}
