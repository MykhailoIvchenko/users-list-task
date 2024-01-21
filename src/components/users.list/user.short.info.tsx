import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {setUser} from "../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";
import './user.short.info.scss';

const UserShortInfo: React.FC<UserDataProps> = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleUserDetailsClick = (user: IUser | null) => {
    if (user) {
      dispatch(setUser(user));
      navigate(`/users/${user?.id}`);
    }
  }

  return (
    <div data-testid='UserShortInfo' className={'UserShortInfo'}>
      <Row>
          <Col
            md={3}
            className={'UserShortInfo-Text UserShortInfo-Text_Main'}
          >
            <span title={'Name'}>{user?.name}</span>
          </Col>

        <Col
          md={3}
          className={'UserShortInfo-Text'}
        >
          <span title={'City'}>{user?.address?.city}</span>
        </Col>

        <Col
          md={4}
          className={'UserShortInfo-Text'}
        >
          <span title={'Email'}>{user?.email}</span>
        </Col>

        <Col md={2} className={'UserShortInfo-ButtonContainer'}>
          <Button
            onClick={() => handleUserDetailsClick(user)}
          >
            Деталі
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UserShortInfo;
