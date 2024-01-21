import React from 'react';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main.page/main.page";
import UserDetailsPage from "./components/user.details.page/user.details.page";
import NotFoundPage from "./components/not.found.page/not.found.page";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App: React.FC = () => {
  return (
    <div data-testid='App' className='App'>
      <Header />

      <main>
        <Routes>
          <Route index element={<MainPage />} />

          <Route path={'/users'} element={<MainPage />} />

          <Route path={'/users/:id'} element={<UserDetailsPage />} />

          <Route path={'/*'} element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
