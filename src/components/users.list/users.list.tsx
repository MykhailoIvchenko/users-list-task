import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getAllUsers, selectUsers} from "../../redux/slices/usersSlice";
import {setUser} from "../../redux/slices/userSlice";
import ListGroup from "react-bootstrap/ListGroup";
import Loader from "../loader/loader";
import UserShortInfo from "./user.short.info";

const UsersList = () => {
  //#region Work with users
  const { users, status } = useAppSelector(getAllUsers);
  const dispatch = useAppDispatch();

  const setUsers = () => {
    return dispatch(selectUsers());
  };

  useEffect(() => {
    setUser(null);
    setUsers();
  }, []);
  //#endregion

  return (
    <>
      {status == 'loading' ?
        <Loader />
        :
        <ListGroup>
          {users.map(user => (
            <ListGroup.Item
              key={user.id}
            >
              <UserShortInfo user={user} />
            </ListGroup.Item>
          ))
          }
        </ListGroup>
      }
    </>
  );
};

export default UsersList;
