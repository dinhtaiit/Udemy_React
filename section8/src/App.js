import React, {Fragment, useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] =  useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random.toString()}];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUsersHandler}/>
      <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;