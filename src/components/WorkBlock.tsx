import React from 'react';

export default function WorkBlock({ img, url }: any) {
  return (
    <div className="works__block ">
      <img src={img} />
      <div className="block-content ">
        <a className="works__link" href={url}>
          {url}
        </a>
        <a className="works__button" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
}
