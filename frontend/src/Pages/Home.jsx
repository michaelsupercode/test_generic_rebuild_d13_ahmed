import { useState } from 'react';
import './App.css';
import JoinFlakebookForm from '../components/JoinFlakebookForm';
import UserList from '../components/UserList';

function Home() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <h1>Flakebook</h1>

      <h2>Join Flakebook</h2>
      <JoinFlakebookForm setUsers={setUsers} />

      <h2>user list</h2>
      <UserList users={users} setUsers={setUsers}  />
    </div>
  );
}

export default Home;
