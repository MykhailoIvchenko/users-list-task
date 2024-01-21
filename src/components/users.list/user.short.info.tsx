import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {setUser} from "../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";
import './user.short.info.scss';

const UserShortInfo: React.FC<UserDataProps> = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const renderTooltip = (text: string) => (
    <Tooltip>
      {text}
    </Tooltip>
  );

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
            {/*<OverlayTrigger overlay={renderTooltip('Name')}>*/}
              <span title={'Name'}>{user?.name}</span>
            {/*</OverlayTrigger>*/}
          </Col>

        <Col
          md={3}
          className={'UserShortInfo-Text'}
        >
          {/*<OverlayTrigger overlay={renderTooltip('City')}>*/}
            <span title={'City'}>{user?.address?.city}</span>
          {/*</OverlayTrigger>*/}
        </Col>

        <Col
          md={4}
          className={'UserShortInfo-Text'}
        >
          {/*<OverlayTrigger overlay={renderTooltip('Email')}>*/}
            <span title={'Email'}>{user?.email}</span>
          {/*</OverlayTrigger>*/}
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
