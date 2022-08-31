import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../scss/Card.scss';
interface CardProps {
    icon: IconProp;
    headerText: string;
}
export const Card = (props: CardProps) => {
    return (
        <>
            <div className="card-container text-center">
                <FontAwesomeIcon icon={props.icon} size={'4x'} className="icon-color" />
                <h2 className='pt-2'>{props.headerText}</h2>
                <label className='fw-bold'>Choose from the best-in-range today!</label>
                <div className='pt-3'>
                    <button type="submit" className="btn btn-primary">Contact us</button>
                </div>
            </div>
        </>
    );
}