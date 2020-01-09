import React from 'react';
import { InfoCard } from './InfoCard';

export const CardGrid = props => {
    const { selected } = props;

    return (
        <div className="row justify-content-center">
            {selected.map(location => (
                <div className="col-md-4">
                    <InfoCard location={location} />
                </div>
            ))}
        </div>
    )
}