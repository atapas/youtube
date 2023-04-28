import React, { useState } from 'react';
import './App.css';

export default function App({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(users);

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);
    setFiltered(users.filter((item) => item.name.includes(value)));
  };

  return (
    <div className="container">
      <div>
        {users.length !== filtered.length 
          ? `${filtered.length} matches` 
          : null}
      </div>
      <input onChange={handleChange} value={searchTerm} type="text" placeholder="Type a name"/>
      <div className="cards">
        {filtered.map((user) => (
          <div class="card">
            <div className="profile">
              <img src={user.avatar} alt={`Avatar image of ${user.name}`} />
            </div>
            <div className="body">
              <strong>{user.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
