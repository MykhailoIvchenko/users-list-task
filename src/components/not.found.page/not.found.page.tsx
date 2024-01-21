import React from 'react';
import { Link } from "react-router-dom";
import './not.found.page.scss';

const NotFoundPage = () => {
  return (
    <section data-testid='NotFoundPage' className={'NotFoundPage'}>
      <h3 className={'NotFoundPage-Title'}>
        На жаль, такої сторінки не існує
      </h3>

      <img
        src={'/sad-face.svg'}
        className={'NotFoundPage-Image'}
        alt={'Sad face'}
      />

      <Link
        to={'/'}
        className={'NotFoundPage-LinkToMain'}
      >
        На головну
      </Link>
    </section>
  );
};

export default NotFoundPage;
