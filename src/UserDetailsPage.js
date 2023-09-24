import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetailsPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';


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
     
    <div className="user-details-container">
      <Link to="/" className="btn btn-primary back-button">
        <i className="bi bi-arrow-left"></i> Back to Grid View
      </Link>
     
      
    <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />

      <h2>{`${user.name.first} ${user.name.last}`}</h2>




      <div className="user-contact">
        <i className="fs-4 bi-house"></i><span>
          Address: {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}
        </span>
      </div>
      <div className="user-contact">
        <i className="fs-4 bi-mailbox"></i><span> {user.email}</span>
      </div>

      <div className="user-contact">
        <i className="fs-4 bi-phone"></i><span className="user-contact-info">{user.phone}</span>
      </div>
    </div>

  );
};

export default UserDetailsPage;
