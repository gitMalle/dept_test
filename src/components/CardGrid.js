import React from 'react';
import { InfoCard } from './InfoCard';

export const CardGrid = props => {
    const { selected, onRemove } = props;

    return (
        <div className="row justify-content-center">
            {selected.map(location => (
                <div key={location.id} className="col-md-4">
                    <InfoCard location={location} onRemove={onRemove} />
                </div>
            ))}
        </div>
    )
}