import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=${userId}`)
      .then((res) => res.json())
      .then((userData) => setUser(userData.results[0]));
  }, [userId]);

  if (!user) return null;

  return (
    <div>
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <p>Email: {user.email}</p>
      <p>
        Address: {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}
      </p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetailsPage;
