import React from 'react';

import './ValoCard.css';

const ValoCard = ({ event }) => {
  let date = new Date(event?.date);
  date = date.toLocaleDateString('en-IN');
  return (
    <div className="mb-5 z-4">
      <div class="effect-card gaming-card">
        <div class="status-report">
          <p>{date}</p>
        </div>
        <div class="card-content">
          <p class="player-name">
            {' '}
            <span>GDCMEC</span>
          </p>
          <h2>{event?.title}</h2>
          <p class="player-role">
            {event?.venue}
            <span>Hall</span>
          </p>
        </div>
        <div class="card-footer">
          {/* <p className="font-black text-xl tracking-wide text-black">{date}</p> */}
          <p className="text-sm px-5 font-semibold text-black ">{event?.detail}</p>
          <button class="btn">
            <span class="btn__inner">
              <span class="btn__slide"></span>
              <span class="btn__content">REGISTER</span>
            </span>
          </button>
        </div>
        <div class="background-image">
          <img src={event?.image} />
        </div>
      </div>
    </div>
  );
};

export default ValoCard;



