import React from 'react';
import UsersList from "../users.list/users.list";
import Container from 'react-bootstrap/Container';
import './main.page.scss';


const MainPage: React.FC = () => {
  return (
    <section data-testid='MainPage' className={'MainPage'}>
      <Container>
        <h2 className={'MainPage-Title'}>Користувачі</h2>

        <UsersList />
      </Container>
    </section>
  );
};

export default MainPage;
