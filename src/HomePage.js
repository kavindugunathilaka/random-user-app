import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((userData) => setUsers(userData.results));
  }, []);

  const generateNewUsers = () => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((userData) => setUsers(userData.results));
  };
  


  return (
    <div>
      <button onClick={generateNewUsers}>Generate New Users</button>
    <div className="user-grid">
            
    {users.map((user) => (
          <Link to={`/user/${user.login.uuid}`} key={user.login.uuid}>
            <div className="user-card">
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            </div>
          </Link>
        ))}
    </div>
    </div>
  );
};

export default HomePage;
