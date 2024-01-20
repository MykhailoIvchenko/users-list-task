import React from 'react';
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {addressService} from "../../services/addressService";

const ContactsData: React.FC<ContactsDataProps> = ({
  addClasses,
  street,
  suite,
  city,
  zipcode,
  phone,
  website,
}) => {
  return (
    <section className={`ContactsData ${addClasses}`}>
      <Card>
        <Card.Img variant="top" src={'/compass.webp'} />
        <Card.Body>
          <Card.Title>Контактна інформація</Card.Title>

          <Card.Text>
            <Row>
              <Col md={3} className={'FieldName'}>
                Адреса
              </Col>

              <Col md={9}>
                {addressService.getAddressString(street, suite, city, zipcode)}
              </Col>
            </Row>

            <Row>
              <Col md={3}  className={'FieldName'}>
                Телефон
              </Col>

              <Col md={9}>
                {phone}
              </Col>
            </Row>

            <Row>
              <Col md={3}  className={'FieldName'}>
                Вебсайт
              </Col>

              <Col md={9}>
                {website}
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default ContactsData;
