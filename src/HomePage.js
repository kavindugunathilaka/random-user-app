import React from 'react'
import { useEffect, useState } from 'react';
import './HomePage.css';


function HomePage() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((userData) => setUsers(userData.results));

  }, []);

  const mapUsers = () => {

    console.log(users);

    return users.map((user) => (
      <div key={user.login.uuid}>
        <img src={user.picture.large} alt={user.name.first} />
      </div>
    ));
  };

  return (
    <div className="user-grid">
      {mapUsers()}
       </div>
  );
}

export default HomePage