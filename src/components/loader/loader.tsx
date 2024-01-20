import React from 'react';
import {Spinner} from "react-bootstrap";
import './loader.scss'

const Loader = () => {
  return (
    <section className={'Loader'}>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </section>
  );
};

export default Loader;
