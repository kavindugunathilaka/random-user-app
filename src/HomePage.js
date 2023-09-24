import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [totalFaces, setTotalFaces] = useState(0);


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500")
      .then((res) => res.json())
      .then((userData) => setUsers(userData.results));
  }, []);

  const generateNewUsers = () => {
    fetch("https://randomuser.me/api/?results=500")
      .then((res) => res.json())
      .then((userData) => {
        setUsers(userData.results);
        setTotalFaces(userData.results.length);
      })
      .catch((error) => {
        console.error('Error fetching new users:', error);
      });
  };
  
  

  const filterByGender = (gender) => {
    if (gender === 'all') {
      setFilteredUsers(users);
      setTotalFaces(users.length);
    } else {
      const filtered = users.filter(user => user.gender === gender);
      setFilteredUsers(filtered);
      setTotalFaces(filtered.length);
    }
  };

  return (
    <div className="App">
      <div>Total Faces: {totalFaces}</div>

      <div>
        <Link
          onClick={generateNewUsers}
          className="btn btn-primary back-button"
          style={{ width: "180px", position: "absolute", top: "0.1in", left: "14in" }}
        >
          Generate Users
        </Link>
      </div>

      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button
          type="button"
          className="btn btn-outline-primary rounded-pill mx-2"
          onClick={() => filterByGender("all")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-primary rounded-pill mx-1"
          onClick={() => filterByGender("female")}
        >
          Ladies
        </button>
        <button
          type="button"
          className="btn btn-outline-primary rounded-pill mx-2"
          onClick={() => filterByGender("male")}
        >
          Gents
        </button>
      </div>

      <div className="user-grid">
        {(filteredUsers.length > 0 ? filteredUsers : users).map((user) => (
          <Link to={`/user/${user.login.uuid}`} key={user.login.uuid}>
            <div className="user-card">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
