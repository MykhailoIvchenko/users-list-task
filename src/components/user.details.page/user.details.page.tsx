import React, {useLayoutEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {selectUser, setUser} from "../../redux/slices/userSlice";
import Container from "react-bootstrap/Container";
import Loader from "../loader/loader";
import UserDetails from "./user.details";
import {usersService} from "../../services/users.service";
import {useParams} from "react-router-dom";

const UserDetailsPage: React.FC = () => {
  const selectedUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    if (!selectedUser.id) {
      if (id) {
        setIsLoading(true);
        usersService.getUserById(parseInt(id))
          .then(user => dispatch(setUser(user))).finally(() => {
            setIsLoading(false)
        })
      }
    }
  }, [])

  return (
    <Container>
      {isLoading
        ? <Loader />
        : <UserDetails />
      }
    </Container>
  );
};

export default UserDetailsPage;
