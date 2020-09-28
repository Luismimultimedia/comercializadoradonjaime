import React, { useState } from 'react';
import { CarouselComponent } from '../../components/Home/CarouselComponent'
import { IntroductionComponent } from '../../components/Home/IntroductionComponent';
import { ProductComponent } from '../../components/Home/ProductComponent';
import { RecepiComponent } from '../../components/Home/RecepiComponent';

export const HomeScreen = () => {

    const [whatsappContact, setWhatsappContact] = useState({
        cellphone: '573054513737',
        message: 'Este mensaje fue enviado desde la pagina de comercializadora don jaime'
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
            <IntroductionComponent />
            <ProductComponent onOrder={openWhatsapp} />
            <RecepiComponent />
        </div>
    )
}
