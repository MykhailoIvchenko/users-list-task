import React from 'react';
import {Card} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PersonData: React.FC<PersonDataProps> = ({
  addClasses ,
  name,
  username,
  email,
}) => {
  return (
    <section data-testid='PersonData' className={`PersonData ${addClasses}`}>
      <Card>
        <Card.Img variant="top" src={'/personal-info.webp'} />
        <Card.Body>
          <Card.Title>Основна інформація</Card.Title>
          <Card.Text>
            <Row>
              <Col md={3} className={'FieldName'}>
                Ім'я
              </Col>

              <Col md={9}>
                {name}
              </Col>
            </Row>

            <Row>
              <Col md={3} className={'FieldName'}>
                Нікнейм
              </Col>

              <Col md={9}>
                {username}
              </Col>
            </Row>

            <Row>
              <Col  md={3} className={'FieldName'}>
                Email
              </Col>

              <Col md={9}>
                {email}
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default PersonData;
