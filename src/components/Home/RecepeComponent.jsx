import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { CardRecepeComponent } from '../../shared/components/CardRecepe/CardRecepeComponent';

import PolloSudado from '../../assets/img/pollo-sudado.png';
import PolloNaranja from '../../assets/img/pollo-naranja.png';

export const RecepeComponent = () => {

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
            <div id="recetas" className="col-12 d-flex flex-column justify-content-center bg-lightGrey">
                <h1 className="color-title text-center mt-lg-5 mt-md-3 mt-sm-2 mt-1"> Recetas </h1>
                <div className="row">
                    <div className="col-12 card-deck d-flex">
                        {
                            recepies.map((recepe) => (
                                <CardRecepeComponent key={recepe.id} recepe={recepe} onReadMore={onReadMore}/>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
