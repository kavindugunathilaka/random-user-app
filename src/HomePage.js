import React from 'react'
import { useEffect, useState } from 'react';


function HomePage() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?resut=100')
      .then((res) => res.json())
      .then((userData) => setUsers(userData.results));
  }, []);

  const mapUsers = () => {
    return users.map((user) => (
      <div key={user.login.uuid}>
        <img src={user.picture.large} alt={user.name.first} />
      </div>
    ));
  };

  return (
    <div>
      {mapUsers()}
    </div>
  );
}

export default HomePage