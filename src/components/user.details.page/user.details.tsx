import React from 'react';
import {useAppSelector} from "../../redux/hooks";
import {selectUser} from "../../redux/slices/userSlice";
import NotFoundPage from "../not.found.page/not.found.page";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './user.details.scss';
import PersonData from "./person.data";
import ContactsData from "./contacts.data";
import CompanyData from "./company.data";

const UserDetails: React.FC = () => {
  const selectedUser = useAppSelector(selectUser);

  return (
    <>
      {selectedUser?.id ?
        <section data-testid='UserDetails' className={'UserDetails'}>
          <h3 data-testid='UserDetails-Title' className={'UserDetails-Title'}>
            {selectedUser.name}
          </h3>

          <div className={'UserDetails-Content'}>
            <Row>
              <Col md={4} >
                <PersonData
                  addClasses={'UserDetails-Card'}
                  name={selectedUser.name}
                  username={selectedUser.username}
                  email={selectedUser.email}
                />
              </Col>

              <Col md={4} >
                <ContactsData
                  addClasses={'UserDetails-Card'}
                  street={selectedUser.address.street}
                  suite={selectedUser.address.suite}
                  city={selectedUser.address.city}
                  zipcode={selectedUser.address.zipcode}
                  phone={selectedUser.phone}
                  website={selectedUser.website}
                />
              </Col>

              <Col md={4} >
                <CompanyData
                  addClasses={'UserDetails-Card'}
                  name={selectedUser.company.name}
                  catchPhrase={selectedUser.company.catchPhrase}
                  services={selectedUser.company.bs}
                />
              </Col>
            </Row>
          </div>
        </section>
        :
        <NotFoundPage />
      }
    </>
  );
};

export default UserDetails;
