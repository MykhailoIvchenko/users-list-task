import React from 'react';
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CompanyData: React.FC<CompanyDataProps> = ({
  addClasses,
  name,
  catchPhrase,
  services,
}) => {
  return (
    <section data-testid='CompanyData' className={`CompanyData ${addClasses}`}>
      <Card>
        <Card.Img variant="top" src={'/company.webp'} alt={'company'}/>

        <Card.Body>
          <Card.Title>Інформація про компанію</Card.Title>

          <Card.Text>
            <Row>
              <Col md={3} className={'FieldName'}>
                Назва
              </Col>

              <Col md={9}>
                {name}
              </Col>
            </Row>

            <Row>
              <Col md={3}  className={'FieldName'}>
                Девіз
              </Col>

              <Col md={9}>
                {catchPhrase}
              </Col>
            </Row>

            <Row>
              <Col md={3}  className={'FieldName'}>
                Послуги
              </Col>

              <Col md={9}>
                {services}
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CompanyData;
