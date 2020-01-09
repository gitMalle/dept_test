import React, { useState, useEffect } from "react";
import axios from "axios";
import close_icon from '../assets/close.svg';
import "../styles/InfoCard.css";

export const InfoCard = props => {
  const { location, onRemove } = props;
  const [measurements, setMeasurements] = useState([]);

  // fetch measurements
  useEffect(() => {
    const fetchMeasurements = async () => {
      const res = await axios.get(
        "https://api.openaq.org/v1/latest?location=" + location.location
      );
      setMeasurements(res.data.results[0].measurements);
    };
    fetchMeasurements();
  }, []);

  const getTime = (timestamp) => {
    // @ts-ignore
    const seconds = Math.abs((new Date() - new Date(timestamp)) / 1000);

    const y = Math.floor(seconds / (3600 * 24 * 365));
    if (y > 0) { return y === 1 ? 'a year ago' : y + ' years ago' }
    const w = Math.floor(seconds / (3600 * 24 * 7));
    if (w > 0) { return w === 1 ? 'a week ago' : w + ' weeks ago' }
    const d = Math.floor(seconds / (3600 * 24));
    if (d > 0) { return d === 1 ? 'a day ago' : d + ' days ago' }
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    if (h > 0) { return h === 1 ? 'an hour ago' : h + ' hours ago' }
    const m = Math.floor(seconds % 3600 / 60);
    if (m > 0) { return m === 1 ? 'a minute ago' : m + ' minutes ago' }

    return seconds + 'seconds ago';
}

  return (
    <div className="info-card">
      <p className="text-uppercase">UPDATED {getTime(location.lastUpdated)}</p>
      <h5 className="info-card-header font-weight-bold my-2">{location.location}</h5>
      <p>in {location.city}, United Kingdom</p>
      <p>
        Values:{" "}
        {measurements.map((measurement, index) => (
          <span key={index} className="text-uppercase">
            {measurement.parameter}: {measurement.value}
            {index + 1 < measurements.length && ", "}
          </span>
        ))}
      </p>
      <img src={close_icon} className="close-icon" onClick={() => onRemove(location)} />
    </div>
  );
};
